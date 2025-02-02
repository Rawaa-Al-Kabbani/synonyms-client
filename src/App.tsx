import '@mantine/core/styles.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { Header } from './components/Header';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/Home';
import { Synonym } from './pages/Synonym';

export default function App() {
  return (
    <BrowserRouter>
      <AppShell padding="md">
        <AppShell.Header>
          <Header />
        </AppShell.Header>

        <AppShell.Main>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/synonyms/:synonym" element={<Synonym />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </AppShell.Main>
      </AppShell>
    </BrowserRouter>
  );
}
