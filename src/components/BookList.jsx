import BookCard from './BookCard.jsx'

function BookList({ books }) {
  if (books.length === 0) {
    return (
      <div className="empty-state">
        <span aria-hidden="true">∅</span>
        <h2>No hay coincidencias</h2>
        <p>Prueba con otro título o con el apellido del autor.</p>
      </div>
    )
  }

  return (
    <section className="book-grid" aria-label="Libros">
      {books.map((book, index) => (
        <BookCard key={book.id} book={book} index={index} />
      ))}
    </section>
  )
}

export default BookList
