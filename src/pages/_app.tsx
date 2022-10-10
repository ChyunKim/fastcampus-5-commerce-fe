import { Provider } from 'react-redux';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';

import store from '@features/reducer/store';

import ToggleColorModeButton from '@components/common/ToggleColorModeButton';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { mode } from '@theme/foundations/colors';

import withAppProvider from 'contexts/app/app.provider';
import { withGlobalModalHandlerContext } from 'contexts/modal/useGlobalModalHandler.context';

function MyApp({ Component, pageProps }: any) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    // <ThemeProvider
    //   theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}
    // >
    <Provider store={store}>
      <ToggleColorModeButton />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
    /* </ThemeProvider> */
  );
}

export default withAppProvider(withGlobalModalHandlerContext(MyApp));
