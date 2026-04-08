import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
           <App />
           <ToastContainer />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
)
