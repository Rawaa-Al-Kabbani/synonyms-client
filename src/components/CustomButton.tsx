import { FunctionComponent } from 'react';
import { Button } from '@mantine/core';
import { theme } from '../theme';

const CustomButton: FunctionComponent<{
  label: string;
  disabled?: boolean;
  onClick: () => void;
}> = ({ onClick, label, disabled }) => {
  return (
    <Button
      disabled={disabled}
      opacity={disabled ? 0.7 : 1}
      onClick={onClick}
      justify="center"
      w="auto"
      size="md"
      radius="md"
      m="0"
      bg={theme.colors?.orange?.[0]}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
