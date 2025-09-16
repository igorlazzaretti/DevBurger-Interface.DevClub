import { Outlet, Navigate } from 'react-router-dom'

export function AdminLayout() {
  const {admin: isAdmin} = JSON.parse(
    localStorage.getItem('devburguer:userData')
  )

  return (
    <>
      {isAdmin ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}
