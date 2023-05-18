import { Button, Container, Text } from '@mantine/core';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Stack } from '@mantine/core';

function LobbyPage () {
  const { setShowLoginPage }= useContext(AuthContext)
  return(
    <Stack>
      <Container>
        <Button onClick={()=>setShowLoginPage(true)}></Button>
      </Container>
      <Text>Mobile Lobby Page</Text>
    </Stack>
  )
}
  
export default LobbyPage