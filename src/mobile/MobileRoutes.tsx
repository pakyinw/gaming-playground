import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './LoginPage'
import LobbyPage from './LobbyPage'
import { AuthContext } from '../context/AuthContext'

export const ROUTE_PATHS = {
  LOGIN: '/Login',
  LOBBY: '/Lobby',
  RECORD: '/Record',
  GAME: '/Game',
  PROFILE: '/Profile'
}

function MobileRoutes(){
  const { isAuth } = useContext(AuthContext)
  return (
    <Routes>
      {isAuth ?
        <Route path={ROUTE_PATHS.LOGIN} element={<LoginPage/>} />
        :
        <>
          <Route path={ROUTE_PATHS.LOBBY} element={<LobbyPage/>} />
          <Route path={ROUTE_PATHS.RECORD} element={<LobbyPage/>} />
          <Route path={ROUTE_PATHS.GAME} element={<LobbyPage/>} />
          <Route path={ROUTE_PATHS.PROFILE} element={<LobbyPage/>} />
        </>
      }
      { /* For all the unknown path */}
      <Route path="*" element={<Navigate to={
        isAuth? ROUTE_PATHS.LOBBY : ROUTE_PATHS.LOGIN 
      } replace />} />
    </Routes>
  )
}
  
export default MobileRoutes