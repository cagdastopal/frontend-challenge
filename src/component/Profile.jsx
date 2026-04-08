import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import  {translations}  from '../data.js';

export default function Profile() {

  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return(
    <section className={`px-30 ${darkMode ? 'bg-neutral-900' : 'bg-white'}`}>
        
      <Link to="/profile">
        <h2 className="text-[48px] font-bold text-[#1f2937] mb-10">
          {language === 'TR' ? translations.TR.profile.profile : translations.EN.profile.profile}
        </h2>
      </Link>

      <div className="grid grid-cols-2 gap-x-32">
        
        <div>
          <h3 className="text-[32px] font-medium text-violet-600 mb-4 font-bold">
            {language === 'TR' ? translations.TR.profile.profile : translations.EN.profile.profile}
          </h3>

          <div className="space-y-4 text-[16px]">
            <div className="flex gap-6">
              <span className="font-semibold min-w-[140px] text-gray-500">
                {language === 'TR' ? translations.TR.profile.dateofbirthday : translations.EN.profile.dateofbirthday}
              </span>
              <span className="text-gray-700">
                {language === 'TR' ? translations.TR.profile.dateinfo : translations.EN.profile.dateinfo}
              </span>
            </div>

            <div className="flex gap-6">
              <span className="font-semibold min-w-[140px] text-gray-500">
                {language === 'TR' ? translations.TR.profile.city : translations.EN.profile.city}
              </span>
              <span className="text-gray-700">
                {language === 'TR' ? translations.TR.profile.cityinfo : translations.EN.profile.cityinfo}
              </span>
            </div>

            <div className="flex gap-6">
              <span className="font-semibold min-w-[140px] text-gray-500">
                {language === 'TR' ? translations.TR.profile.graduate : translations.EN.profile.graduate}
              </span>
              <span className="text-gray-700">
                {language === 'TR' ? translations.TR.profile.graduateinfo : translations.EN.profile.graduateinfo}
              </span>
            </div>

            <div className="flex gap-6">
              <span className="font-semibold min-w-[140px] text-gray-500">
                {language === 'TR' ? translations.TR.profile.preferrole : translations.EN.profile.preferrole}
              </span>
              <span className="text-gray-700">
                {language === 'TR' ? translations.TR.profile.preferroleinfo : translations.EN.profile.preferroleinfo}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-medium text-violet-600 mb-4 font-bold">
            {language === 'TR' ? translations.TR.profile.about : translations.EN.profile.about}
          </h3>

          <p className="text-gray-500 leading-[28px] mb-6">
            {language === 'TR' ? translations.TR.profile.aboutinfo : translations.EN.profile.aboutinfo}
          </p>
        </div>
      </div>

      <div className="mt-8 h-[1px] w-full bg-[#c7c3ff]" />

    </section>
  )
}
