import useOrientation, { ORIENTATION } from '../hooks/useOrientation'
import Portrait from './Portrait'
import Landscape from './Landscape'


function Mobile(){
  const {orientation} = useOrientation()
  return (
    <div>
      {
        orientation === ORIENTATION.PORTRAIT ?
          <Portrait/> :<Landscape/>
      }
    </div>
  )
}
  
export default Mobile