import { Anchor, createTheme, MantineColorsTuple, MantineTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    spaceCadet: Array(10).fill('#272e44') as unknown as MantineColorsTuple,
    orange: Array(10).fill('#F26419') as unknown as MantineColorsTuple,
    ghostWhite: Array(10).fill('#f5f5f6') as unknown as MantineColorsTuple,
    silver: Array(10).fill('#afafaf') as unknown as MantineColorsTuple,
    green: Array(10).fill('#758e4f') as unknown as MantineColorsTuple,
  },
  components: {
    Container: {
      styles: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
    AppShell: {
      styles: (theme: MantineTheme) => ({
        main: {
          width: '100%',
          paddingTop: '200px',
          paddingBottom: 'xl',
          paddingLeft: 'xl',
          paddingRight: 'xl',
        },

        header: {
          backgroundColor: theme.colors.spaceCadet[0],
          color: 'white',
          border: 'none',
          padding: 'xl',
        },
      }),
    },
    Anchor: Anchor.extend({
      defaultProps: {
        underline: 'never',
      },
      styles: () => ({
        root: {
          color: 'white',
          textDecoration: 'none',
          transition: 'color 150ms ease',
          whiteSpace: 'nowrap',
        },
      }),
    }),
    Button: {
      defaultProps: {
        variant: 'filled',
      },
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.colors.orange[0],
          color: 'white',
        },
      }),
    },
    Input: {
      defaultProps: {
        size: 'md',
        radius: 'md',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
});
