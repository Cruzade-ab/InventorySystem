let categorias = [];
let selectedCategorias = [];

let tipoObras = [];
let selectedTipoObras = [];

(async () => {
    const result1 = await window.api.store.refreshCategorias();
    categorias = result1.data || [];
    
    const result2 = await window.api.store.refreshTipoObras();
    tipoObras = result2.data || [];
  
    console.log('[categorias] Categorias loaded:', categorias);
    console.log('[tipoObras] TipoObras loaded:', tipoObras);
  
    displayCategoria(categorias);
    // displayTipoObra(tipoObras);

  })();
  


  async function displayCategoria(categorias) {
    console.log("Displaying Categorias: ", categorias);
  
    const categoriasList = document.getElementById('categoriasList');
    categoriasList.innerHTML = categorias.map((categoria) => {
      console.log('[categoria ID]:', categoria.categoriaId, '| name:', categoria.nombre);
      return `
        <div data-id="${categoriaId}" class="categoria-item border rounded px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer shadow w-full">
          ${categoria.nombre}
        </div>
      `;
    }).join('');
  
    document.querySelectorAll('.categoria-item').forEach(div => {
      div.addEventListener('click', () => {
        const id = parseInt(div.dataset.id);
        console.log("Clicked categoria ID:", id);
        toggleCategoriasSelection(id);
      });
    });
  }
  
  
  function displaySelectedCategorias() {
    const container = document.getElementById('selectedCategoriasList');
  
    container.innerHTML = selectedCategorias.map(categoria => `
      <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2">
        <span>${categoria.nombre}</span>
        <button class="text-red-500 font-bold remove-categori" data-id="${categoria.categoriaId}">&times;</button>
      </div>
    `).join('');
  
    // click handler to remove button
    document.querySelectorAll('.remove-categoria').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        toggleCategoriasSelection(id); 
      });
    });
  }
  
  
  function toggleCategoriasSelection(categoriaId) {
    const categoria = categorias.find(c => c.categoriaId === categoriaId);
    const exists = selectedCategorias.some(c => c.categoriaId === categoriaId);
  
    if (exists) {
      selectedCategorias = selectedCategorias.filter(c => c.categoriaId !== categoriaId);
    } else {
      selectedCategorias.push(categoria);
    }
  
    window.api.store.setSelectedCategorias(selectedCategorias);
    console.log("Selected Categorias:", selectedCategorias);
    displaySelectedCategorias();
  }
  