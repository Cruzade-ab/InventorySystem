let authors = [];
let selectedAuthors = [];

let categorias = [];
let tipoObras = [];

let selectedCategorias = [];
let selectedTipoObras = [];

// Authors
function setAuthors(newAuthors) {
    authors = newAuthors;
}

function getAuthors() {
    return authors;
}

// Selected Authors
function setSelectedAuthors(authors) {
  selectedAuthors = authors;
}

function getSelectedAuthors() {
  return selectedAuthors;
}

function clearSelectedAuthors() {
  selectedAuthors = [];
}

// Categorias
function setCategorias(newCategory) {
  categorias = newCategory
}

function getCategorias() {
  return categorias;
}

function clearSelectedCategorias() {
  selectedClear = [];
}


// Selected Categorias
function setSelectedCategorias(newCategory) {
  selectedCategorias = newCategory
}

function getSelectedCategorias() {
  return selectedCategorias;
}



// Tipo Obras
function setTipoObra(newTipoObra) {
  tipoObras = newTipoObra
}

function getTipoObra() {
  return tipoObras;
}

// Selected Categorias
function setSelectedTipoObra(newTipoObra) {
  selectedTipoObras = newTipoObra
}

function getSelectedTipoObra() {
  return selectedTipoObras;
}

function clearSelectedTipoObra() {
  selectedTipoObras = [];
}


module.exports = {
    getAuthors,
    setAuthors,
    setSelectedAuthors,
    getSelectedAuthors,
    clearSelectedAuthors,
    getCategorias,
    getSelectedCategorias,
    getTipoObra,
    getSelectedTipoObra,
    setSelectedCategorias,
    setSelectedTipoObra,
    setCategorias,
    setTipoObra,
    clearSelectedCategorias,
    clearSelectedTipoObra
};