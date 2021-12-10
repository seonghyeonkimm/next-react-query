import * as React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  }))
  return (
    <React.Suspense fallback={null}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </React.Suspense>
  );
}

export default MyApp
