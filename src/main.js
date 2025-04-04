const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path');
const { getAutores , createAuthor} = require('../src/DB/autors');
const { getCategorias, createCategoria, getTiposObra, createTipoObra } = require('..//src/DB/categoria');

let window; 

const createWindow = () => {
 
  window = new BrowserWindow({
    width: 800,
    height: 600, 
    fullscreen: true ,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, 
      contextIsolation: true,
      sandbox: false     }
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
  window.loadFile(filePath);
});

ipcMain.on('navigate-to-inventory-management', () => {
  console.log('Navigating to Inventory management page');
  const filePath = path.join(__dirname, 'views/inventoryManagement.html');
  window.loadFile(filePath);
});

ipcMain.on('navigate-to-inventory-visualization', () => {
  console.log('Navigating to Inventory Visualization page');
  const filePath = path.join(__dirname, 'views/visualizarInventario.html');
  window.loadFile(filePath);
});


// <> -DB Handles- <>
// Autores
ipcMain.handle('get-autores', async () => {
  console.log('Fetching authors from database...');
  try {
    const rows = await getAutores(); 
    console.log('Fetched authors:', rows);
    return { success: true, data: rows };
  } catch (err) {
    console.error('Error fetching authors:', err);
    return { success: false, message: err.message };
  }
});

ipcMain.handle('create-author', async (event, authorData) => {
  try {
      const savedAuthor = await createAuthor(authorData);
      return { success: true, data: savedAuthor };
  } catch (err) {
      return { success: false, message: err.message };
  }
});

// Obra/ TIpo Obra


ipcMain.handle('get-categorias', async () => {
  console.log('Fetching categories from database...');
  try {
    const rows = await getCategorias(); 
    console.log('Fetched categories:', rows);
    return { success: true, data: rows };
  } catch (err) {
    console.error('Error fetching categories:', err);
    return { success: false, message: err.message };
  }
});

ipcMain.handle('create-categoria', async (event, categoryData) => {
  try {
      const savedCategory = await createCategoria(categoryData);
      return { success: true, data: savedCategory };
  } catch (err) {
      return { success: false, message: err.message };
  }
});

ipcMain.handle('get-tipo-obra', async () => {
  console.log('Fetching Tipos Obra from database...');
  try {
    const rows = await getTiposObra(); 
    console.log('Fetched Tipo Obras:', rows);
    return { success: true, data: rows };
  } catch (err) {
    console.error('Error fetching tipoObra:', err);
    return { success: false, message: err.message };
  }
});

ipcMain.handle('create-tipo-obra', async (event, tipoObraData) => {
  try {
      const savedTipoObraData = await createTipoObra(tipoObraData);
      return { success: true, data: savedTipoObraData };
  } catch (err) {
      return { success: false, message: err.message };
  }
});