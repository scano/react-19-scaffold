import { Link, useParams } from 'react-router-dom'

function BookDetail({ books }) {
  const { bookId } = useParams()
  const book = books.find((item) => item.id === bookId)

  if (!book) {
    return (
      <main>
        <section className="not-found" aria-labelledby="not-found-title">
          <p className="eyebrow">Libro no encontrado</p>
          <h1 id="not-found-title">Esta página no está en el estante.</h1>
          <Link className="primary-link" to="/biblioteca">
            Volver a la biblioteca <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="book-detail-main">
      <Link className="back-link" to="/biblioteca">
        <span aria-hidden="true">←</span> Volver a la biblioteca
      </Link>

      <article className={`book-detail tone-${book.tone}`}>
        <div className="detail-cover" aria-hidden="true">
          <span>{book.title.charAt(0)}</span>
          <small>El estante · {book.year}</small>
        </div>

        <div className="detail-content">
          <p className="eyebrow">{book.genre} · {book.year}</p>
          <h1>{book.title}</h1>
          <p className="detail-author">por {book.author}</p>
          <p className="detail-description">{book.description}</p>

          <dl className="book-metadata">
            <div>
              <dt>Autor</dt>
              <dd>{book.author}</dd>
            </div>
            <div>
              <dt>Género</dt>
              <dd>{book.genre}</dd>
            </div>
            <div>
              <dt>Publicación</dt>
              <dd>{book.year}</dd>
            </div>
          </dl>
        </div>
      </article>
    </main>
  )
}

export default BookDetail
