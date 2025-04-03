window.addEventListener('DOMContentLoaded', async () => {
    console.log('Loading Initial Memory Cache');
  
    await Promise.all([
      window.api.store.refreshAuthors(),
    //   window.api.store.refreshCategories(),
    //   window.api.store.refreshBooks()
    ]);
  
    console.log('AppInit: cache is ready');
  });
  