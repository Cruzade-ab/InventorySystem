const {contextBridge, ipcRenderer} = require('electron');
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
      createAuthor: (authorData) => ipcRenderer.invoke('create-author', authorData)
    },
  
    // Expose local cache (memory)
    store: {
      getAuthors: () => dataStore.getAuthors(),
      setAuthors: (authors) => dataStore.setAuthors(authors),
      refreshAuthors: async () => {
        const authors = await ipcRenderer.invoke('get-autores');
        console.log("[Preload]: ", authors)
        dataStore.setAuthors(authors);
        return authors;
      }
    }
  });