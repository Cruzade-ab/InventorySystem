console.log('dataStore loaded');

let authors = [];

function setAuthors(newAuthors) {
    authors = newAuthors;
}

function getAuthors() {
    return authors;
}

function refreshAuthorsFromDB() {
    return window.electronAPI.invoke('get-authors').then(data => {
        setAuthors(data);
        return data;
    });
}

module.exports = {
    getAuthors,
    refreshAuthorsFromDB,
    setAuthors
};