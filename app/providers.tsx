'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors : {
    shadow: {
      1: 'rgb(50, 48, 48, 0.4)',
    },
    gradients: {
      darkOverlay: 'linear-gradient(rgb(50, 48, 48, 0.5), rgb(50, 48, 48, 0.5))',
    }
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
