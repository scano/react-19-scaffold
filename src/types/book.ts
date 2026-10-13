export type BookTone = 'ink' | 'rust' | 'moss' | 'sand' | 'blue' | 'plum'

export interface Book {
  id: string
  title: string
  author: string
  genre: string
  year: number
  tone: BookTone
  description: string
}

export type LoadStatus = 'loading' | 'success' | 'error'
