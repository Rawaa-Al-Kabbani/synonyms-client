import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Group, Input, Modal, Stack, Title } from '@mantine/core';
import { createSynonym } from '@/api/api';
import { CreateSynonymInput } from '@/graphql/graphql';
import { theme } from '@/theme';
import { isWord, trimWord } from '@/utils';
import CustomButton from './CustomButton';
import { ErrorMessage } from './ErrorMessage';

export const CreateWordModal: FunctionComponent<{
  opened: boolean;
  close: () => void;
}> = ({ opened, close }) => {
  const navigate = useNavigate();
  const [synonymValues, setSynonymValues] = useState<string[]>([]);
  const [synonymValue, setSynonymValue] = useState<string>('');
  const [wordValue, setWordValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    return () => {
      setWordValue('');
      setSynonymValue('');
      setSynonymValues([]);
      setErrorMessage('');
    };
  }, [opened]);

  const onAddSynonym = () => {
    const isValueAdded = synonymValues.find((synonym) => synonym === synonymValue);
    if (!isValueAdded) {
      setSynonymValues([...synonymValues, synonymValue]);
      setSynonymValue('');
    }
  };

  const onSubmit = async () => {
    try {
      const values: CreateSynonymInput = {
        synonyms: synonymValues,
        word: wordValue,
      };
      await createSynonym(values);
      close();
      navigate(`/synonyms/${wordValue}`);
    } catch (error) {
      setErrorMessage('Failed to add new word');
    }
  };

  return (
    <Modal
      title="Add new word"
      opened={opened}
      onClose={close}
      fs="md"
      fw={500}
      size="lg"
      centered
      withCloseButton
      closeOnEscape
      closeOnClickOutside
    >
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={5}>Word</Title>
          <Input
            placeholder="Add word"
            value={wordValue}
            onChange={(event) => {
              setWordValue(trimWord(event.currentTarget.value));
            }}
          />
        </Stack>
        {synonymValues.length > 0 && (
          <Stack gap="xs">
            <Title order={5}>Synonyms to add</Title>
            <Group gap="xs">
              {synonymValues.map((synonym) => (
                <Badge
                  size="lg"
                  color={theme?.colors?.green?.[5]}
                  style={{ cursor: 'pointer' }}
                  key={synonym}
                >
                  {synonym}
                </Badge>
              ))}
            </Group>
          </Stack>
        )}

        <Stack>
          <Title order={5}>Synonym</Title>
          <Group>
            <Input
              style={{ flex: 1 }}
              placeholder="Add a synonym"
              value={synonymValue}
              onChange={(event) => setSynonymValue(trimWord(event.currentTarget.value))}
            />
            <CustomButton label="Add" disabled={!isWord(synonymValue)} onClick={onAddSynonym} />
          </Group>
        </Stack>

        <Stack justify="center" align="center" w="100%">
          <CustomButton label="Submit" disabled={!isWord(wordValue)} onClick={onSubmit} />
        </Stack>

        {errorMessage && <ErrorMessage message={errorMessage} />}
      </Stack>
    </Modal>
  );
};
