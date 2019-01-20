// hardcoded books records
const year1984 = new Book("year1984", "G.Orwell", 333, 'Read');
const harryPotter = new Book("Harry Potter", "JKR", 400, 'Reading');

// UI variables
const bookList = document.querySelector('#bookList');
const newBookBtn = document.querySelector('.btn--new-book');
const newBookForm = document.querySelector('#newBookForm');

// Book prototype
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

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

function addBook(e) {
   let newBookTitle = newBookForm.querySelector('[name="title"]');
   let newBookAuthor = newBookForm.querySelector('[name="author"]');
   let newBookPages = newBookForm.querySelector('[name="pages"]');
   let newBookRead = newBookForm.querySelector('[name="read"]');

   
   let newBook = new Book(newBookTitle.value, 
       newBookAuthor.value, 
       newBookPages.value, 
       newBookRead.value);

    
    // update mylibrary array
   addBookToLibrary(newBook);
   

   //clean form's inputs
   newBookTitle.value = "";
   newBookAuthor.value = "";
   newBookPages.value = "";
   newBookRead.value = "Read";
   
   //hide add book form
   newBookForm.classList.add('hidden');
   
   e.preventDefault();
   render();
}

// delete book from the library
function deleteBook(e){
    // get book-id by traversing DOM tree
    const bookId = e.target.parentNode.attributes[1].nodeValue;
    
    // book-id correspond to book index in array, delete the book from the array
    myLibrary.splice(bookId,1)

    // delete div element 
    bookList.removeChild(e.target.parentNode);
   
}


let myLibrary = [];

addBookToLibrary(year1984)
addBookToLibrary(harryPotter)

// Add Event Listeners

// show add new book form
newBookBtn.addEventListener('click', function(){
    newBookForm.classList.toggle('hidden');
}) 

// submit new book
newBookForm.addEventListener('submit', addBook);

render();
