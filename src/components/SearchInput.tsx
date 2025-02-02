import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input, Menu } from '@mantine/core';
import { getSynonyms } from '@/api/api';
import { GetSynonymsQuery } from '@/graphql/graphql';
import { trimWord } from '@/utils';
import { theme } from '../theme';

export const SearchInput: FunctionComponent = () => {
  const [searchResults, setSearchResults] = useState<GetSynonymsQuery['synonyms']>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const search = useCallback(async (searchValue: string) => {
    setSearchResults([]);
    setErrorMessage('');
    if (!searchValue) {
      return;
    }
    try {
      setSearchResults(
        await getSynonyms({
          word: {
            startsWith: searchValue,
          },
        })
      );
    } catch (error) {
      setErrorMessage('Failed to fetch search results');
      console.error('Failed to fetch search results', error);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      search(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery, search]);

  const onSelectSynonym = async (selected: string) => {
    setSearchQuery('');
    await navigate(`/synonyms/${selected}`);
  };

  return (
    <Menu shadow="md" width="target" trapFocus={false} closeOnClickOutside closeOnEscape>
      <Menu.Target>
        <Input
          data-testid="search_input"
          w="min(600px, 100%)"
          placeholder="Search for words and synonyms"
          value={searchQuery}
          onChange={(event) => setSearchQuery(trimWord(event.currentTarget.value))}
          rightSectionPointerEvents="all"
          rightSection={<Search size={24} color={theme?.colors?.orange?.[0]} />}
        />
      </Menu.Target>

      {searchQuery && (
        <Menu.Dropdown mah={150} style={{ overflowY: 'auto' }} data-testid="search_result_list">
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <Menu.Item
                key={item.word}
                onClick={() => onSelectSynonym(item.word)}
                data-testid="search_result_item"
              >
                {item.word}
              </Menu.Item>
            ))
          ) : (
            <Menu.Label>No search results for {searchQuery}</Menu.Label>
          )}
        </Menu.Dropdown>
      )}

      {searchResults.length > 0 && (
        <Menu.Dropdown mah={150} style={{ overflowY: 'auto' }} data-testid="search_result_list">
          {searchResults.map((item) => (
            <Menu.Item
              key={item.word}
              onClick={() => onSelectSynonym(item.word)}
              data-testid="search_result_item"
            >
              {item.word}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      )}
      {errorMessage && (
        <Menu.Dropdown mah={150} style={{ overflowY: 'auto' }}>
          <Menu.Label>{errorMessage}</Menu.Label>
        </Menu.Dropdown>
      )}
    </Menu>
  );
};
