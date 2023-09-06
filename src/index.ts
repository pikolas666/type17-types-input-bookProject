import {BookType, BookArray, AddBook, bookArray } from "./types.js"
import {addbook} from "./actions.js"
 
const btn: HTMLButtonElement = document.getElementById('btn') as HTMLButtonElement;
const bookList: HTMLDivElement = document.getElementById('book-list') as HTMLDivElement;

const displayBooks = ()=>{
    bookList.innerHTML = '';
    console.log(bookArray)
    bookArray.forEach((book)=>{
        const bookInfo = document.createElement('div');
        bookInfo.innerHTML = `<h4>Title: ${book.title}</h4><p>Author: ${book.author}</p><p>Year: ${book.year}</p><p>${book.online}</p>`
        bookInfo.setAttribute('class', "book-info")
        bookList.append(bookInfo)
    })
} 
btn.addEventListener('click', () => {
    addbook();
    displayBooks();
});