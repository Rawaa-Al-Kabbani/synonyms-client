import { describe, expect, test } from 'vitest';
import { isWord, trimWord } from './utils';

describe('trimWord', () => {
  test.each([
    {
      word: 'Hello',
      expectedResult: 'hello',
    },
    {
      word: 'hello 123',
      expectedResult: 'hello',
    },
    {
      word: 'HeLLo!@#123WoRLD',
      expectedResult: 'helloworld',
    },
  ])('should trim the word, and remove non-alpha characters', ({ word, expectedResult }) => {
    expect(trimWord(word)).toEqual(expectedResult);
  });
});

describe('isWord', () => {
  test.each([
    {
      word: 'hello',
      expectedResult: true,
    },
    {
      word: 'hello123',
      expectedResult: false,
    },
    {
      word: 'Hello&;',
      expectedResult: false,
    },
    {
      word: 'Hello',
      expectedResult: false,
    },
    {
      word: 'hello world',
      expectedResult: false,
    },
  ])(
    'should return true if the string contains only alpha, and lowercase characters',
    ({ word, expectedResult }) => {
      expect(isWord(word)).toBe(expectedResult);
    }
  );
});
