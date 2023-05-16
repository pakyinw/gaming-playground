import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './LoginPage'
import { AuthContext } from '../context/AuthContext'

export const ROUTE_PATHS = {
  LOGIN: '/Login',
  LOBBY: '/Lobby',
  RECORD: '/Record',
  GAME: '/Game',
  PROFILE: '/Profile'
}

function MobileRoutes(){
  const { isSignedIn } = useContext(AuthContext)
  return (
    <Routes>
      <Route path={ROUTE_PATHS.LOGIN} element={<LoginPage/>} />
      {isSignedIn && 
      <>
        <Route path={ROUTE_PATHS.LOBBY} element={<LoginPage/>} />
        <Route path={ROUTE_PATHS.RECORD} element={<LoginPage/>} />
        <Route path={ROUTE_PATHS.GAME} element={<LoginPage/>} />
        <Route path={ROUTE_PATHS.PROFILE} element={<LoginPage/>} />
      </>}
      <Route path="*" element={<Navigate to={ROUTE_PATHS.LOGIN} replace />} />
    </Routes>
  )
}
  
export default MobileRoutes