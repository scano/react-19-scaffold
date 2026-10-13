import { useState } from 'react'
import type { Book } from '../types/book'

export function useBookSearch(books: Book[]) {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLocaleLowerCase('es')

  const filteredBooks = books.filter((book) => {
    const searchableText = `${book.title} ${book.author}`.toLocaleLowerCase('es')
    return searchableText.includes(normalizedQuery)
  })

  return { query, setQuery, filteredBooks }
}
