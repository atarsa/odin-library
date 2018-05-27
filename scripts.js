
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}


function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

// for debugging
const year1984 = new Book("year1984", "G.Orwell", 333, false);
addBookToLibrary(year1984)
const harryPotter = new Book("Harry Potter", "JKR", 400, true);
addBookToLibrary(harryPotter)
console.log(myLibrary);

function render(){
    const table = document.querySelector('table');
    
    
    for (let i = 0; i < myLibrary.length; i++){
        table.innerHTML += '<tr>' + '<td>' + myLibrary[i].title + '</td>'+ '<td>' + myLibrary[i].author + '</td>' + '<td>' + myLibrary[i].pages + '</td>' + '<td>' + myLibrary[i].read + '</td>' + '</tr>';
    }
}
render();