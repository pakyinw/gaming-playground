import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MobileRoutes from './MobileRoutes'
import Nav from './nav/Nav'
import { MantineProvider, AppShell } from '@mantine/core'
import { AuthContext } from '../context/AuthContext'
import LoginPage from './overlay/LoginOverlay'

function Mobile(){
  const { showLoginPage } = useContext(AuthContext)
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <BrowserRouter>
        <AppShell footer={<Nav/>}>
          <MobileRoutes/>
        </AppShell>
        {showLoginPage && 
        <LoginPage/>
        }
      </BrowserRouter>      
    </MantineProvider>
  )
}
  
export default Mobile