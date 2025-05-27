import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './compoments/jsx/Welcome.jsx'

// import App from './compoments/jsx/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Welcome />
  </StrictMode>,
)
