import type { ChangeEvent } from 'react'

interface SearchProps {
  query: string
  onQueryChange: (query: string) => void
  resultCount: number
}

function Search({ query, onQueryChange, resultCount }: SearchProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onQueryChange(event.target.value)
  }

  return (
    <section className="search-panel" aria-label="Buscar en la colección">
      <label htmlFor="book-search">Busca por título o autor</label>
      <div className="search-row">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input
          id="book-search"
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="Ej. Ursula, JavaScript…"
        />
        {query && (
          <button type="button" onClick={() => onQueryChange('')}>
            Limpiar
          </button>
        )}
      </div>
      <p className="result-count" aria-live="polite">
        {resultCount} {resultCount === 1 ? 'libro encontrado' : 'libros encontrados'}
      </p>
    </section>
  )
}

export default Search
