import { useState } from 'react'

export function useBookSearch(books) {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLocaleLowerCase('es')

  const filteredBooks = books.filter((book) => {
    const searchableText = `${book.title} ${book.author}`.toLocaleLowerCase('es')
    return searchableText.includes(normalizedQuery)
  })

  return { query, setQuery, filteredBooks }
}
