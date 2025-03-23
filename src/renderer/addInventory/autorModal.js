
const openAuthorModalBtn = document.getElementById("openAuthorModalBtn");
const closeAuthorModalBtn = document.getElementById("closeAuthorModalBtn");
const authorModal = document.getElementById("authorModal");
const autorForm = document.getElementById("authorForm");

openAuthorModalBtn.addEventListener('click', ()=> {
    authorModal.classList.remove('hidden');
})

closeAuthorModalBtn.addEventListener('click', () => {
    authorModal.classList.add("hidden");
})


authorModal.addEventListener('click', (e) => {
    if (e.target === authorModal) {
        authorModal.classList.add('hidden');
    }
})

autorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = autorForm.nombre.value.trim();
    const nacionalidad = autorForm.nacionalidad.value.trim();
    const natalicio = autorForm.natalicio.value.trim();
    const fallecimiento = autorForm.fallecimiento.value.trim();

    ipcRenderer.send('create-author', {
        nombre,
        nacionalidad,
        natalicio,
        fallecimiento
    });

    autorForm.reset();
    authorModal.classList.add("hidden");
});



