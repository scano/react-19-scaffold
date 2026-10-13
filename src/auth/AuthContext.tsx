import { createContext, useContext, useState, type PropsWithChildren } from 'react'
import type { LoginResult, User } from '../types/auth'

const STORAGE_KEY = 'el-estante-user'

interface AuthContextValue {
  user: User | null
  login: (username: string, password: string) => LoginResult
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

const demoUser: User = {
  id: 'user-demo-001',
  username: 'demo',
  name: 'Usuario Demo',
  email: 'demo@elestante.test',
}

function isUser(value: unknown): value is User {
  if (typeof value !== 'object' || value === null) return false

  const candidate = value as Record<string, unknown>
  return ['id', 'username', 'name', 'email'].every(
    (field) => typeof candidate[field] === 'string',
  )
}

function readStoredUser(): User | null {
  try {
    const storedUser = localStorage.getItem(STORAGE_KEY)
    if (!storedUser) return null

    const parsedUser: unknown = JSON.parse(storedUser)
    if (isUser(parsedUser)) return parsedUser

    localStorage.removeItem(STORAGE_KEY)
    return null
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(readStoredUser)

  function login(username: string, password: string): LoginResult {
    if (username !== 'demo' || password !== 'demo') {
      return { ok: false, message: 'El usuario o la contraseña no son correctos.' }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoUser))
    setUser(demoUser)
    return { ok: true }
  }

  function logout(): void {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth debe utilizarse dentro de AuthProvider')
  }

  return context
}
