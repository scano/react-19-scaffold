import { useEffect, useState } from 'react'
import { fetchBooks } from '../api/booksApi'
import { initialBooks } from '../data/books'
import type { Book, LoadStatus } from '../types/book'

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([])
  const [status, setStatus] = useState<LoadStatus>('loading')
  const [error, setError] = useState('')
  const [reloadToken, setReloadToken] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadBooks() {
      setStatus('loading')
      setError('')

      try {
        const remoteBooks = await fetchBooks({ signal: controller.signal })
        setBooks(remoteBooks)
        setStatus('success')
      } catch (requestError: unknown) {
        if (requestError instanceof Error && requestError.name === 'AbortError') {
          return
        }

        setBooks(initialBooks)
        setError(requestError instanceof Error ? requestError.message : 'Ha ocurrido un error inesperado.')
        setStatus('error')
      }
    }

    void loadBooks()
    return () => controller.abort()
  }, [reloadToken])

  function retry() {
    setReloadToken((current) => current + 1)
  }

  return { books, status, error, retry }
}
