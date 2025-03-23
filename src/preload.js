const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
        send: ipcRenderer.send, 
        on: ipcRenderer.on,
        once: ipcRenderer.once
      }
});

contextBridge.exposeInMainWorld('api', {
    getAutores: () => ipcRenderer.invoke('get-autores'),
    createAuthor: (autorData) => ipcRenderer.invoke('create-author', autorData)
})