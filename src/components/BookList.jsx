import React from 'react'
import { useSelector } from 'react-redux'

export default function BookList() {

  const books = useSelector((state) => state.booksR);

  return (
    <div>
      <h2>List Of Books</h2>
      {books && books.length > 0 ? (
        books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))
      ) : (
        <p>No Book Found</p>
      )}
    </div>
  )
}
