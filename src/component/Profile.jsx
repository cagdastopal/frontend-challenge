import { useTheme } from '../context/ThemeContext';

export default function Profile() {

  const { darkMode } = useTheme();
  
  return(
    <section className={`px-30 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        
      <h2 className="text-[48px] font-bold text-[#1f2937] mb-10">
        Profile
      </h2>

      <div className="grid grid-cols-2 gap-x-32">
        
        <div>
          <h3 className="text-[32px] font-medium text-violet-600 mb-4 font-bold">Profile</h3>

          <div className="space-y-4 text-[16px]">
            <div className="flex gap-6">
              <span className="font-semibold min-w-[140px] text-gray-500">
                Doğum tarihi
              </span>
              <span className="text-gray-700">28.08.1989</span>
            </div>

            <div className="flex gap-6">
              <span className="font-semibold min-w-[140px] text-gray-500">
                İkamet Şehri
              </span>
              <span className="text-gray-700">İstanbul</span>
            </div>

            <div className="flex gap-6">
              <span className="font-semibold min-w-[140px] text-gray-500">
                Eğitim Durumu
              </span>
              <span className="text-gray-700">
                Doğu Akdeniz Üniversitesi - Bilgisayar Mühendisliği, 2013
              </span>
            </div>

            <div className="flex gap-6">
              <span className="font-semibold min-w-[140px] text-gray-500">
                Tercih Ettiği Rol
              </span>
              <span className="text-gray-700">
                Frontend, UI
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-medium text-violet-600 mb-4 font-bold">
            About Me
          </h3>

          <p className="text-gray-500 leading-[28px] mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>

          <p className="text-gray-500 leading-[28px]">
            Minima accusamus ratione soluta aperiam sit voluptate? 
            Dicta quod deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>

      <div className="mt-8 h-[1px] w-full bg-[#c7c3ff]" />

    </section>
  )
}
