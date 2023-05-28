import { useState } from 'react'
import { Footer, Group } from '@mantine/core'
import NavButton from './NavButton';
import { ROUTES } from '../../constants/routes';
import { useLocation,useNavigate } from 'react-router-dom';

interface Page {
  key: string,
  text: string,
  dest: string
}

const MENU : Array<Page> = [
  {
    key: 'stream',
    text: 'Stream',
    dest: ROUTES.MOBILE.STREAM
  }, 
  {
    key: 'games',
    text: 'Games',
    dest: ROUTES.MOBILE.GAME
  },
  {
    key: 'sports',
    text: 'Sports',
    dest: ROUTES.MOBILE.SPORT
  },
  {
    key: 'bet',
    text: 'My Bet',
    dest: ROUTES.MOBILE.RECORD
  }, 
  {    
    key: 'profile',
    text: 'Profile',
    dest: ROUTES.MOBILE.PROFILE
  }
]


function Nav() {
  const location = useLocation()
  const currentPage = MENU.find(item=>location.pathname.includes(item.dest))
  const defaultSelected = currentPage ? currentPage.key : ''
  const [ selected, setSelected ] = useState(defaultSelected)

  const navigate = useNavigate()
  return (
    <Footer height={60} bg={"rgba(24, 59, 128, 1)"}>
      <Group position="apart" m={10}>
        {MENU.map(value=>{
          return (<NavButton 
            key={value.key}
            text={value.text}
            selected={value.key === selected}
            onClick={()=>{ 
              setSelected(value.key)
              navigate(value.dest) 
            }}
          />)
        })}
        
      </Group>
    </Footer>
  )
}

export default Nav