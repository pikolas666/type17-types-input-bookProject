import { bookArray } from "./types.js";
export const addbook = () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const year = document.getElementById('year');
    const online = document.getElementById('online');
    const genre = document.getElementById('genre');
    const newBook = {
        title: title.value,
        author: author.value,
        year: Number(year.value),
        online: online.checked ? "Digital book version available" : "Digital book version unavailable",
        genre: genre.value,
    };
    bookArray.push(newBook);
};
