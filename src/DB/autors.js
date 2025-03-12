const db = require('./database')

async function getAuthors() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Autor`, [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }
  
  async function addAuthor(name, country) {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO Autor (name, country) VALUES (?, ?)`, [name, country], function(err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, name, country });
      });
    });
  }
  
  module.exports = { getAuthors, addAuthor };