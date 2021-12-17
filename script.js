const author = document.getElementById('author')
const title = document.getElementById('title')
const pages = document.getElementById('pages')
const read = document.querySelector('input[name=read]')
const addBtn = document.querySelector('button');
const tableBook = document.querySelector('.table-book');
const dataForm = document.querySelector('#dataForm');

//event to add the book row to the table

addBtn.addEventListener('click', addBook);


let myLibrary = [];

//constructor

class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}


//function to render the book and add to the event

function addBook(event) {

    event.preventDefault()
    createBook();
    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
    dataForm.reset();

}

//function to create the book's rows

function createBook() {
    const row = tableBook.insertRow(-1);
        
    const cell1 = row.insertCell(0);
    cell1.innerText = `${author.value}`

    const cell2 = row.insertCell(1);
    cell2.innerText = `${title.value}`

    const cell3 = row.insertCell(2);
    cell3.innerText = `${pages.value}`

    const cell4 = row.insertCell(3);
    cell4.classList.add('row-four');

    const changeStatus = document.createElement('button');
    changeStatus.classList.add('toggle-btn')
    
    if(read.checked === false) {
        changeStatus.textContent = "It's not read yet";
        changeStatus.style.backgroundColor = '#f73c53';
        changeStatus.style.color = 'white';
        
    } else {
        changeStatus.textContent = "It's already read";
        changeStatus.style.backgroundColor = '#76f074';
        changeStatus.style.color = 'black';
    }

    cell4.appendChild(changeStatus)
    
    //event to change status' input

    changeStatus.addEventListener('click', () => {
        if(changeStatus.innerText === "It's not read yet") {
            changeStatus.innerText = "It's already read";
            changeStatus.style.backgroundColor = '#76f074';
            changeStatus.style.color = 'black';
            this.read = 'yes';
        } else {
            changeStatus.innerText = "It's not read yet";
            changeStatus.style.backgroundColor = '#f73c53';
            changeStatus.style.color = 'white';
            this.read = 'no';
        }
    })

    const deleteList = document.createElement('i');
    deleteList.classList.add('far');
    deleteList.classList.add('fa-trash-alt');

    //event to delete the rows

    cell4.appendChild(deleteList);

    deleteList.addEventListener('click', () => {
        row.parentNode.removeChild(row)
    });
}



