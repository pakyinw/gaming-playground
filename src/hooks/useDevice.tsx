import { useState, useEffect } from "react";
import UAParser from 'ua-parser-js'

export const userAgent = new UAParser()

export enum DEVICE {
  DESKTOP = 'DESKTOP',
  LANDSCAPE = 'LANDSCAPE',
  PORTRAIT= 'PORTRAIT'
}

const handleOrientationChange = 
(
  setDevice: React.Dispatch<React.SetStateAction<DEVICE>>,
  setOrientation: React.Dispatch<React.SetStateAction<OrientationType>> 
) => () =>
{
  setOrientation(screen.orientation.type);
  const device = 
    ['mobile','tablet','wearable','embedded'].includes(userAgent.getDevice().type || '') ?
      ["portrait-primary", "portrait-secondary"].includes(screen.orientation.type) ?
        DEVICE.PORTRAIT : DEVICE.LANDSCAPE : DEVICE.DESKTOP
  setDevice(device)
}; 

function useDevice () {
  const [device, setDevice] = useState(DEVICE.DESKTOP)
  const [orientation, setOrientation] = useState(screen.orientation.type);

  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientationChange(setDevice,setOrientation));
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange(setDevice,setOrientation));
    };
  }, [setDevice,setOrientation])

  return { orientation, device }
}

export default useDevice