import {
  CreateSynonymInput,
  CreateSynonymMutation,
  GetSynonymQuery,
  GetSynonymsQuery,
  PaginationInput,
  WhereSynonymInput,
} from '@/graphql/graphql';

export const API_BASE_URL = import.meta.env.API_BASE_URL ??
  'https://synonyms-api-b0f0ggdcbxb0aub0.swedencentral-01.azurewebsites.net/graphql';

const makeQuery = async (query: string, variables?: Record<string, any>) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error: status: ${response.status}`);
  }
  const { data } = await response.json();

  if (!data) {
    throw new Error('Invalid API response');
  }

  return data;
};

export const getSynonyms = async (
  where?: WhereSynonymInput,
  pagination?: PaginationInput
): Promise<GetSynonymsQuery['synonyms']> => {
  const query = /* GraphQL */ `
    query getSynonyms($where: WhereSynonymInput, $pagination: PaginationInput) {
      synonyms(where: $where, pagination: $pagination) {
        word
        related {
          word
        }
      }
    }
  `;
  const { synonyms } = await makeQuery(query, {
    where,
    pagination,
  });

  return synonyms;
};

export const getSynonym = async (word: string): Promise<GetSynonymQuery['synonym']> => {
  const query = /* GraphQL */ `
    query getSynonym($word: String!) {
      synonym(word: $word) {
        word
        related {
          word
        }
      }
    }
  `;
  const { synonym } = await makeQuery(query, {
    word,
  });

  return synonym;
};

export const createSynonym = async (
  input: CreateSynonymInput
): Promise<CreateSynonymMutation['createSynonym']> => {
  const query = /* GraphQL */ `
    mutation createSynonym($input: CreateSynonymInput!) {
      createSynonym(input: $input) {
        word
        related {
          word
        }
      }
    }
  `;
  const { createSynonym } = await makeQuery(query, {
    input,
  });

  return createSynonym;
};
