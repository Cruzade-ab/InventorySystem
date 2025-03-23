const db = require('./database')

async function getAutores() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Autor`, [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

async function createAuthor(authorData) {
  const { nombre,nacionalidad, natalicio, fallecimiento } = authorData;

  return new Promise((resolve) => {
    db.run(
      `INSERT INTO Autor (nombre,nacionalidad, natalicio, fallecimiento) VALUES (?, ?, ?, ?)`,
      [ nombre ,nacionalidad, natalicio, fallecimiento],
      function (err) {
        if (err) {
          console.error("Error inserting author:", err);
          resolve({ success: false, message: err.message });
        } else {
          resolve({
            success: true,
            data: { id: this.lastID, nombre ,nacionalidad, natalicio, fallecimiento }
          });
        }
      }
    );
  });
}

    
module.exports = { getAutores, createAuthor };