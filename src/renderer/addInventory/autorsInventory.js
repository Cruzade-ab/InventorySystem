import { getAuthors } from "../../DB/autors";

let autoresArray = [];
let selectedAuthors = [];



function displayAuthors(authors) {
    const authorsList = document.getElementById('authorsList');
    authorsList.innerHTML = authors.map((author, index) =>
      `<li data-index="${index}" onclick="selectAuthor(${index})">
        ${author.name} - ${author.country}
      </li>`
    ).join('');
  }


document.getElementById('searchInput').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const filteredAuthors = autoresArray.filter(author =>
      author.name.toLowerCase().includes(query) || 
      author.country.toLowerCase().includes(query)
    );
    
    displayAuthors(filteredAuthors);
  });


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