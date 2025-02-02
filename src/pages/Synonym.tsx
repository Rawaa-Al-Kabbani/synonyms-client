import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { SynonymSection } from '@/components/Synonym';

export const Synonym: FunctionComponent = () => {
  const params = useParams();

  return <SynonymSection word={params.synonym as string} enableAdd />;
};
