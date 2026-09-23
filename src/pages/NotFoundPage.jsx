import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main>
      <section className="not-found" aria-labelledby="not-found-title">
        <p className="eyebrow">Error 404</p>
        <h1 id="not-found-title">Esta página no existe.</h1>
        <Link className="primary-link" to="/">
          Volver al inicio <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage
