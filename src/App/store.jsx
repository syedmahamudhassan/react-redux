
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/bookSlics.jsx';

const store = configureStore({
  reducer: {
    booksR: bookReducer,
  },
});


export default store;