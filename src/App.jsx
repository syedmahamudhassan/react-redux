import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

export default function App() {

  const [editBook, setEditBook] = useState(null);

  const handleEdit = (book) => {
    setEditBook(book);
  }
  const handleCancelEdit = () => {
    setEditBook(null);
  }

  return (
    <div className="App">
      <BookForm editBook={editBook} onCancel={handleCancelEdit} />
      <BookList  onHandleEdit={handleEdit} />
    </div>
  );
}
