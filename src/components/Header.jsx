import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'

function Header({ bookCount }) {
  const { user } = useAuth()
  const menuItems = [
    { to: '/', label: 'Inicio', end: true },
    { to: '/biblioteca', label: 'Biblioteca' },
    { to: '/acerca', label: 'Acerca de' },
  ]

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="El estante, inicio">
        <span className="brand-mark" aria-hidden="true">E</span>
        <span>El estante</span>
      </NavLink>

      <nav className="main-nav" aria-label="Navegación principal">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-meta">
        <p className="collection-count">
          Colección <strong>{bookCount.toString().padStart(2, '0')}</strong>
        </p>
        <NavLink className="account-link" to={user ? '/perfil' : '/login'}>
          <span className="account-mark" aria-hidden="true">{user ? user.name.charAt(0) : '↗'}</span>
          <span>{user ? 'Perfil' : 'Acceder'}</span>
        </NavLink>
      </div>
    </header>
  )
}

export default Header
