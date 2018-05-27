
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
console.table(myLibrary);

function render(){

    const table = document.querySelector('table');
    table.innerHTML = "";
    
    
    for (let i = 0; i < myLibrary.length; i++){
        table.innerHTML += '<tr>' + '<td>' + myLibrary[i].title + '</td>'+ '<td>' + myLibrary[i].author + '</td>' + '<td>' + myLibrary[i].pages + '</td>' + '<td>' + myLibrary[i].read + '</td>' + '</tr>';
    }
}


// toggle new book form
const newBookBtn = document.querySelector('button');
newBookBtn.onclick = function(){
    const newBookForm = document.querySelector('#newBookForm');
    newBookForm.classList.toggle('hidden');
}

// update myLibrary list with a new book
const addBookBtn = document.querySelector('#addBook');

addBookBtn.onclick = function(){
   let title = document.querySelector('[name="title"]');
   let author = document.querySelector('[name="author"]');
   let pages = document.querySelector('[name="pages"]');
   let read = document.querySelector('[name="read"]');

   let newRecord = new Book(title.value, author.value, pages.value, read.value);

   addBookToLibrary(newRecord);
   //clean form's inputs
   title.value = "";
   author.value = "";
   pages.value = "";
   read.value = "";
     
   render();

   newBookForm.classList.add('hidden');

}
render();