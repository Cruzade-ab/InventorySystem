let authorsArray = [];
let selectedAuthors = [];

(async () => {
  const result = await window.api.store.refreshAuthors();
  authorsArray = result.data || [];

  console.log('[authorsView] Authors loaded:', authorsArray);

  displayAuthors(authorsArray);
})();


async function displayAuthors(authors) {
  console.log("Displaying Authors: ", authors);

  const authorsList = document.getElementById('authorsList');
  authorsList.innerHTML = authors.map((author) => {
    console.log('[author ID]:', author.autorId, '| name:', author.nombre);
    return `
      <div data-id="${author.autorId}" class="author-item border rounded px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer shadow w-full">
        ${author.nombre}
      </div>
    `;
  }).join('');

  document.querySelectorAll('.author-item').forEach(div => {
    div.addEventListener('click', () => {
      const id = parseInt(div.dataset.id);
      console.log("Clicked author ID:", id);
      toggleAuthorSelection(id);
    });
  });
}


function filterAuthors(query) {
  query = query.toLowerCase() || '';
  return authorsArray.filter(author =>
    (author.nombre || '').toLowerCase().includes(query)
  );
}

document.getElementById('searchInput').addEventListener('input', (event) => {
  const query = event.target.value;
  console.log("Search Query: ", query)

  if (!query.trim()) {
    displayAuthors(authorsArray);
    return;
  }

  const filteredAuthors = filterAuthors(query);
  displayAuthors(filteredAuthors);
});


function displaySelectedAuthors() {
  const container = document.getElementById('selectedAuthorsList');

  container.innerHTML = selectedAuthors.map(author => `
    <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2">
      <span>${author.nombre}</span>
      <button class="text-red-500 font-bold remove-author" data-id="${author.autorId}">&times;</button>
    </div>
  `).join('');

  // click handler to remove button
  document.querySelectorAll('.remove-author').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      toggleAuthorSelection(id); 
    });
  });
}


function toggleAuthorSelection(authorId) {
  const author = authorsArray.find(a => a.autorId === authorId);
  const exists = selectedAuthors.some(a => a.autorId === authorId);

  if (exists) {
    selectedAuthors = selectedAuthors.filter(a => a.autorId !== authorId);
  } else {
    selectedAuthors.push(author);
  }

  window.api.store.setSelectedAuthors(selectedAuthors);
  console.log("Selected Authors:", selectedAuthors);
  displaySelectedAuthors();
}
