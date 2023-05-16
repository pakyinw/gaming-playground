import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './LoginPage'

export const ROUTE_PATHS = {
  LOGIN: '/Login',
  LOBBY: '/Lobby',
  RECORD: '/Record',
  GAME: '/Game',
  PROFILE: '/Profile'
}

function MobileRoutes(){
  return (
    <Routes>
      <Route path={ROUTE_PATHS.LOGIN} element={<LoginPage/>} />
      <Route path="*" element={<Navigate to={ROUTE_PATHS.LOGIN} replace />} />
    </Routes>
  )
}
  
export default MobileRoutes