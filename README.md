# El estante — laboratorio de React

Proyecto pequeño y didáctico para aprender el modelo mental de React con una colección de libros. Usa React, Vite, React Router, JavaScript con módulos ESM y CSS sin frameworks. El catálogo consume datos de JSONPlaceholder y utiliza datos locales como respaldo.

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
├── api/booksApi.js           # Fetch y adaptación de los datos remotos
├── components/
│   ├── Header.jsx            # Props sencillas
│   ├── Footer.jsx            # Pie global de la aplicación
│   ├── Search.jsx            # Evento onChange e input controlado
│   ├── BookList.jsx          # Lista, map, key y renderizado condicional
│   └── BookCard.jsx          # Componente de presentación y props
├── data/books.js             # Datos mock separados de la interfaz
├── hooks/
│   ├── useBooks.js           # Carga remota, estados y reintento
│   └── useBookSearch.js      # Estado y filtrado de la búsqueda
├── pages/
│   ├── HomePage.jsx          # Página de inicio
│   ├── LibraryPage.jsx       # Catálogo, búsqueda y estados de red
│   ├── BookDetailPage.jsx    # Detalle de una ruta dinámica
│   ├── AboutPage.jsx         # Información del proyecto
│   └── NotFoundPage.jsx      # Página para rutas desconocidas
├── App.jsx                   # Layout, rutas y estado compartido
├── main.jsx                  # Entrada de React y StrictMode
└── styles.css                # Estilos globales y responsive
```

## Qué practicar en cada archivo

- **`src/main.jsx`**: cómo React se conecta al elemento `#root`; qué hace `StrictMode` durante el desarrollo.
- **`src/App.jsx`**: layout global, definición de rutas y distribución del estado compartido.
- **`src/pages/`**: vistas completas asociadas a cada ruta de la aplicación.
- **`src/components/Header.jsx`**: recibir y mostrar una prop (`bookCount`).
- **`src/components/Search.jsx`**: input controlado, evento `onChange`, callback recibido por props y renderizado condicional del botón.
- **`src/components/BookList.jsx`**: transformar datos con `map`, usar una `key` estable y mostrar un estado vacío.
- **`src/components/BookCard.jsx`**: desestructurar props y convertir un objeto de datos en interfaz.
- **`src/hooks/useBooks.js`**: encapsular el ciclo de vida de una petición, sus estados, cancelación, respaldo y reintento.
- **`src/hooks/useBookSearch.js`**: extraer estado y lógica reutilizable a un custom hook. Cambia el filtro para incluir también `genre`.
- **`src/data/books.js`**: separar datos mock de componentes. Añade un libro y comprueba que la UI se actualiza sin tocar JSX.
- **`src/api/booksApi.js`**: encapsular `fetch`, comprobar `response.ok` y adaptar una respuesta externa al modelo de la aplicación.
- **`src/styles.css`**: clases CSS, variables, grid, responsive y estados de interacción sin framework.

## API de prueba

Al iniciarse, la aplicación solicita seis publicaciones a `https://jsonplaceholder.typicode.com/posts?_limit=6`. `src/api/booksApi.js` transforma la respuesta al modelo que esperan las tarjetas. La petición se puede cancelar con `AbortController` y la interfaz contempla carga, error y reintento.

Si el servicio no está disponible, se muestra un aviso y el catálogo continúa funcionando con `src/data/books.js` como respaldo local.

## Retos siguientes

1. Añade búsqueda por género.
2. Añade un botón para marcar libros como leídos.
3. Muestra un contador de libros leídos en `Header`.
4. Extrae esa nueva lógica a un custom hook.
5. Simula un error en la API y diseña un botón «Reintentar».
