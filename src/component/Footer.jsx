import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import  {translations}  from '../data.js';

export default function Footer() {

  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return(
     <footer className={`px-30 py-12 ${darkMode ? 'bg-black' : 'bg-gray-100' }`}>

      <div className="mx-auto flex items-center justify-between">
        
        <div>
          <h2 className="text-[20px] font-bold text-[#1f2937] mb-6">
            {language === 'TR' ? translations.TR.footer.text : translations.EN.footer.text}
          </h2>
        </div>

        <div className="flex items-center gap-6 text-[16px]">
          <a
            href="mailto:cagdas.topal@hotmail.com"
            className="text-red-500 underline text-[16px] flex items-center gap-2"
          > cagdas.topal@hotmail.com
          </a>

          <a href="/" className="text-gray-700">
            Personal Blog
          </a>
          <a href="https://github.com/cagdastopal" className="text-green-600 font-medium">
            Github
          </a>
          <a href="https://www.linkedin.com/in/%C3%A7a%C4%9Fda%C5%9F-topal-a0b163113/" className="text-blue-600 font-medium">
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  )
}
