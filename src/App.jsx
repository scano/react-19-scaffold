import { useState }            from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Header                  from './components/Header.jsx'
import Search                  from './components/Search.jsx'
import BookList                from './components/BookList.jsx'
import BookDetail              from './components/BookDetail.jsx'
import { initialBooks }        from './data/books.js'
import { useBookSearch }       from './hooks/useBookSearch.js'

function HomePage({bookCount}) {
	return (
		<main>
			<section className="intro home-intro" aria-labelledby="page-title">
				<p className="eyebrow">React · laboratorio 01</p>
				<h1 id="page-title">
					Historias para <em>seguir aprendiendo.</em>
				</h1>
				<p className="intro-copy">
					Una colección de {bookCount} libros para explorar componentes, estado y navegación.
				</p>
				<Link className="primary-link" to="/biblioteca">
					Explorar la biblioteca <span aria-hidden="true">→</span>
				</Link>
			</section>
		</main>
	)
}

function LibraryPage({query, setQuery, books}) {
	return (
		<main>
			<section className="page-heading" aria-labelledby="library-title">
				<p className="eyebrow">Colección completa</p>
				<h1 id="library-title">Biblioteca</h1>
				<p>Busca por título o autor entre los libros disponibles.</p>
			</section>
			<Search query={query} onQueryChange={setQuery} resultCount={books.length}/>
			<BookList books={books}/>
		</main>
	)
}

function AboutPage() {
	return (
		<main>
			<section className="about-page" aria-labelledby="about-title">
				<p className="eyebrow">Sobre el proyecto</p>
				<h1 id="about-title">Aprender haciendo.</h1>
				<div className="about-copy">
					<p>El estante es un laboratorio pequeño para entender cómo se construye una interfaz con React.</p>
					<p>Ahora también incluye navegación entre páginas con React Router, rutas declarativas y enlaces que indican dónde estás.</p>
				</div>
			</section>
		</main>
	)
}

function App() {
	const [books]                          = useState(initialBooks)
	const {query, setQuery, filteredBooks} = useBookSearch(books)
	
	return (
		<div className="app-shell">
			<Header bookCount={books.length}/>
			
			<Routes>
				<Route path="/" element={<HomePage bookCount={books.length}/>}/>
				<Route
					path="/biblioteca"
					element={<LibraryPage query={query} setQuery={setQuery} books={filteredBooks}/>}
				/>
				<Route path="/biblioteca/:bookId" element={<BookDetail books={books}/>}/>
				<Route path="/acerca" element={<AboutPage/>}/>
				<Route path="*" element={<HomePage bookCount={books.length}/>}/>
			</Routes>
			
			<footer>
				<span>Hecho para practicar React</span>
				<span aria-hidden="true">✦</span>
				<span>Sin magia, solo componentes</span>
			</footer>
		</div>
	)
}

export default App
