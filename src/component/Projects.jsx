import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Projects() {
  const { darkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Workintech project1",
      image: "/project1.png",
      description:
        "Bu proje, Workintech Full Stack Web Geliştirme eğitimindeki S8 sunuma hazırlık olarak, HTML ve CSS becerilerini geliştirmeniz için tasarlanmıştır. Bu projede, sadece HTML ve CSS kullanarak verilen tasarımı aynen uygulamanız beklenmektedir. Figma tasarım dosyasını referans alarak, sayfanızın görsel yapısını oluşturun.",
    },
    {
      id: 2,
      title: "Workintech project2",
      image: "/project1.png",
      description:
        "Bu proje, Workintech Full Stack Web Geliştirme eğitimindeki S8 sunuma hazırlık olarak, HTML ve CSS becerilerini geliştirmeniz için tasarlanmıştır. Bu projede, sadece HTML ve CSS kullanarak verilen tasarımı aynen uygulamanız beklenmektedir. Figma tasarım dosyasını referans alarak, sayfanızın görsel yapısını oluşturun.",
    },
    {
      id: 3,
      title: "Workintech project3",
      image: "/project1.png",
      description:
        "Bu proje, Workintech Full Stack Web Geliştirme eğitimindeki S8 sunuma hazırlık olarak, HTML ve CSS becerilerini geliştirmeniz için tasarlanmıştır. Bu projede, sadece HTML ve CSS kullanarak verilen tasarımı aynen uygulamanız beklenmektedir. Figma tasarım dosyasını referans alarak, sayfanızın görsel yapısını oluşturun.",
    }
  ];

  return (
    <section
      className={`
        px-30
        max-[500px]:px-5
        ${darkMode ? 'bg-neutral-900' : 'bg-white'}
      `}
    >
      <Link to="/projects">
        <h2
          className={`
            text-[48px] font-bold mb-10
            max-[500px]:text-[28px]
            max-[500px]:mb-6
            ${darkMode ? 'text-white' : 'text-[#1f2937]'}
          `}
        >
          Projects
        </h2>
      </Link>

      <div
        className="
          grid grid-cols-3 gap-x-4
          max-[500px]:grid-cols-1
          max-[500px]:gap-y-8
        "
      >
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col py-5 max-[500px]:py-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover mb-6 rounded-xl"
            />

            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[500px]:text-[22px]">
              {project.title}
            </h3>

            <p
              className={`
                leading-[28px] mb-6
                max-[500px]:text-[14px]
                max-[500px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >
              {project.description}
            </p>

            <div className="flex items-center justify-between">
              <a
                href="https://github.com/cagdastopal/fsweb-s4-bonus-challenge-html-pizza"
                className="text-[16px] text-indigo-700 underline max-[500px]:text-[14px]"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>

      {darkMode && <div className="mt-8 h-[1px] w-full bg-neutral-900" />}
    </section>
  );
}