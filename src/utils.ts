export const trimWord = (value: string): string => {
  return value.toLowerCase().replace(/[^a-z]/g, '');
};

export const isWord = (value: string): boolean => {
  return /^[a-z]+$/.test(value);
};
