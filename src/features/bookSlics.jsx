import { createSlice } from "@reduxjs/toolkit";

const initialState = { books: [] };

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
    },
});


export default bookSlice.reducer;
