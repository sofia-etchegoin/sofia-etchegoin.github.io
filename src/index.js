import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './components/App'
import Footer from './components/Footer'
import Header from './components/Header'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app')).render(
    <QueryClientProvider client={queryClient}>
      <Header />
      <App />
      <Footer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
})
