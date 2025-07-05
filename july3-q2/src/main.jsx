import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import QuoteApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QuoteApp/>
  </StrictMode>,
)
