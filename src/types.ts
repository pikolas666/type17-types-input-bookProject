export type BookType = {
    title: string;
    author: string;
    year: number;
    online: string;
    genre: string;
    id: number
}
export type BookArray = BookType[];

export type AddBook = Omit<BookType, "id">

export type UpdateBook = Pick<BookType, "title" | "author">

export type BookID = BookType["id"]

type BookOptionalType = Partial<BookType>;

export const bookArray: AddBook[] = []; 