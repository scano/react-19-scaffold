# El estante — laboratorio de React

Proyecto pequeño y didáctico para aprender el modelo mental de React con una colección de libros. Usa React, Vite, JavaScript con módulos ESM y CSS sin frameworks.

## Puesta en marcha

Necesitas Node.js 20.19+ o 22.12+ y pnpm.

```bash
pnpm install
pnpm dev
```

Vite mostrará la dirección local (normalmente `http://localhost:5173`). También puedes comprobar la versión de producción:

```bash
pnpm build
pnpm preview
```

## Mapa del proyecto

```text
src/
├── api/booksApi.js           # Petición fetch reutilizable
├── components/
│   ├── Header.jsx            # Props sencillas
│   ├── Search.jsx            # Evento onChange e input controlado
│   ├── BookList.jsx          # Lista, map, key y renderizado condicional
│   └── BookCard.jsx          # Componente de presentación y props
├── data/books.js             # Datos mock separados de la interfaz
├── examples/AppWithApi.jsx   # Carga REST, estados y useEffect
├── hooks/useBookSearch.js    # Custom hook con useState y filtrado
├── App.jsx                   # Composición y flujo de datos
├── main.jsx                  # Entrada de React y StrictMode
└── styles.css                # Estilos globales y responsive
```

## Qué practicar en cada archivo

- **`src/main.jsx`**: cómo React se conecta al elemento `#root`; qué hace `StrictMode` durante el desarrollo.
- **`src/App.jsx`**: composición de componentes, estado con `useState` y datos que bajan mediante props.
- **`src/components/Header.jsx`**: recibir y mostrar una prop (`bookCount`).
- **`src/components/Search.jsx`**: input controlado, evento `onChange`, callback recibido por props y renderizado condicional del botón.
- **`src/components/BookList.jsx`**: transformar datos con `map`, usar una `key` estable y mostrar un estado vacío.
- **`src/components/BookCard.jsx`**: desestructurar props y convertir un objeto de datos en interfaz.
- **`src/hooks/useBookSearch.js`**: extraer estado y lógica reutilizable a un custom hook. Cambia el filtro para incluir también `genre`.
- **`src/data/books.js`**: separar datos mock de componentes. Añade un libro y comprueba que la UI se actualiza sin tocar JSX.
- **`src/api/booksApi.js`**: encapsular `fetch`, comprobar `response.ok` y devolver JSON.
- **`src/examples/AppWithApi.jsx`**: estados `loading`, `success` y `error`; efecto para sincronizar con una API y cleanup con `AbortController`.
- **`src/styles.css`**: clases CSS, variables, grid, responsive y estados de interacción sin framework.

## Del mock a `GET /v1/books`

La aplicación inicial importa `initialBooks` para que funcione sin servidor. Cuando exista un endpoint `GET /v1/books`, abre `src/main.jsx` y sustituye:

```jsx
import App from './App.jsx'
```

por:

```jsx
import App from './examples/AppWithApi.jsx'
```

La respuesta del endpoint debe ser un array con objetos como este:

```json
{
  "id": "book-001",
  "title": "La mano izquierda de la oscuridad",
  "author": "Ursula K. Le Guin",
  "genre": "Ciencia ficción",
  "year": 1969,
  "tone": "ink",
  "description": "Un viaje a un planeta helado..."
}
```

El ejemplo REST está separado a propósito: primero aprende props, estado, eventos y listas; después compáralo con la versión que sincroniza datos externos mediante un efecto.

## Retos siguientes

1. Añade búsqueda por género.
2. Añade un botón para marcar libros como leídos.
3. Muestra un contador de libros leídos en `Header`.
4. Extrae esa nueva lógica a un custom hook.
5. Simula un error en la API y diseña un botón «Reintentar».
