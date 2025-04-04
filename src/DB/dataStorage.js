let authors = [];
let selectedAuthors = [];

function setSelectedAuthors(authors) {
  selectedAuthors = authors;
}

function getSelectedAuthors() {
  return selectedAuthors;
}

function clearSelectedAuthors() {
  selectedAuthors = [];
}

function setAuthors(newAuthors) {
    authors = newAuthors;
}

function getAuthors() {
    return authors;
}

module.exports = {
    getAuthors,
    setAuthors,
    setSelectedAuthors,
    getSelectedAuthors,
    clearSelectedAuthors
};