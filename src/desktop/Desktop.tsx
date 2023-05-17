import { BrowserRouter } from 'react-router-dom'
import DesktopRoutes from './DesktopRoutes'

function Desktop(){
  return (
    <div>
      <BrowserRouter>
        <DesktopRoutes/>
      </BrowserRouter>
    </div>
  )
}
  
export default Desktop