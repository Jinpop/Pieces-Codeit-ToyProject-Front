import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PublicProvider } from './context/publicContext.jsx'

createRoot(document.getElementById('root')).render(
  <PublicProvider>
    <App />
  </PublicProvider>

)
