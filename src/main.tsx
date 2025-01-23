import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import "./client/styles/index.css"
import { RouterProvider } from 'react-router-dom';
import { router } from './client/router/router.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </QueryClientProvider>
)
