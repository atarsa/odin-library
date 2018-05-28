
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

        titleDiv.textContent = `${myLibrary[i].title}`;
        authorDiv.textContent = `${myLibrary[i].author}`;
        pagesDiv.textContent = `${myLibrary[i].pages}`;
        readDiv.textContent = `${myLibrary[i].read}`;

        div.classList.add('shelf');

        div.appendChild(titleDiv);
        div.appendChild(authorDiv);
        div.appendChild(pagesDiv);
        div.appendChild(readDiv);

        bookList.appendChild(div);
        
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
render();