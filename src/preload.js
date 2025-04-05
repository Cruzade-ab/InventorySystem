const { contextBridge, ipcRenderer } = require('electron');
const dataStore = require('./DB/dataStorage');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: ipcRenderer.send,
    on: ipcRenderer.on,
    once: ipcRenderer.once
  }
});

// Expose DB methods (IPC -> Main Process -> SQLite)
contextBridge.exposeInMainWorld('api', {
  db: {
    getAuthorsFromDB: () => ipcRenderer.invoke('get-autores'),
    getCategorias: () => ipcRenderer.invoke('get-categorias'),
    getTipoObras: () => ipcRenderer.invoke('get-tipo-obra'),
    createAuthor: (authorData) => ipcRenderer.invoke('create-author', authorData),
    createCategorias: (categoryData) => ipcRenderer.invoke('create-categoria', categoryData),
    createTipoObras: (tipoObras) => ipcRenderer.invoke('create-tipo-obra', tipoObras),
  },

  store: {
    // Local Cache Arrays

    // Authors
    getAuthors: () => dataStore.getAuthors(),
    setAuthors: (authors) => dataStore.setAuthors(authors),
    refreshAuthors: async () => {
      const authors = await ipcRenderer.invoke('get-autores');
      console.log("[Preload]: ", authors)
      dataStore.setAuthors(authors);
      return authors;
    },

    // Categorias 
    getCategorias: () => dataStore.getCategorias(),
    setCategorias: (categoria) => dataStore.setCategorias(categoria),
    refreshCategorias: async () => {
      const categorias = await ipcRenderer.invoke('get-categorias');
      console.log("[Preload]: ", categorias)
      dataStore.setCategorias(categorias);
      return categorias;
    },

    // Tipo Obras
    getTipoObras: () => dataStore.getTipoObra(),
    setTipoObras: (tipoObra) => dataStore.setTipoObra(tipoObra),
    refreshTipoObras: async () => {
      const tipoObra = await ipcRenderer.invoke('get-tipo-obra');
      console.log("[Preload]: ", tipoObra)
      dataStore.setTipoObra(tipoObra);
      return tipoObra;
    },

    // Selected Authors
    getSelectedAuthors: () => dataStore.getSelectedAuthors(),
    setSelectedAuthors: (authors) => dataStore.setSelectedAuthors(authors),
    clearSelectedAuthors: () => dataStore.clearSelectedAuthors(),
    // Selected Categorias
    getSelectedCategorias: () => dataStore.getSelectedCategorias(),
    setSelectedCategorias: (categorias) => dataStore.setSelectedCategorias(categorias),
    clearSelectedCategorias: () => dataStore.clearSelectedCategorias(),
    // Selected TipoObra
    getSelectedTipoObras: () => dataStore.getSelectedTipoObra(),
    setSelectedTipoObras: (tipoObra) => dataStore.setSelectedTipoObra(tipoObra),
    clearSelectedTipoObras: () => dataStore.clearSelectedTipoObra(),

  }
});