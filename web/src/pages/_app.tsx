import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
   
    <QueryClientProvider client={queryClient}>
        <div className="bg-gray-500">
        <Component {...pageProps} />
        </div>
      
      {/* React Query DevTools (opcional para debugging) */}
     
    </QueryClientProvider>
  );
}
