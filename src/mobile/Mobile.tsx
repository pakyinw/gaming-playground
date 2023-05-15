import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './portrait/LoginPage'

export const ROUTE_PATHS = {
  LOGIN: '/Login',
  LOBBY: '/Lobby',
  SLIPS: '/Slips',
  GAME: '/Game',
  PROFILE: '/Profile'
}

function Mobile(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_PATHS.LOGIN} element={<LoginPage/>} />
          <Route path="*" element={<Navigate to={ROUTE_PATHS.LOGIN} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
  
export default Mobile