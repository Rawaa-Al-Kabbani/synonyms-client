import { FunctionComponent } from 'react';
import { Stack, Title } from '@mantine/core';

export const ErrorMessage: FunctionComponent<{
  message: string;
}> = ({ message }) => {
  return (
    <Stack justify="center" align="center" w="100%">
      <Title order={4}>{message}</Title>
    </Stack>
  );
};
