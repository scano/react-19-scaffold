import type { Book, BookTone } from '../types/book'

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=6'
const tones: BookTone[] = ['ink', 'rust', 'moss', 'sand', 'blue', 'plum']

interface JsonPlaceholderPost {
  userId: number
  id: number
  title: string
  body: string
}

interface FetchBooksOptions {
  signal?: AbortSignal
}

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export async function fetchBooks({ signal }: FetchBooksOptions = {}): Promise<Book[]> {
  const response = await fetch(API_URL, { signal })

  if (!response.ok) {
    throw new Error(`No se pudieron cargar los libros (${response.status})`)
  }

  const posts = await response.json() as JsonPlaceholderPost[]

  return posts.map((post, index) => ({
    id: `remote-${post.id}`,
    title: capitalize(post.title),
    author: `Autor ${post.userId}`,
    genre: 'Datos remotos',
    year: new Date().getFullYear(),
    tone: tones[index % tones.length],
    description: capitalize(post.body.replaceAll('\n', ' ')),
  }))
}
