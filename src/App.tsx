
import useDevice, { DEVICE } from './hooks/useDevice';
import './App.css'
import Desktop from './desktop/Desktop';
import Mobile from './mobile/Mobile';

function App() {
  const { device } = useDevice()

  // TODO: Check there is any performance issue whether any prerendering before return
  const layout = {
    [DEVICE.DESKTOP]: (<Desktop/>),
    [DEVICE.PORTRAIT]: (<Mobile/>),
    [DEVICE.LANDSCAPE]: (<Mobile/>),
  }

  return (
    <>
      {layout[device]}
    </>
  )
}

export default App
