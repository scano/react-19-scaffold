import { useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import Search from '../components/Search.jsx'
import BookList from '../components/BookList.jsx'
import { fetchBooks } from '../api/booksApi.js'
import { useBookSearch } from '../hooks/useBookSearch.js'

// Ejemplo alternativo: sustituye App por este componente en main.jsx.
// La API debe devolver un array de libros con la misma forma que src/data/books.js.
function AppWithApi() {
  const [books, setBooks] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  const { query, setQuery, filteredBooks } = useBookSearch(books)

  useEffect(() => {
    const controller = new AbortController()

    async function loadBooks() {
      try {
        const data = await fetchBooks({ signal: controller.signal })
        setBooks(data)
        setStatus('success')
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
          setStatus('error')
        }
      }
    }

    loadBooks()
    return () => controller.abort()
  }, [])

  return (
    <div className="app-shell">
      <Header bookCount={books.length} />
      <main>
        <section className="intro">
          <p className="eyebrow">React · conectado a una API</p>
          <h1>Historias desde <em>el servidor.</em></h1>
        </section>
        {status === 'loading' && <p className="status-message">Cargando libros…</p>}
        {status === 'error' && <p className="status-message error">{error}</p>}
        {status === 'success' && (
          <>
            <Search query={query} onQueryChange={setQuery} resultCount={filteredBooks.length} />
            <BookList books={filteredBooks} />
          </>
        )}
      </main>
    </div>
  )
}

export default AppWithApi
