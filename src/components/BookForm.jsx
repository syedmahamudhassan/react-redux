import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../features/bookSlics";

export default function BookForm({editBook,onCancel}) {
    const [book, setBook] = useState({
        title: '',
        author: '',
        price: '',
        quantity: '',
    });


    useEffect(() => {
        if (editBook) {
            setBook(editBook);
        }
    }, [editBook]);

    const dispatch = useDispatch();
    const handleChange = (event) => {
       const { name, value } = event.target;
       setBook({ ...book, [name]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
       if(editBook) {
        dispatch(updateBook({ ...book, id: editBook.id })); 
       } else {
        dispatch(addBook({ ...book, id: nanoid() }));
       }
       setBook({
        title: '',
        author: '',
        price: '',
        quantity: '',
       });
    }
  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={book.title} onChange={handleChange} required />
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" value={book.author} onChange={handleChange} required />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={book.price} onChange={handleChange} required />
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={book.quantity} onChange={handleChange} required />
        {editBook && (
            <button type="submit">Update Book</button>
        )}
        {!editBook && (
            <button type="submit">Add Book</button>
        )} 

        {editBook && (
            <button type="button" onClick={onCancel}>Cancel</button>
        )}
      </form>
    </div>
  )
}
