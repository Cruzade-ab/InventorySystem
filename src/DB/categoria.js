const db = require('./database')

async function getCategorias() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Categoria`, [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

async function createCategoria(categoriaData) {
  const { nombre } = categoriaData;

  return new Promise((resolve) => {
    db.run(
      `INSERT INTO Categoria (nombre) VALUES (?)`,
      [ nombre ],
      function (err) {
        if (err) {
          console.error("Error inserting category:", err);
          resolve({ success: false, message: err.message });
        } else {
          resolve({
            success: true,
            data: { id: this.lastID, nombre }
          });
        }
      }
    );
  });
}

async function getTiposObra() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM TipoObra`, [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

async function createTipoObra(tipoObraData) {
  const { nombre } = tipoObraData;

  return new Promise((resolve) => {
    db.run(
      `INSERT INTO TipoObra (nombre) VALUES (?)`,
      [ nombre ],
      function (err) {
        if (err) {
          console.error("Error inserting category:", err);
          resolve({ success: false, message: err.message });
        } else {
          resolve({
            success: true,
            data: { id: this.lastID, nombre }
          });
        }
      }
    );
  });
}
    
module.exports = { getCategorias, createCategoria, getTiposObra, createTipoObra};