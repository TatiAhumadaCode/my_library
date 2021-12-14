const author = document.getElementById('author').value
const title = document.getElementById('title').value
const pages = document.getElementById('pages').value
const isBookRead = document.querySelector('input[name=read-book]:checked').value
const addBtn = document.querySelector('button');
const tableBook = document.querySelector('.table-book');




class Book {
    constructor(author, title, pages, isBookRead) {
        this.author = author
        this.title = title
        this.pages = pages
        this.isBookRead = isBookRead
    }

    addBook() {
        const row = tableBook.insertRow(-1);
        
        const cell1 = row.insertCell(0);
        cell1.innerText = `${this.author}`

        const cell2 = row.insertCell(1);
        cell2.innerText = `${this.title}`

        const cell3 = row.insertCell(2);
        cell3.innerText = `${this.pages}`

        const cell4 = row.insertCell(3);
        cell4.setAttribute('id', 'cellActive');
        cell4.innerText = `${this.isBookRead}`;

        const cell5 = row.insertCell(4);
        const changeStatus = document.createElement('button');
        changeStatus.textContent = 'Change status';
        
        changeStatus.addEventListener('click', () => {

            if(this.isBookRead === 'yes') {
                const checked = document.getElementById('cellActive');
                checked.innerText = "It's not read yet"
                return;
            }
            if(this.isBookRead === 'no') {
                const checked = document.getElementById('cellActive');
                checked.innerText = "it's read";
                return;
            }
        })

        const cell6 = row.insertCell(5);
        const deleteList = document.createElement('button');
        deleteList.classList.add('deleteBtn');
        deleteList.textContent = 'Delete';

        cell5.appendChild(changeStatus)
        cell6.appendChild(deleteList);

        //events inside rows
        deleteList.addEventListener('click', () => {
            row.parentNode.removeChild(row)
        });

    }
}

const newBook = new Book(author, title, pages, isBookRead);

//events

addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    newBook.addBook(author, title, pages, isBookRead);

    form.reset();

})
