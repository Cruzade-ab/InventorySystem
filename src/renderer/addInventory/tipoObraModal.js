const openTipoObraModalBtn = document.getElementById("openTipoObraModalBtn");
const closeTipoObraModalBtn = document.getElementById("closeTipoObraModalBtn");
const tipoObraModal = document.getElementById("tipoObraModal");
const tipoObraForm = document.getElementById("tipoObraForm");

openTipoObraModalBtn.addEventListener('click', ()=> {
    tipoObraModal.classList.remove('hidden');
})

closeTipoObraModalBtn.addEventListener('click', () => {
    tipoObraModal.classList.add("hidden");
})


tipoObraModal.addEventListener('click', (e) => {
    if (e.target === authorModal) {
        tipoObraModal.classList.add('hidden');
    }
})

tipoObraForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = tipoObraForm.nombre.value.trim();
   

    try {
        const result = await window.api.db.createTipoObras({
            nombre
        });

        console.log(result); // Maybe show a success toast here

        tipoObraForm.reset();
        tipoObraModal.classList.add("hidden");
    } catch (error) {
        console.error('Error creating author:', error);
        // You could show an error toast here
    }
});




