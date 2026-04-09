import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function ModeSwitch() {
  const { darkMode, changeDarkMode } = useTheme();
  const { language, changeLanguageMode } = useLanguage();

  return (
    <div
      className={`
        flex justify-end items-center text-center
        pt-10 px-30 gap-[20px] text-[13px] font-bold
        max-[800px]:px-5
        max-[800px]:pt-6
        max-[800px]:gap-3
        max-[800px]:text-[11px]
        max-[800px]:flex-wrap
        ${darkMode ? 'bg-neutral-900' : 'bg-white'}
      `}
    >
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          value=""
          checked={darkMode}
          onChange={changeDarkMode}
          className="peer sr-only"
        />

        <div
          className="
            h-6 w-11 rounded-full bg-violet-300 transition
            peer-checked:bg-violet-600
            max-[800px]:h-5
            max-[800px]:w-10
          "
        ></div>

        <span
          className="
            absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-gray-300 transition
            peer-checked:translate-x-5
            max-[800px]:h-3.5
            max-[800px]:w-3.5
            max-[800px]:peer-checked:translate-x-4
          "
        ></span>
      </label>

      <span className="uppercase text-gray-600 max-[800px]:text-[11px]">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </span>

      <span className="text-gray-300">|</span>

      <nav>
        <a
          href="#"
          className="text-[13px] font-bold text-violet-600 uppercase max-[800px]:text-[11px]"
          onClick={changeLanguageMode}
        >
          {language === 'TR' ? 'Türkçe' : 'English'}
        </a>
      </nav>
    </div>
  );
}