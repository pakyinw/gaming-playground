import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './LoginPage'
import LobbyPage from './LobbyPage'
import { AuthContext } from '../context/AuthContext'
import { ROUTES } from '../constants/routes'

function DesktopRoutes(){
  const { isAuth } = useContext(AuthContext)
  return (
    <Routes>
      {isAuth ?
        <>
          <Route path={ROUTES.LOBBY} element={<LobbyPage/>} />
          <Route path={ROUTES.RECORD} element={<LobbyPage/>} />
          <Route path={ROUTES.GAME} element={<LobbyPage/>} />
          <Route path={ROUTES.PROFILE} element={<LobbyPage/>} />
        </>
        :
        <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
      }
      { /* For all the unknown path */}
      <Route path="*" element={<Navigate to={
        isAuth? ROUTES.LOBBY : ROUTES.LOGIN 
      } replace />} />
    </Routes>
  )
}
  
export default DesktopRoutes