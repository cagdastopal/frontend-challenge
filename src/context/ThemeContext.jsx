import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage('theme', false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    if(darkMode) {
      toast.success("Light Mode Aktif!");
    } else {
      toast.success("Dark Mode Aktif!");
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