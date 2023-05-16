import { BrowserRouter } from 'react-router-dom'
import MobileRoutes from './MobileRoutes'

function Mobile(){
  return (
    <div>
      <BrowserRouter>
        <MobileRoutes/>
      </BrowserRouter>
    </div>
  )
}
  
export default Mobile