import { FunctionComponent } from 'react';
import { SynonymSection } from '@/components/Synonym';

export const HomePage: FunctionComponent = () => {
  return <SynonymSection word="welcome" enableAdd={false} />;
};
