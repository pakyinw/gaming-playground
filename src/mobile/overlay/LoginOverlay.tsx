import { useEffect, useContext } from 'react'
import { IconBackhoe } from '@tabler/icons-react';
import { AuthContext } from '../../context/AuthContext'
import { ActionIcon, Container, Overlay } from '@mantine/core'
import { Stack, Tabs } from '@mantine/core';
import UsernameLogin from './UsernameLogin';
import PhoneLogin from './PhoneLogin';

function LoginOverlay(){

  const { isAuth, setShowLoginPage } = useContext(AuthContext)

  useEffect(()=>{
    isAuth && setShowLoginPage(false)
  },[isAuth,setShowLoginPage])

  return(
    <Overlay color="#FFF" opacity={1}>
      <Stack>
        <Container>
          <ActionIcon onClick={()=>{setShowLoginPage(false)}}><IconBackhoe/></ActionIcon>
        </Container>
        <Tabs defaultValue="normal">
          <Tabs.List>
            <Tabs.Tab value="normal" >Login</Tabs.Tab>
            <Tabs.Tab value="quick" >Quick Login</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="normal" pt="xs">
            <UsernameLogin/>
          </Tabs.Panel>
          <Tabs.Panel value="quick" pt="xs">
            <PhoneLogin/>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Overlay>
 
  )
}
export default LoginOverlay