import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../features/bookSlics';

export default function BookList({onHandleEdit}) {

  const books = useSelector((state) => state.booksR.books);
  const dispatch = useDispatch();
  const handleDeleted = (id) => {
    dispatch(deleteBook(id));
  }
  const handleEdit = (book) => {
    onHandleEdit(book);
  }
  return (
    <div>
      <h2>List Of Books</h2>
      {books && books.length > 0 ? ( 
        <ul>
          {books.map((book) => {
            return (<li key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.price}</p>
              <p>{book.quantity}</p>
              <button onClick={() => handleEdit(book)}>Edit</button>
              <button onClick={() => handleDeleted(book.id)}>Deleted</button>
            </li>
            );
          })
          }
        </ul>
      ) : (
        <p>No Book Found</p>
      )}
    </div>
  )
}
