
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

// hardcoded books records
const year1984 = new Book("year1984", "G.Orwell", 333, false);
addBookToLibrary(year1984)
const harryPotter = new Book("Harry Potter", "JKR", 400, true);
addBookToLibrary(harryPotter)
console.table(myLibrary);

const bookList = document.querySelector('#bookList');


function render(){
    bookList.innerHTML = "";
    
    for (let i = 0; i < myLibrary.length; i++){
        const div = document.createElement('div');
   
        const authorDiv = document.createElement('p');
        const titleDiv = document.createElement('p');
        const pagesDiv = document.createElement('p');
        const readDiv = document.createElement('p');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = "Delete";

        const bookId = i;

        titleDiv.textContent = `${myLibrary[i].title}`;
        authorDiv.textContent = `${myLibrary[i].author}`;
        pagesDiv.textContent = `${myLibrary[i].pages}`;
        readDiv.textContent = `${myLibrary[i].read}`;

        div.classList.add('shelf');

        div.setAttribute('data-bookId', bookId);
        div.appendChild(titleDiv);
        div.appendChild(authorDiv);
        div.appendChild(pagesDiv);
        div.appendChild(readDiv);
        div.appendChild(deleteBtn);
        bookList.appendChild(div);
        
        deleteBtn.addEventListener('click', deleteBook);
        
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

addBookBtn.addEventListener('click', addBook);

function addBook() {
   let newBookTitle = document.querySelector('[name="title"]');
   let newBookAuthor = document.querySelector('[name="author"]');
   let newBookPages = document.querySelector('[name="pages"]');
   let newBookRead = document.querySelector('[name="read"]');

   let newBook = new Book(newBookTitle.value, 
    newBookAuthor.value, 
    newBookPages.value, 
    newBookRead.checked);

   addBookToLibrary(newBook);
   //clean form's inputs
   newBookTitle.value = "";
   newBookAuthor.value = "";
   newBookPages.value = "";
   newBookRead.chcecked = false;
     
   render();

   newBookForm.classList.add('hidden');

}
// delete book from the library

function deleteBook(e){
    
    // get book-id by traversing DOM tree
    const bookId =e.target.parentNode.attributes[1].nodeValue;
    
    // get index of book from books array, update the array
    const index = myLibrary.indexOf(bookId);
    myLibrary.splice(index,1)

    // delete div element 
    bookList.removeChild(e.target.parentNode);

    

}




render();

// // add event listener to delete button(s)
// const deleteBtns = document.gs