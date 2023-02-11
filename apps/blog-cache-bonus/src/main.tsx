import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { useAtomsDevtools } from 'jotai-devtools'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const MINUTES_1 = 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: MINUTES_1,
    }
  },
});

const AtomsDevtools = ({ children }: { children: JSX.Element }) => {
  useAtomsDevtools('blog-cache-bonus');
  return children;
}

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AtomsDevtools>
          <App />
        </AtomsDevtools>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
