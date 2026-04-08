import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
           <App />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
)
