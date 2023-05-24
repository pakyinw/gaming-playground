import { Text, UnstyledButton, Stack } from '@mantine/core'
import { IconSettings } from '@tabler/icons-react';

interface Props{
  text: string
  selected: boolean
  onClick?: (e: React.SyntheticEvent)=>void
}

function NavButton ({text, selected, onClick}: Props) {
  return (
    <UnstyledButton onClick={onClick}>
      <Stack spacing={0} align="center">
        <IconSettings size="1rem" color={selected? 'orange': 'white'} />
        <Text color={selected? 'orange': 'white'} >{text}</Text>
      </Stack>
    </UnstyledButton>
  )
}

export default NavButton