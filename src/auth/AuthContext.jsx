import { createContext, useContext, useState } from 'react'

const STORAGE_KEY = 'el-estante-user'
const AuthContext = createContext(null)

const demoUser = {
  id: 'user-demo-001',
  username: 'demo',
  name: 'Usuario Demo',
  email: 'demo@elestante.test',
}

function readStoredUser() {
  try {
    const storedUser = localStorage.getItem(STORAGE_KEY)
    return storedUser ? JSON.parse(storedUser) : null
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser)

  function login(username, password) {
    if (username !== 'demo' || password !== 'demo') {
      return { ok: false, message: 'El usuario o la contraseña no son correctos.' }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoUser))
    setUser(demoUser)
    return { ok: true }
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth debe utilizarse dentro de AuthProvider')
  }

  return context
}
