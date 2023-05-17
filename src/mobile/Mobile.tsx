import { BrowserRouter } from 'react-router-dom'
import MobileRoutes from './MobileRoutes'
import Nav from './Nav'
import { MantineProvider, AppShell } from '@mantine/core'

function Mobile(){
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <BrowserRouter>
        <AppShell
          
          footer={<Nav/>}
        >
          <MobileRoutes/>
        </AppShell>
      </BrowserRouter>      
    </MantineProvider>
  )
}
  
export default Mobile