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
          max-[800px]:px-5
          ${darkMode ? 'bg-neutral-900' : 'bg-white'}
        `}
      >
        <div className="h-[1px] w-full bg-[#c7c3ff]" />

        <Link to="/skills">
          <h2
            className={`
              text-[48px] font-bold mb-10
              max-[800px]:text-[28px]
              max-[800px]:mb-6
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
            grid grid-cols-3 gap-x-24
            max-[800px]:grid-cols-1
            max-[800px]:gap-y-8
            max-[800px]:gap-x-0
          "
        >
          <div>
            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[800px]:text-[22px]">
              Java Script
            </h3>
            <p
              className={`
                text-[12px] leading-[20px] max-w-[260px]
                max-[800px]:max-w-full
                max-[800px]:text-[14px]
                max-[800px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >
              {language === "TR" ? "JavaScript, web sayfalarına etkileşim kazandıran bir programlama dilidir." : "JavaScript is a programming language that adds interactivity to web pages." }
            </p>
          </div>

          <div>
            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[800px]:text-[22px]">
              React.Js
            </h3>
            <p
              className={`
                text-[12px] leading-[20px]
                max-[800px]:text-[14px]
                max-[800px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >
              {language === "TR" ? "JavaScript, web sayfalarına etkileşim kazandıran bir programlama dilidir." : "JavaScript is a programming language that adds interactivity to web pages." }

            </p>
          </div>

          <div>
            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[500px]:text-[22px]">
              Node.Js
            </h3>
            <p
              className={`
                text-[12px] leading-[20px]
                max-[800px]:text-[14px]
                max-[800px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >

              {language === "TR" ? "Node.js, JavaScript’in tarayıcı dışında da çalışmasını sağlayan ve sunucu tarafında hızlı ve ölçeklenebilir uygulamalar geliştirmeye imkân veren bir çalışma ortamıdır." : "Node.js is a runtime environment that allows JavaScript to run outside the browser and enables building fast and scalable server-side applications." }

            </p>
          </div>

          <div>
            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[500px]:text-[22px]">
              Redux
            </h3>
            <p
              className={`
                text-[12px] leading-[20px]
                max-[800px]:text-[14px]
                max-[800px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >

              {language === "TR" ? "Redux, JavaScript uygulamalarında durum (state) yönetimini merkezi ve öngörülebilir hale getiren bir state yönetim kütüphanesidir." : "Redux is a state management library that makes application state predictable and centralized in JavaScript applications." }

            </p>
          </div>

          <div>
            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[500px]:text-[22px]">
              React
            </h3>
            <p
              className={`
                text-[12px] leading-[20px]
                max-[800px]:text-[14px]
                max-[800px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >

              {language === "TR" ? "React, kullanıcı arayüzleri oluşturmak için kullanılan, bileşen tabanlı ve yeniden kullanılabilir yapılar sunan bir JavaScript kütüphanesidir." : "React is a JavaScript library used to build user interfaces with a component-based and reusable structure." }

            </p>
          </div>

          <div>
            <h3 className="text-[32px] font-bold text-violet-600 mb-4 max-[800px]:text-[22px]">
              Oracle SQL
            </h3>
            <p
              className={`
                text-[12px] leading-[20px]
                max-[800px]:text-[14px]
                max-[800px]:leading-[24px]
                ${darkMode ? 'text-gray-300' : 'text-gray-500'}
              `}
            >
              
              {language === "TR" ? "Oracle SQL, Oracle veritabanlarında veri sorgulamak, eklemek, güncellemek ve yönetmek için kullanılan yapılandırılmış sorgu dilidir." : "Oracle SQL is a structured query language used to query, insert, update, and manage data in Oracle databases." }

            </p>
          </div>
        </div>

        <div className="mt-8 h-[1px] w-full bg-[#c7c3ff]" />
      </section>
    </>
  );
}