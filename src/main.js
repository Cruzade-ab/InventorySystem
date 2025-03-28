const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path');
const { getAutores , createAuthor} = require('../src/DB/autors');

let window; 

const createWindow = () => {
 
  window = new BrowserWindow({
    width: 800,
    height: 600, 
    fullscreen: true ,
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


//## DB Autor Handles

ipcMain.handle('get-autores', async () => {
  console.log('Fetching authors from database...');
  return new Promise((resolve) => {
    getAutores((err, rows) => {
      if (err) {
        console.error('Error fetching authors:', err);
        resolve({ success: false, message: err.message });
      } else {
        console.log('Fetched authors:', rows);
        resolve({ success: true, data: rows });
      }
    });
  });
});

ipcMain.handle('create-author', async (event, authorData) => {
  try {
      const savedAuthor = await createAuthor(authorData);
      return { success: true, data: savedAuthor };
  } catch (err) {
      return { success: false, message: err.message };
  }
});


