import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', 'EN');

  const changeLanguageMode = () => {
    if(language === "EN") {
        setLanguage("TR");
        toast.success("Türkçe Seçildi!");
    } else {
        setLanguage("EN");
        toast.success("English Selected!");
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