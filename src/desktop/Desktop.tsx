import { BrowserRouter } from 'react-router-dom'
import DesktopRoutes from './DesktopRoutes'

function Desktop(){
  return (
    <div>
g      <BrowserRouter>
        <DesktopRoutes/>
      </BrowserRouter>
    </div>
  )
}
  
export default Desktop