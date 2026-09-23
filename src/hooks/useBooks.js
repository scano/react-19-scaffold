import { useEffect, useState } from 'react'
import { fetchBooks } from '../api/booksApi.js'
import { initialBooks } from '../data/books.js'

export function useBooks() {
  const [books, setBooks] = useState([])
  const [status, setStatus] = useState('loading')
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
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setBooks(initialBooks)
          setError(requestError.message)
          setStatus('error')
        }
      }
    }

    loadBooks()

    return () => controller.abort()
  }, [reloadToken])

  function retry() {
    setReloadToken((current) => current + 1)
  }

  return { books, status, error, retry }
}
