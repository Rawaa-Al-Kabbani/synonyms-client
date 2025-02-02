import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Box, Group, Input, Paper, Stack, Text, Title } from '@mantine/core';
import CustomButton from '@/components/CustomButton';
import { theme } from '@/theme';
import { isWord, trimWord } from '@/utils';
import { createSynonym, getSynonym } from '../api/api';
import { CreateSynonymInput, CreateSynonymMutation, GetSynonymQuery } from '../graphql/graphql';

export const SynonymSection: FunctionComponent<{ word: string; enableAdd: boolean }> = ({
  word,
  enableAdd,
}) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [synonym, setSynonym] = useState<
    GetSynonymQuery['synonym'] | CreateSynonymMutation['createSynonym'] | undefined
  >(undefined);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setErrorMessage('');
    const load = async () => {
      try {
        setSynonym(await getSynonym(word));
      } catch (error) {
        setErrorMessage('Failed to fetch word');
        setSynonym(undefined);
        console.error('Failed to fetch word', error);
      }
    };
    load();
  }, [word]);

  const onClickSynonym = (word: string) => {
    navigate(`/synonyms/${word}`);
  };

  const createRelatedSynonym = async () => {
    setErrorMessage('');
    try {
      const values: CreateSynonymInput = {
        synonyms: [inputValue],
        word,
      };
      setSynonym(await createSynonym(values));
    } catch (error) {
      setErrorMessage('Failed to add synonym');
    } finally {
      setInputValue('');
    }
  };

  return (
    <Paper shadow="xs" p="xl" w="min(600px, 100%)" data-testid="synonym-section">
      {synonym && (
        <Stack justify="start" align="start" gap="30px" w="100%">
          {!enableAdd && (
            <Title order={2} style={{ alignSelf: 'center' }}>
              Recent word
            </Title>
          )}

          <Title order={1} c={theme.colors?.orange?.[0]}>
            {word}
          </Title>

          <Stack gap="10px">
            <Title order={4}>Synonyms</Title>

            <Group data-testid="synonym_list">
              {synonym?.related?.length ? (
                synonym.related.map((item) => (
                  <Badge
                    size="xl"
                    color={theme?.colors?.green?.[0]}
                    style={{ cursor: 'pointer' }}
                    key={item.word}
                    onClick={() => onClickSynonym(item.word)}
                  >
                    {item.word}
                  </Badge>
                ))
              ) : (
                <Text>No synonyms have been added for this word</Text>
              )}
            </Group>
          </Stack>

          {enableAdd && (
            <Stack gap="10px" w="100%">
              <Title order={4}>Add synonym</Title>
              <Group wrap="wrap">
                <Input
                  style={{ flex: 1, minWidth: '200px' }}
                  placeholder="Add a synonym"
                  value={inputValue}
                  onChange={(event) => setInputValue(trimWord(event.currentTarget.value))}
                />
                <Box w={{ base: '100%', sm: 'auto' }} style={{ textAlign: 'center' }}>
                  <CustomButton
                    label="Add"
                    disabled={!isWord(inputValue)}
                    onClick={createRelatedSynonym}
                  />
                </Box>
              </Group>
            </Stack>
          )}
        </Stack>
      )}

      {errorMessage && <Text c="red">{errorMessage}</Text>}
    </Paper>
  );
};
