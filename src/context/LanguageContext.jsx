import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', 'EN');

  const changeLanguageMode = () => {
    if(language === "EN") {
        setLanguage("TR");
    } else {
        setLanguage("EN");
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguageMode }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}