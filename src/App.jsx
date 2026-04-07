import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import Skills from './component/Skills'
import Profile from './component/Profile'
import Projects from './component/Projects'
import Footer from './component/Footer'
import { useTheme } from './context/ThemeContext'

export default function App() {

  const { darkMode, changeDarkMode } = useTheme();

  return(
  <>
      <div className={`flex justify-end items-center text-center pt-10 text-[13px] font-bold gap-[20px] px-30 
        ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <label className="relative cursor-pointer">
        <input type="checkbox" value="" checked = {darkMode} onChange={changeDarkMode} className="peer sr-only" />

        <div className="
          h-6 w-11 rounded-full bg-violet-300 transition
          peer-checked:bg-violet-600
        "></div>

        <span className="
          absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-gray-300 transition
          peer-checked:translate-x-5
        "></span>
      </label>

      <span className="uppercase text-gray-600">
         {darkMode ? 'Light Mode' : 'Dark Mode'}
      </span>

      <span className="text-gray-300">|</span>

      <nav>
        <a href = "#" className="text-[13px] font-bold text-violet-600 uppercase"> Türkçe </a>
      </nav> 
    </div>
    
    <Header />
    <Hero />
    <Skills />
    <Profile />
    <Projects />
    <Footer />
  </>
  )
}
