import { Navigate, useLocation } from 'react-router-dom'
import type { PropsWithChildren } from 'react'
import { useAuth } from '../auth/AuthContext'

function ProtectedRoute({ children }: PropsWithChildren) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute
