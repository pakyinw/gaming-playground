
import './App.css'
import AuthContextProvider from './context/AuthContext.tsx';
import Desktop from './desktop/Desktop';
import Mobile from './mobile/Mobile';
import { isDesktop } from './utils/device.ts'

if (process.env.NODE_ENV === 'development') {
  (async()=>{
    const { worker } = await import('./mocks/browser')
    worker.start({ onUnhandledRequest: "bypass" })
  })()
}

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
