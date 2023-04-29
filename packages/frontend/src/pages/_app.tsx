import "$/styles/globals.css";
import { createEmotionCache, MantineProvider } from "@mantine/core";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import rtlPlugin from "stylis-plugin-rtl";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const rtlCache = createEmotionCache({
    key: "mantine-rtl",
    stylisPlugins: [rtlPlugin],
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      <Hydrate state={pageProps.dehydratedState}>
        <MantineProvider
          // withGlobalStyles
          // withNormalizeCSS
          emotionCache={rtlCache}
          theme={{ dir: "rtl" }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
