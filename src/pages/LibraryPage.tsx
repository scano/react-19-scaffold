import Search from '../components/Search'
import BookList from '../components/BookList'
import type { Book, LoadStatus } from '../types/book'

interface LibraryPageProps {
  query: string
  setQuery: (query: string) => void
  books: Book[]
  status: LoadStatus
  error: string
  onRetry: () => void
}

function LibraryPage({ query, setQuery, books, status, error, onRetry }: LibraryPageProps) {
  return (
    <main>
      <section className="page-heading" aria-labelledby="library-title">
        <p className="eyebrow">Colección completa</p>
        <h1 id="library-title">Biblioteca</h1>
        <p>Busca por título o autor entre los libros disponibles.</p>
      </section>

      {status === 'loading' && (
        <p className="status-message" role="status">Cargando libros desde la API…</p>
      )}

      {status === 'error' && (
        <div className="status-message error" role="alert">
          <p>{error} Mostrando la colección local.</p>
          <button type="button" onClick={onRetry}>Reintentar</button>
        </div>
      )}

      {status !== 'loading' && (
        <>
          <Search query={query} onQueryChange={setQuery} resultCount={books.length} />
          <BookList books={books} />
        </>
      )}
    </main>
  )
}

export default LibraryPage
