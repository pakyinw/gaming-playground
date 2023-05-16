
import './App.css'
import AuthContextProvider from './context/AuthContext.tsx';
import Desktop from './desktop/Desktop';
import Mobile from './mobile/Mobile';
import { isDesktop } from './utils/device.ts'

function App() {
  return (
    <AuthContextProvider>
      {isDesktop?
        <Desktop/>: <Mobile/>
      }
    </AuthContextProvider>
  )
}

export default App
