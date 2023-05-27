import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import StreamPage from './pages/StreamPage'
import GamePage from './pages/GamePage'
import SportPage from './pages/SportPage'
import RecordPage from './pages/RecordPage'
import ProfilePage from './pages/ProfilePage'

function MobileRoutes(){
  return (
    <Routes>
      <Route path={ROUTES.MOBILE.STREAM} element={<StreamPage/>} />
      <Route path={ROUTES.MOBILE.GAME} element={<GamePage/>} />
      <Route path={ROUTES.MOBILE.SPORT} element={<SportPage/>} />
      <Route path={ROUTES.MOBILE.RECORD} element={<RecordPage/>} />
      <Route path={ROUTES.MOBILE.PROFILE} element={<ProfilePage/>} />
      
      { /* For all the unknown path */}
      <Route path="*" element={<Navigate to={ROUTES.MOBILE.SPORT} replace />} />
    </Routes>
  )
}
  
export default MobileRoutes