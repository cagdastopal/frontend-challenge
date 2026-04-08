import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import  {translations}  from '../data.js';

export default function Skills() {

  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return(
    <>      
      <section className={`px-30 ${darkMode ? 'bg-neutral-900' : 'bg-white'}`}>

      <div className="h-[1px] w-full bg-[#c7c3ff]" />

      <Link to="/skills">
        <h2 className="text-[48px] font-bold text-[#1f2937] mb-10">
          {language === 'TR' ? translations.TR.skills.title : translations.EN.skills.title}
        </h2>
      </Link>

      <div className="grid grid-cols-5 gap-x-24">
        <div>
          <h3 className="text-[32px] font-medium text-violet-600 mb-4 font-bold">
            Java Script
          </h3>
          <p className="text-[12px] leading-[20px] text-gray-500 max-w-[260px]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <h3 className="text-[32px] font-medium text-violet-600 mb-4 font-bold">
            React.Js
          </h3>
          <p className="text-[12px] leading-[20px] text-gray-500">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <h3 className="text-[32px] font-medium text-violet-600 mb-4 font-bold">
            Node.Js
          </h3>
          <p className="text-[12px] leading-[20px] text-gray-500">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <h3 className="text-[32px] font-medium text-violet-600 mb-4 font-bold">
            Redux
          </h3>
          <p className="text-[12px] leading-[20px] text-gray-500">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <h3 className="text-[32px] font-medium text-violet-600 mb-4 font-bold">
            Oracle SQL
          </h3>
          <p className="text-[12px] leading-[20px] text-gray-500">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="mt-8 h-[1px] w-full bg-[#c7c3ff]" />
      </section>
    </>
  )
}
