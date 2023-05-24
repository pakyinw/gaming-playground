import { useState } from 'react'
import { Footer, Group } from '@mantine/core'
import NavButton from './NavButton';

const menu = [
  {
    key: 'stream',
    text: 'Stream',
    color: '',
  }, 
  {
    key: 'games',
    text: 'Games',
    color: '',
  },
  {
    key: 'sports',
    text: 'Sports',
    color: '',
  },
  {
    key: 'bet',
    text: 'My Bet',
    color: '',
  }, 
  {    
    key: 'profile',
    text: 'Profile',
    color: '',
  }
]

function Nav() {
  const [ selected, setSelected ] = useState('')
  return (
    <Footer height={60} bg={"rgba(24, 59, 128, 1)"}>
      <Group position="apart" m={10}>
        {menu.map(value=>{
          return (<NavButton 
            text={value.text}
            selected={value.key === selected}
            onClick={()=>{ setSelected(value.key) }}
          />)
        })}
        
      </Group>
    </Footer>
  )
}

export default Nav