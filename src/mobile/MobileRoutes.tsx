import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LobbyPage from './pages/LobbyPage'
import { AuthContext } from '../context/AuthContext'
import { ROUTES } from '../constants/routes'

function MobileRoutes(){
  return (
    <Routes>
      <Route path={ROUTES.LOBBY} element={<LobbyPage/>} />
      <Route path={ROUTES.RECORD} element={<LobbyPage/>} />
      <Route path={ROUTES.GAME} element={<LobbyPage/>} />
      <Route path={ROUTES.PROFILE} element={<LobbyPage/>} />
      { /* For all the unknown path */}
      <Route path="*" element={<Navigate to={ROUTES.LOBBY} replace />} />
    </Routes>
  )
}
  
export default MobileRoutes