// Este módulo no se usa en la versión inicial con datos mock.
// Consulta src/examples/AppWithApi.jsx para ver cómo conectarlo.
export async function fetchBooks({ signal } = {}) {
  const response = await fetch('/v1/books', { signal })

  if (!response.ok) {
    throw new Error(`No se pudieron cargar los libros (${response.status})`)
  }

  return response.json()
}
