document.addEventListener('DOMContentLoaded', () => {
  
    document.getElementById('home').addEventListener('click', () => {
      console.log('Navigating to Home'); 
      window.electron.ipcRenderer.send('navigate-to-home');
    });
  
    document.getElementById('inventoryAdd').addEventListener('click', async () => {
        console.log("Navigating to inventory add");
        window.electron.ipcRenderer.send('navigate-to-inventory-management'); 
    });
  
    document.getElementById('inventoryVisualization').addEventListener('click', () => {
      console.log('Navigating to Inventory visualization'); 
      window.electron.ipcRenderer.send('navigate-to-inventory-visualization');
    });
  });
  
