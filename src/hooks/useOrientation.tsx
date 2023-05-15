import { useState, useEffect } from "react";

export enum ORIENTATION {
  LANDSCAPE = 'LANDSCAPE',
  PORTRAIT = 'PORTRAIT'
}

const handleOrientationChange = (
  setOrientation: React.Dispatch<React.SetStateAction<ORIENTATION>>,
  setOrientationDetail: React.Dispatch<React.SetStateAction<OrientationType>>
) => () =>
{
  setOrientation(["portrait-primary" , "portrait-secondary"].includes(screen.orientation.type)? ORIENTATION.PORTRAIT: ORIENTATION.LANDSCAPE)
  setOrientationDetail(screen.orientation.type);  
}; 

function useOrientation () {
  const [orientationDetail, setOrientationDetail] = useState(screen.orientation.type);
  const [orientation, setOrientation] = useState(ORIENTATION.PORTRAIT);

  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientationChange(setOrientation,setOrientationDetail));
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange(setOrientation,setOrientationDetail));
    };
  }, [setOrientation])

  return { orientation, orientationDetail }
}

export default useOrientation