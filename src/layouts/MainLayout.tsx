import { Outlet } from 'react-router-dom';
import { Container } from '@mantine/core';

export function MainLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
