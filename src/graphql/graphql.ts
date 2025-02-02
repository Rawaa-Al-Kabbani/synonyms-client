import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CreateSynonymInput = {
  synonyms?: InputMaybe<Array<Scalars['String']['input']>>;
  word: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSynonym: Synonym;
};

export type MutationCreateSynonymArgs = {
  input: CreateSynonymInput;
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  synonym: Synonym;
  synonyms: Array<Synonym>;
};

export type QuerySynonymArgs = {
  word: Scalars['String']['input'];
};

export type QuerySynonymsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WhereSynonymInput>;
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Synonym = {
  __typename?: 'Synonym';
  groupId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  related?: Maybe<Array<Synonym>>;
  word: Scalars['String']['output'];
};

export type WhereSynonymInput = {
  word?: InputMaybe<StringFilter>;
};

export type GetSynonymsQueryVariables = Exact<{
  where?: InputMaybe<WhereSynonymInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;

export type GetSynonymsQuery = {
  __typename?: 'Query';
  synonyms: Array<{
    __typename?: 'Synonym';
    word: string;
    related?: Array<{ __typename?: 'Synonym'; word: string }> | null;
  }>;
};

export type GetSynonymQueryVariables = Exact<{
  word: Scalars['String']['input'];
}>;

export type GetSynonymQuery = {
  __typename?: 'Query';
  synonym: {
    __typename?: 'Synonym';
    word: string;
    related?: Array<{ __typename?: 'Synonym'; word: string }> | null;
  };
};

export type CreateSynonymMutationVariables = Exact<{
  input: CreateSynonymInput;
}>;

export type CreateSynonymMutation = {
  __typename?: 'Mutation';
  createSynonym: {
    __typename?: 'Synonym';
    word: string;
    related?: Array<{ __typename?: 'Synonym'; word: string }> | null;
  };
};

export const GetSynonymsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSynonyms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'WhereSynonymInput' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'pagination' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'PaginationInput' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'synonyms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'pagination' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'word' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'related' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'word' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSynonymsQuery, GetSynonymsQueryVariables>;
export const GetSynonymDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSynonym' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'word' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'synonym' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'word' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'word' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'word' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'related' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'word' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSynonymQuery, GetSynonymQueryVariables>;
export const CreateSynonymDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createSynonym' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateSynonymInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createSynonym' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'word' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'related' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'word' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateSynonymMutation, CreateSynonymMutationVariables>;
