const sqlite3 = require('sqlite3');
const {app} = require('electron');
const fs = require('fs');
const path = require('path');

const userDataPath = app.getPath('userData')
const dbPath = path.join(userDataPath, 'inventorySystem.db');

const originalDbPath = path.join(process.resourcesPath, 'inventorySystem.db')
const devDbPath = path.join(__dirname, 'inventorySystem.db')


if(!fs.existsSync(dbPath)){
    console.log("La base de datos no está en AppData.");

    // Base de datos del paquete o la de entorno de desarrollo
    const sourceDbPath = fs.existsSync(originalDbPath) ? originalDbPath : devDbPath;

    if (fs.existsSync(sourceDbPath)) {
        fs.copyFileSync(sourceDbPath, dbPath);
        console.log("Base de datos copiada a AppData.");
    } else {
        console.error("No se encontró el archivo de base de datos original.");
    }
}


const db = new sqlite3.Database(dbPath , (err) => {
    if(err) console.error('Error al conectar a la base de datos: ', err)
    else console.log("Conectando Sql Lite")
})

// Query para toda la data de la DB
db.all(`SELECT name FROM sqlite_master WHERE type='table'`, [], (err,rows) => {
    if(err) return console.error("Error Al Obtener Tablas", err.message);
    console.log("Tablas en DB: ", rows)
    console.log("DB :", rows.map(row => row.name))
})


// dbActions para autores
const dbActions = {
    getAutores: (callback)=> db.all(`Select * FROM Autor`, [], callback),
    addAutor: (Nombre, Nacionalidad, callback) => db.run('INSERT INTO Autor (Nombre, Nacionalidad) VALUES (?,?)', [Nombre, Nacionalidad], callback)
}

module.exports = dbActions