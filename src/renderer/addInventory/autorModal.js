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

autorForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = autorForm.nombre.value.trim();
    const nacionalidad = autorForm.nacionalidad.value.trim();
    const natalicio = autorForm.natalicio.value.trim();
    const fallecimiento = autorForm.fallecimiento.value.trim();

    try {
        const result = await window.api.db.createAuthor({
            nombre,
            nacionalidad,
            natalicio,
            fallecimiento
        });

        console.log(result); // Maybe show a success toast here

        autorForm.reset();
        authorModal.classList.add("hidden");
    } catch (error) {
        console.error('Error creating author:', error);
        // You could show an error toast here
    }
});




