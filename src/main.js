const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path');
const dbActions = require('./utils/DB/database');

let window; 

const createWindow = () => {
 
  window = new BrowserWindow({
    width: 800,
    height: 600, 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, 
      contextIsolation: true     }
  });
  
  window.loadFile(path.join(__dirname, 'views/home.html'));
};

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
  


// ### Navigation Events
ipcMain.on('navigate-to-home', () => {
  console.log('Navigating to home page');
  const filePath = path.join(__dirname, 'views/home.html');
  console.log('Navigating to:', filePath);
  window.loadFile(filePath);
});

ipcMain.on('navigate-to-inventory-add', () => {
  console.log('Navigating to Inventory Add page');
  const filePath = path.join(__dirname, 'views/agregarInventario.html');
  console.log('Navigating to:', filePath);
  window.loadFile(filePath);
});

ipcMain.on('navigate-to-inventory-visualization', () => {
  console.log('Navigating to Inventory Visualization page');
  const filePath = path.join(__dirname, 'views/visualizarInventario.html');
  console.log('Navigating to:', filePath);
  window.loadFile(filePath);
});


// ## DB Autor Handles

  // ipcMain.handle('get-autores', async () => {
  // return new Promise((resolve, rejects) => {
  //     dbActions.getAutores((err, rows) => (err ? rejects(err) : resolve(rows)));
  // });
  // });

  // ipcMain.handle('add-autor', async (_, Autor) => {
  // return new Promise((resolve, rejects) => {
  //     dbActions.addAutor(Autor.name, Autor.nacionalidad, (err) => (err ? rejects(err) : resolve({ success: true })));
  // });
  // });
