import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'

function LoginPage() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (user) {
    return <Navigate to="/perfil" replace />
  }

  function handleSubmit(event) {
    event.preventDefault()
    const result = login(username.trim(), password)

    if (!result.ok) {
      setError(result.message)
      return
    }

    const destination = location.state?.from?.pathname || '/perfil'
    navigate(destination, { replace: true })
  }

  return (
    <main className="auth-main">
      <section className="auth-page" aria-labelledby="login-title">
        <div className="auth-intro">
          <p className="eyebrow">Área personal</p>
          <h1 id="login-title">Tu próxima lectura te espera.</h1>
          <p>Accede para consultar tu perfil de lector.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="demo-credentials" aria-label="Credenciales de demostración">
            <span>Acceso de prueba</span>
            <strong>demo / demo</strong>
          </div>

          <label htmlFor="username">Usuario</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error && <p className="form-error" role="alert">{error}</p>}

          <button className="auth-submit" type="submit">
            Entrar <span aria-hidden="true">→</span>
          </button>
        </form>
      </section>
    </main>
  )
}

export default LoginPage
