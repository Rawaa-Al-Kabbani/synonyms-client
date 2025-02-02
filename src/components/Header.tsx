import { FunctionComponent } from 'react';
import { Anchor, Box, Group, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CreateWordModal } from './CreateWordModal';
import CustomButton from './CustomButton';
import { SearchInput } from './SearchInput';

export const Header: FunctionComponent = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box h="100%">
      <Stack gap="md" p="xl">
        <Group justify="space-between" w="100%">
          <Anchor href="/">
            <Title order={3}>Synonyms</Title>
          </Anchor>
          <CustomButton label="New" onClick={() => open()} />
        </Group>
        <Group justify="center" w="100%">
          <SearchInput />
        </Group>
      </Stack>

      <CreateWordModal opened={opened} close={close} />
    </Box>
  );
};
