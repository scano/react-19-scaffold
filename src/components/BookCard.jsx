import { Link } from 'react-router-dom'

function BookCard({book, index}) {
	return (
		<Link className="book-card-link" to={`/biblioteca/${book.id}`} aria-label={`Ver detalle de ${book.title}`}>
			<article className={`book-card tone-${book.tone}`} style={{'--delay': `${index * 70}ms`}}>
				<div className="book-number" aria-hidden="true">
					{(index + 1).toString().padStart(2, '0')}
				</div>
				<div className="book-cover" aria-hidden="true">
					<span className="cover-initial">{book.title.charAt(0)}</span>
					<span className="cover-decoration">✦</span>
				</div>
				<div className="book-info">
					<p className="book-genre">{book.genre}</p>
					<h2>{book.title}</h2>
					<p className="book-author">por {book.author}</p>
					<p className="book-description">{book.description}</p>
					<span className="book-year">Edición · {book.year}</span>
				</div>
			</article>
		</Link>
	)
}

export default BookCard
