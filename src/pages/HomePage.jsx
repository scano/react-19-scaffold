import { Link } from 'react-router-dom'

function HomePage({ bookCount }) {
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

export default HomePage
