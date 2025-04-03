// let allAuthors = [];
// let filteredAuthors = [];
// let selectedAuthors = [];

// window.addEventListener('DOMContentLoaded', () => {
//   loadAuthors();
// });

// async function loadAuthors() {
//   const result = await window.api.store.refreshAuthors();
//   allAuthors = result || [];
//   filteredAuthors = allAuthors;
//   displayAuthors(filteredAuthors);
// }


// function filterAuthors(query) {
//   query = query.toLowerCase();

//   return allAuthors.filter(author =>
//     author.name.toLowerCase().includes(query) ||
//     author.country.toLowerCase().includes(query)
//   );
// }


// document.getElementById('searchInput').addEventListener('input', (event) => {
//   const query = event.target.value;
//   filteredAuthors = filterAuthors(query);
//   displayAuthors(filteredAuthors);
// });


// function displayAuthors(authors) {
//   const authorsList = document.getElementById('authorsList');
//   authorsList.innerHTML = authors.map((author) =>
//     `<li data-id="${author.id}" class="author-item">
//       ${author.name} - ${author.country}
//     </li>`
//   ).join('');

//   document.querySelectorAll('.author-item').forEach(li => {
//     li.addEventListener('click', () => {
//       const id = parseInt(li.dataset.id);
//       toggleAuthorSelection(id);
//     });
//   });
// }

// function toggleAuthorSelection(authorId) {
//   const author = allAuthors.find(a => a.id === authorId);
//   const exists = selectedAuthors.some(a => a.id === author.id);

//   if (exists) {
//     selectedAuthors = selectedAuthors.filter(a => a.id !== author.id);
//   } else {
//     selectedAuthors.push(author);
//   }

//   console.log("Selected Authors:", selectedAuthors);
// }
