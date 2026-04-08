import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import  {translations}  from '../data.js';

export default function Header() {

  const { darkMode } = useTheme();
  const { language } = useLanguage();
  
  return (
  <header className={`px-30 pt-5 ${darkMode ? 'bg-neutral-900' : 'bg-white'}`}>
    <nav className="flex justify-end items-center gap-[50px] cursor-pointer">
      <a href="/skills" className="text-[20px] font-medium text-gray-500 hover:text-violet-600">
        {language === 'TR' ? translations.TR.header.skills : translations.EN.header.skills}
      </a>

      <a href="/projects" className="text-[20px] font-medium text-gray-500 hover:text-violet-600">
        {language === 'TR' ? translations.TR.header.projects : translations.EN.header.projects}
      </a>

      <a href="/" className="flex items-center justify-center h-[48px] px-[32px] border border-violet-600 text-violet-600 rounded-[8px] text-[20px] font-medium hover:bg-violet-600 hover:text-white">
        {language === 'TR' ? translations.TR.header.hireMe : translations.EN.header.hireMe}
      </a>
    </nav>
  </header>
  );
}