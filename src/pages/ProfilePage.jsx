import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'

function ProfilePage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <main className="profile-main">
      <section className="profile-page" aria-labelledby="profile-title">
        <div className="profile-heading">
          <p className="eyebrow">Perfil de lector</p>
          <h1 id="profile-title">{user.name}</h1>
          <p>Sesión de demostración activa.</p>
        </div>

        <div className="profile-details">
          <div className="profile-monogram" aria-hidden="true">{user.name.charAt(0)}</div>

          <dl>
            <div>
              <dt>ID de usuario</dt>
              <dd><code>{user.id}</code></dd>
            </div>
            <div>
              <dt>Usuario</dt>
              <dd>{user.username}</dd>
            </div>
            <div>
              <dt>Correo</dt>
              <dd>{user.email}</dd>
            </div>
          </dl>

          <button className="logout-button" type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </section>
    </main>
  )
}

export default ProfilePage
