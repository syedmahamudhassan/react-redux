import { createSlice } from "@reduxjs/toolkit";

const initialState = { books: [
    { id: 1, title: 'Book 1', author: 'Author 1',price: 100,quantity: 10 },
    { id: 2, title: 'Book 2', author: 'Author 2',price: 200,quantity: 20 },
    { id: 3, title: 'Book 3', author: 'Author 3',price: 300,quantity: 30 },
    { id: 4, title: 'Book 4', author: 'Author 4',price: 400,quantity: 40 },
] };

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter((book) => book.id !== action.payload);
        },
        updateBook: (state, action) => {

            const { id, title, author, price, quantity } = action.payload;
            const exitingBook = state.books.find((book) => book.id === id);
            if(exitingBook) {
                exitingBook.title = title;
                exitingBook.author = author;
                exitingBook.price = price;
                exitingBook.quantity = quantity;
            }
        },
    },
});


export const { addBook, deleteBook,updateBook } = bookSlice.actions;

export default bookSlice.reducer;
 