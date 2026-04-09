import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';
import { useLanguage } from '../context/LanguageContext';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage('theme', false);
  const { language } = useLanguage();

  const changeDarkMode = () => {
    setDarkMode(!darkMode);

    if (language === "EN") {
      if (darkMode) {
        toast.success("Light Mode Selected!");
      } else {
        toast.success("Dark Mode Selected!");
      }
    } else {
      if (darkMode) {
        toast.success("Açık Tema Seçildi!");
      } else {
        toast.success("Koyu Tema Seçildi!");
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, changeDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}