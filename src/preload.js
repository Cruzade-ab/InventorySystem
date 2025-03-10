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
    addAutor: (autor) => ipcRenderer.invoke('add-autor', autor)
})