const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=6'
const tones = ['ink', 'rust', 'moss', 'sand', 'blue', 'plum']

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export async function fetchBooks({ signal } = {}) {
  const response = await fetch(API_URL, { signal })

  if (!response.ok) {
    throw new Error(`No se pudieron cargar los libros (${response.status})`)
  }

  const posts = await response.json()

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
