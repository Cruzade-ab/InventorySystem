window.addEventListener('DOMContentLoaded', async () => {
    console.log('Loading Initial Memory Cache');
  
    await Promise.all([
      window.api.store.refreshAuthors(),
    //   window.api.store.refreshCategories(),
    //   window.api.store.refreshBooks()
    ]);
    
    let autores =  window.api.store.getAuthors()
       
    console.log('AppInit: cache is ready');
    console.log('Autores:', autores);

  });
  