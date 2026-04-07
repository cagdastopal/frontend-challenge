export default function Footer( {darkMode} ) {
  return(
     <footer className={`px-30 py-12 ${darkMode ? 'bg-black' : 'bg-gray-100' }`}>

      <div className="mx-auto flex items-center justify-between">
        
        <div>
          <h2 className="text-[20px] font-bold text-[#1f2937] mb-6">
            Let’s work together on <br />
            your next product.
          </h2>
        </div>

        <div className="flex items-center gap-6 text-[16px]">
          <a
            href="mailto:cagdas.topal@hotmail.com"
            className="text-red-500 underline text-[16px] flex items-center gap-2"
          > cagdas.topal@hotmail.com
          </a>

          <a href="#" className="text-gray-700">
            Personal Blog
          </a>
          <a href="#" className="text-green-600 font-medium">
            Github
          </a>
          <a href="#" className="text-blue-600 font-medium">
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  )
}
