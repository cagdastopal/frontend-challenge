import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data.js';

export default function Skills() {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <>
      <section
        className={`
          px-30
          max-[500px]:px-5
          ${darkMode ? 'bg-neutral-900' : 'bg-white'}
        `}
      >
        <div className="h-[1px] w-full bg-[#c7c3ff]" />

        <Link to="/skills">
          <h2
            className={`
              text-[48px] font-bold mb-10
              max-[500px]:text-[28px]
              max-[500px]:mb-6
              ${darkMode ? 'text-white' : 'text-[#1f2937]'}
            `}
          >
            {language === 'TR'
              ? translations.TR.skills.title
              : translations.EN.skills.title}
          </h2>
        </Link>

        <div
          className="
            grid grid-cols-5 gap-x-24
            max-[500px]:grid-cols-1
            max-[500px]:gap-y-8
            max-[500px]:gap-x-0
          "
        >
          <div>
            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[500px]:text-[22px]">
              Java Script
            </h3>
            <p
              className={`
                text-[12px] leading-[20px] max-w-[260px]
                max-[500px]:max-w-full
                max-[500px]:text-[14px]
                max-[500px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div>
            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[500px]:text-[22px]">
              React.Js
            </h3>
            <p
              className={`
                text-[12px] leading-[20px]
                max-[500px]:text-[14px]
                max-[500px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div>
            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[500px]:text-[22px]">
              Node.Js
            </h3>
            <p
              className={`
                text-[12px] leading-[20px]
                max-[500px]:text-[14px]
                max-[500px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div>
            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[500px]:text-[22px]">
              Redux
            </h3>
            <p
              className={`
                text-[12px] leading-[20px]
                max-[500px]:text-[14px]
                max-[500px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div>
            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[500px]:text-[22px]">
              Oracle SQL
            </h3>
            <p
              className={`
                text-[12px] leading-[20px]
                max-[500px]:text-[14px]
                max-[500px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="mt-8 h-[1px] w-full bg-[#c7c3ff]" />
      </section>
    </>
  );
}