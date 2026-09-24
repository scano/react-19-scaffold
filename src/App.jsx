import { Route, Routes } from 'react-router-dom'
import Header            from './components/Header.jsx'
import Footer            from './components/Footer.jsx'
import HomePage          from './pages/HomePage.jsx'
import LibraryPage       from './pages/LibraryPage.jsx'
import BookDetailPage    from './pages/BookDetailPage.jsx'
import AboutPage         from './pages/AboutPage.jsx'
import LoginPage         from './pages/LoginPage.jsx'
import ProfilePage       from './pages/ProfilePage.jsx'
import NotFoundPage      from './pages/NotFoundPage.jsx'
import ProtectedRoute    from './components/ProtectedRoute.jsx'
import { useBooks }      from './hooks/useBooks.js'
import { useBookSearch } from './hooks/useBookSearch.js'

function App() {
	const {books, status, error, retry}    = useBooks()
	const {query, setQuery, filteredBooks} = useBookSearch(books)
	
	return (
		<div className="app-shell">
			<Header bookCount={books.length}/>
			
			<Routes>
				<Route path="/" element={<HomePage bookCount={books.length}/>}/>
				<Route
					path="/biblioteca"
					element={
						<LibraryPage
							query={query}
							setQuery={setQuery}
							books={filteredBooks}
							status={status}
							error={error}
							onRetry={retry}
						/>
					}
				/>
				<Route
					path="/biblioteca/:bookId"
					element={<BookDetailPage books={books} status={status}/>}
				/>
				<Route path="/acerca" element={<AboutPage/>}/>
				<Route path="/login" element={<LoginPage/>}/>
				<Route
					path="/perfil"
					element={
						<ProtectedRoute>
							<ProfilePage/>
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<NotFoundPage/>}/>
			</Routes>
			
			<Footer/>
		</div>
	)
}

export default App
