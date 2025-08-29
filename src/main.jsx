import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WorldRanksProvider } from './contexts/WorldRanksApi.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorldRanksProvider>
      <App />
    </WorldRanksProvider>
  </StrictMode>,
)
