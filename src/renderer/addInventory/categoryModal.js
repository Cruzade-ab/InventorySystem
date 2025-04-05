const openCategoriaModalBtn = document.getElementById("openCategoriaModalBtn");
const closeCategoriaModalBtn = document.getElementById("closeCategoriaModalBtn");
const categoriaModal = document.getElementById("categoriaModal");
const categoriaForm = document.getElementById("categoriaForm");

openCategoriaModalBtn.addEventListener('click', ()=> {
    categoriaModal.classList.remove('hidden');
})

closeCategoriaModalBtn.addEventListener('click', () => {
    categoriaModal.classList.add("hidden");
})


categoriaModal.addEventListener('click', (e) => {
    if (e.target === authorModal) {
        categoriaModal.classList.add('hidden');
    }
})

categoriaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = categoriaForm.nombre.value.trim();
    console.log("Category name value: ", nombre)

    try {
        const result = await window.api.db.createCategorias({
            nombre
        });

        console.log(result); 

        categoriaForm.reset();
        categoriaModal.classList.add("hidden");
    } catch (error) {
        console.error('Error creating author:', error);
        // You could show an error toast here
    }
});




