
// UI variables
const bookList = document.querySelector('#bookList');
const newBookBtn = document.querySelector('.btn--new-book');
const newBookForm = document.querySelector('#newBookForm');

// Book prototype
class Book {
    constructor(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        
        
    }
    addBookToLibrary(){
        
        myLibrary.push(this);
    }
   
    
}

// function addBookToLibrary(Book) {
//     myLibrary.push(Book);
// }

function render(){
    bookList.innerHTML = "";
    
    for (let i = 0; i < myLibrary.length; i++){
        const div = document.createElement('div');
   
        const authorDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const pagesDiv = document.createElement('div');
        const statusDiv = document.createElement('div');

        // create select list with options
        const optionsArray = ['Read', 'Reading', 'To Read'];
        const selectList = document.createElement('select');
        statusDiv.appendChild(selectList);

        // Create and append the options
        for (let elm in optionsArray){
            let option = document.createElement('option');
            option.value = optionsArray[elm];
            option.text = optionsArray[elm];
            selectList.appendChild(option);
        }
        

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn--delete');
        deleteBtn.textContent = "Delete";

        const bookId = i;

        titleDiv.textContent = `${myLibrary[i].title}`;
        authorDiv.textContent = `${myLibrary[i].author}`;
        pagesDiv.textContent = `${myLibrary[i].pages}`;
        selectList.selectedIndex = `${myLibrary[i].status}`;

        div.classList.add('shelf');

        div.setAttribute('data-bookId', bookId);
        div.appendChild(titleDiv);
        div.appendChild(authorDiv);
        div.appendChild(pagesDiv);
        div.appendChild(statusDiv);
        div.appendChild(deleteBtn);
        bookList.appendChild(div);
        
        deleteBtn.addEventListener('click', deleteBook);
        
    }    
   
}

function addBook(e) {
   
   let newBookTitle = newBookForm.querySelector('[name="title"]');
   let newBookAuthor = newBookForm.querySelector('[name="author"]');
   let newBookPages = newBookForm.querySelector('[name="pages"]');
   let newBookStatus = newBookForm.querySelector('[name="status"]');

   
   let newBook = new Book(newBookTitle.value, 
       newBookAuthor.value, 
       newBookPages.value, 
       newBookStatus.selectedIndex)
       
    // update mylibrary array
   newBook.addBookToLibrary();
   

   //clean form's inputs
   newBookTitle.value = "";
   newBookAuthor.value = "";
   newBookPages.value = "";
   newBookStatus.value = "To Read";
   
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
// hardcoded books records
const year1984 = new Book("year1984", "G. Orwell", 333, 0);
const harryPotter = new Book("Harry Potter", "J. Rowling", 400, 1);

year1984.addBookToLibrary();
harryPotter.addBookToLibrary();

// Add Event Listeners

// show add new book form
newBookBtn.addEventListener('click', function(){
    newBookForm.classList.toggle('hidden');
}) 

// submit new book
newBookForm.addEventListener('submit', addBook);

render();
