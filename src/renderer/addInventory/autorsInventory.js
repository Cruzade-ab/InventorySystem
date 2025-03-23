let autoresArray = [];
let selectedAuthors = [];

window.api.getAutores().then(response => {
  if (response.success) {
    console.log("Fetched Authors:", response.data);
    autoresArray = response.data;
    displayAuthors(autoresArray);
  } else {
    console.error("Failed to fetch authors:", response.message);
  }
}).catch(err => {
  console.error("Unexpected error:", err);
});


// Display authors in the UI
function displayAuthors(authors) {
  const authorsList = document.getElementById('authorsList');
  authorsList.innerHTML = authors.map((author, index) =>
    `<li data-index="${index}" onclick="selectAuthor(${index})">
      ${author.name} - ${author.country}
    </li>`
  ).join('');
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  console.log("Search Query:", query); 
  
  const filteredAuthors = autoresArray.filter(author =>
    author.name.toLowerCase().includes(query) || 
    author.country.toLowerCase().includes(query)
  );

  console.log("Filtered List:", filteredAuthors);
  displayAuthors(filteredAuthors);
});

// Select or deselect an author
function selectAuthor(index) {
  const author = autoresArray[index];
  
  const exists = selectedAuthors.find(a => a.name === author.name);
  
  if (exists) {
    selectedAuthors = selectedAuthors.filter(a => a.name !== author.name); 
  } else {
    selectedAuthors.push(author); 
  }

  console.log("Selected Authors:", selectedAuthors);
}
