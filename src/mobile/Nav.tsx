import { Footer, Group, ActionIcon } from '@mantine/core'
import { IconSettings } from '@tabler/icons-react';

function Nav() {
  return (
    <Footer height={60} p="md" bg={"rgba(24, 59, 128, 1)"}>
      <Group position="apart">
        <ActionIcon variant="transparent"><IconSettings size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle"><IconSettings size="1rem" /></ActionIcon>
        <ActionIcon variant="default"><IconSettings size="1rem" /></ActionIcon>
        <ActionIcon variant="outline"><IconSettings size="1rem" /></ActionIcon>
        <ActionIcon variant="filled"><IconSettings size="1rem" /></ActionIcon>
        <ActionIcon variant="light"><IconSettings size="1rem" /></ActionIcon>
      </Group>
    </Footer>
  )
}

export default Nav