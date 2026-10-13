import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LibraryPage from './pages/LibraryPage'
import BookDetailPage from './pages/BookDetailPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'
import { useBooks } from './hooks/useBooks'
import { useBookSearch } from './hooks/useBookSearch'

function App() {
  const { books, status, error, retry } = useBooks()
  const { query, setQuery, filteredBooks } = useBookSearch(books)

  return (
    <div className="app-shell">
      <Header bookCount={books.length} />

      <Routes>
        <Route path="/" element={<HomePage bookCount={books.length} />} />
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
          element={<BookDetailPage books={books} status={status} />}
        />
        <Route path="/acerca" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
