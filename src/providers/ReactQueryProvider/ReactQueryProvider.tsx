'use client';

import { FCWithChildren } from '@/utils/types';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
    },
  },
});

const ReactQueryProvider: FCWithChildren = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
