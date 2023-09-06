import {AddBook, bookArray} from "./types.js"

export const addbook = ()=>{

const title: HTMLInputElement = document.getElementById('title') as HTMLInputElement;
const author: HTMLInputElement = document.getElementById('author') as HTMLInputElement;
const year: HTMLInputElement = document.getElementById('year') as HTMLInputElement;
const online: HTMLInputElement = document.getElementById('online') as HTMLInputElement;
const genre: HTMLInputElement = document.getElementById('genre') as HTMLInputElement;

    const newBook: AddBook = {
        title: title.value,
        author: author.value,
        year: Number(year.value),
        online: online.checked ? "Digital book version available" : "Digital book version unavailable",
        genre: genre.value,   
    }   

    bookArray.push(newBook)
       
}