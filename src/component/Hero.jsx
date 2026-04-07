import { useTheme } from '../context/ThemeContext';

export default function Hero() {

  const { darkMode } = useTheme();
  
  return(
  <section className={`px-30 ${darkMode ? 'bg-black' : 'bg-white'}`}>

    <div className="h-[1px] w-full" />
    <div className="w-full py-12 flex items-center justify-between ">
      
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-[80px] h-[2px] bg-indigo-400"></div>
            <span className="text-violet-600 font-medium">Çağdaş Topal</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
          Creative thinker <br />
          Minimalism lover
        </h1>

        <p className="text-gray-500 mb-8">
          Hi, I’m Çağdaş. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let’s shake hands with me.
        </p>

        <div className="flex items-center gap-2">
          <button className="cursor-pointer border px-4 py-2 rounded-md bg-violet-600 text-white">
            Hire me
          </button>

          <button className={`cursor-pointer border px-4 py-2 rounded-md ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
            Github
          </button>

          <button className={`cursor-pointer border px-4 py-2 rounded-md ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
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
