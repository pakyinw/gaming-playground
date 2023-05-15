import { DEVICE } from '../hooks/useDevice'

interface Props{
  orientation: DEVICE
}
function Mobile({orientation}: Props){
  return (
    <div>
      {{
        [DEVICE.DESKTOP] : 'DESKTOP',
        [DEVICE.PORTRAIT] : 'PORTRAIT',
        [DEVICE.LANDSCAPE] : 'LANDSCAPE'
      }[orientation]}
    </div>
  )
}
  
export default Mobile