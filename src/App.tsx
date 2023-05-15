
import './App.css'
import Desktop from './desktop/Desktop';
import Mobile from './mobile/Mobile';
import { isDesktop } from './utils/device.ts'

function App() {
  return (
    <>
      {isDesktop?
        <Desktop/>: <Mobile/>
      }
    </>
  )
}

export default App
