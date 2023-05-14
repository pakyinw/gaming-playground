
import useDevice, { DEVICE } from './hooks/useDevice';
import './App.css'
import Desktop from './desktop/Desktop';
import Portrait from './portrait/Portrait';
import Landscape from './landscape/Landscape';

function App() {
  const { device } = useDevice()

  const layout = {
    [DEVICE.DESKTOP]: (<Desktop/>),
    [DEVICE.PORTRAIT]: (<Portrait/>),
    [DEVICE.LANDSCAPE]: (<Landscape/>),
  }

  return (
    <>
      {layout[device]}
    </>
  )
}

export default App
