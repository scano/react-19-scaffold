# El estante — laboratorio de React

Proyecto pequeño y didáctico para aprender el modelo mental de React con una colección de libros. Usa React, TypeScript, Vite, React Router y CSS sin frameworks. El catálogo consume datos de JSONPlaceholder y utiliza datos locales como respaldo.

## Puesta en marcha

Necesitas Node.js 20.19+ o 22.12+ y pnpm.

```bash
pnpm install
pnpm dev
```

Vite mostrará la dirección local (normalmente `http://localhost:5173`). También puedes comprobar la versión de producción:

```bash
pnpm typecheck
pnpm build
pnpm preview
```

## Mapa del proyecto

```text
src/
├── api/booksApi.ts           # Fetch tipado y adaptación de los datos remotos
├── auth/AuthContext.tsx      # Sesión simulada y persistencia local
├── components/
│   ├── Header.tsx            # Props sencillas
│   ├── Footer.tsx            # Pie global de la aplicación
│   ├── ProtectedRoute.tsx    # Protección de rutas privadas
│   ├── Search.tsx            # Evento onChange e input controlado
│   ├── BookList.tsx          # Lista, map, key y renderizado condicional
│   └── BookCard.tsx          # Componente de presentación y props
├── data/books.ts             # Datos mock separados de la interfaz
├── hooks/
│   ├── useBooks.ts           # Carga remota, estados y reintento
│   └── useBookSearch.ts      # Estado y filtrado de la búsqueda
├── pages/
│   ├── HomePage.tsx          # Página de inicio
│   ├── LibraryPage.tsx       # Catálogo, búsqueda y estados de red
│   ├── BookDetailPage.tsx    # Detalle de una ruta dinámica
│   ├── AboutPage.tsx         # Información del proyecto
│   ├── LoginPage.tsx         # Formulario de acceso simulado
│   ├── ProfilePage.tsx       # Perfil privado del usuario
│   └── NotFoundPage.tsx      # Página para rutas desconocidas
├── types/                    # Modelos compartidos de dominio
├── App.tsx                   # Layout, rutas y estado compartido
├── main.tsx                  # Entrada de React y StrictMode
└── styles.css                # Estilos globales y responsive
```

## Qué practicar en cada archivo

- **`src/main.tsx`**: cómo React se conecta al elemento `#root`; qué hace `StrictMode` durante el desarrollo.
- **`src/App.tsx`**: layout global, definición de rutas y distribución del estado compartido.
- **`src/pages/`**: vistas completas asociadas a cada ruta de la aplicación.
- **`src/auth/AuthContext.tsx`**: sesión compartida, validación de las credenciales demo y persistencia del ID de usuario.
- **`src/components/Header.tsx`**: recibir y mostrar una prop (`bookCount`).
- **`src/components/Search.tsx`**: input controlado, evento `onChange`, callback recibido por props y renderizado condicional del botón.
- **`src/components/BookList.tsx`**: transformar datos con `map`, usar una `key` estable y mostrar un estado vacío.
- **`src/components/BookCard.tsx`**: desestructurar props y convertir un objeto de datos en interfaz.
- **`src/hooks/useBooks.ts`**: encapsular el ciclo de vida de una petición, sus estados, cancelación, respaldo y reintento.
- **`src/hooks/useBookSearch.ts`**: extraer estado y lógica reutilizable a un custom hook. Cambia el filtro para incluir también `genre`.
- **`src/data/books.ts`**: separar datos mock de componentes. Añade un libro y comprueba que la UI se actualiza sin tocar TSX.
- **`src/api/booksApi.ts`**: encapsular `fetch`, comprobar `response.ok` y adaptar una respuesta externa al modelo de la aplicación.
- **`src/types/`**: contratos compartidos para libros, usuarios, autenticación y estados de carga.
- **`src/styles.css`**: clases CSS, variables, grid, responsive y estados de interacción sin framework.

## API de prueba

Al iniciarse, la aplicación solicita seis publicaciones a `https://jsonplaceholder.typicode.com/posts?_limit=6`. `src/api/booksApi.ts` transforma la respuesta al modelo que esperan las tarjetas. La petición se puede cancelar con `AbortController` y la interfaz contempla carga, error y reintento.

Si el servicio no está disponible, se muestra un aviso y el catálogo continúa funcionando con `src/data/books.ts` como respaldo local.

## Acceso de demostración

La ruta `/login` acepta el usuario `demo` y la contraseña `demo`. Tras acceder, `/perfil` muestra el usuario autenticado y su ID estable (`user-demo-001`). La sesión se guarda en `localStorage`, sin almacenar la contraseña, para conservarla al recargar la página.

## Retos siguientes

1. Añade búsqueda por género.
2. Añade un botón para marcar libros como leídos.
3. Muestra un contador de libros leídos en `Header`.
4. Extrae esa nueva lógica a un custom hook.
5. Simula un error en la API y diseña un botón «Reintentar».
