import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data.js';

export default function Footer() {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <footer
      className={`
        px-30 py-12
        max-[800px]:px-5
        max-[800px]:py-8
        ${darkMode ? 'bg-black' : 'bg-gray-100'}
      `}
    >
      <div
        className="
          mx-auto flex items-center justify-between
          max-[800px]:flex-col
          max-[800px]:justify-center
          max-[800px]:items-center
          max-[800px]:gap-6
          max-[800px]:text-center
        "
      >
        <div>
          <h2
            className={`
              text-[20px] font-bold mb-6
              max-[800px]:text-[16px]
              max-[800px]:mb-2
              ${darkMode ? 'text-white' : 'text-[#1f2937]'}
            `}
          >
            {language === 'TR'
              ? translations.TR.footer.text
              : translations.EN.footer.text}
          </h2>
        </div>

        <div
          className="
            flex items-center gap-6 text-[16px]
            max-[800px]:flex-col
            max-[800px]:gap-3
            max-[800px]:text-[14px]
          "
        >
          <a
            href="mailto:cagdas.topal@hotmail.com"
            className="text-red-500 underline flex items-center gap-2 break-all"
          >
            cagdas.topal@hotmail.com
          </a>

          <a
            href="/"
            className={darkMode ? 'text-gray-300' : 'text-gray-700'}
          >
            Personal Blog
          </a>

          <a
            href="https://github.com/cagdastopal"
            className="text-green-600 font-medium"
          >
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/%C3%A7a%C4%9Fda%C5%9F-topal-a0b163113/"
            className="text-blue-600 font-medium"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}