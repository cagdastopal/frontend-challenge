import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data.js';

export default function Profile() {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <section
      className={`
        px-30
        max-[800px]:px-5
        ${darkMode ? 'bg-neutral-900' : 'bg-white'}
      `}
    >
      <Link to="/profile">
        <h2
          className={`
            text-[48px] font-bold mb-10
            max-[800px]:text-[28px]
            max-[800px]:mb-6
            ${darkMode ? 'text-white' : 'text-[#1f2937]'}
          `}
        >
          {language === 'TR'
            ? translations.TR.profile.profile
            : translations.EN.profile.profile}
        </h2>
      </Link>

      <div
        className="
          grid grid-cols-2 gap-x-32
          max-[800px]:grid-cols-1
          max-[800px]:gap-y-8
        "
      >
        <div>
          <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[800px]:text-[20px]">
            {language === 'TR'
              ? translations.TR.profile.profile
              : translations.EN.profile.profile}
          </h3>

          <div className="space-y-4 text-[16px] max-[800px]:text-[14px]">
            <div className="flex gap-6 max-[800px]:flex-col max-[800px]:gap-1">
              <span className="font-semibold text-gray-500">
                {language === 'TR'
                  ? translations.TR.profile.dateofbirthday
                  : translations.EN.profile.dateofbirthday}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {language === 'TR'
                  ? translations.TR.profile.dateinfo
                  : translations.EN.profile.dateinfo}
              </span>
            </div>

            <div className="flex gap-6 max-[800px]:flex-col max-[800px]:gap-1">
              <span className="font-semibold text-gray-500">
                {language === 'TR'
                  ? translations.TR.profile.city
                  : translations.EN.profile.city}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {language === 'TR'
                  ? translations.TR.profile.cityinfo
                  : translations.EN.profile.cityinfo}
              </span>
            </div>

            <div className="flex gap-6 max-[800px]:flex-col max-[800px]:gap-1">
              <span className="font-semibold text-gray-500">
                {language === 'TR'
                  ? translations.TR.profile.graduate
                  : translations.EN.profile.graduate}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {language === 'TR'
                  ? translations.TR.profile.graduateinfo
                  : translations.EN.profile.graduateinfo}
              </span>
            </div>

            <div className="flex gap-6 max-[800px]:flex-col max-[800px]:gap-1">
              <span className="font-semibold text-gray-500">
                {language === 'TR'
                  ? translations.TR.profile.preferrole
                  : translations.EN.profile.preferrole}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {language === 'TR'
                  ? translations.TR.profile.preferroleinfo
                  : translations.EN.profile.preferroleinfo}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[800px]:text-[20px]">
            {language === 'TR'
              ? translations.TR.profile.about
              : translations.EN.profile.about}
          </h3>

          <p
            className={`
              leading-[28px] mb-6
              max-[800px]:text-[14px]
              ${darkMode ? 'text-gray-300' : 'text-gray-500'}
            `}
          >
            {language === 'TR'
              ? translations.TR.profile.aboutinfo
              : translations.EN.profile.aboutinfo}
          </p>
        </div>
      </div>

      <div className="mt-8 h-[1px] w-full bg-[#c7c3ff]" />
    </section>
  );
}