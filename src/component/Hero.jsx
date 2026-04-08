import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import  {translations}  from '../data.js';

export default function Hero() {

  const { darkMode } = useTheme();
  const { language } = useLanguage();
 
  return(
  <section className={`px-30 ${darkMode ? 'bg-neutral-900' : 'bg-white'}`}>

    <div className="h-[1px] w-full" />
    <div className="w-full py-12 flex items-center justify-between ">
      
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-[80px] h-[2px] bg-indigo-400"></div>
            <span className="text-violet-600 font-medium">{language === 'TR' ? translations.TR.hero.name : translations.EN.hero.name}</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          {language === 'TR' ? translations.TR.hero.title : translations.EN.hero.title}
        </h1>

        <p className="text-gray-500 mb-8">
          {language === 'TR' ? translations.TR.hero.description : translations.EN.hero.description}
        </p>

        <div className="flex items-center gap-2">
          <button className="cursor-pointer border px-4 py-2 rounded-md bg-violet-600 text-white hover:font-bold">
            {language === 'TR' ? translations.TR.hero.hireMe : translations.EN.hero.hireMe}
          </button>

          <button onClick = {() => window.open('https://github.com/cagdastopal')} className={`cursor-pointer border px-4 py-2 rounded-md hover:text-violet-600 hover:font-bold ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
            Github
          </button>

          <button onClick = {() => window.open('https://www.linkedin.com/in/%C3%A7a%C4%9Fda%C5%9F-topal-a0b163113/')} className={`cursor-pointer border px-4 py-2 rounded-md hover:text-violet-600 hover:font-bold ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
            Linkedin
          </button>
        </div>
      </div>

      <div className="w-[700px] h-[500px] rounded-xl overflow-hidden shadow-lg">
        <img
          src="./public/picture1.jpg"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </section>
  )
}
