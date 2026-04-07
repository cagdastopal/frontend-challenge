export default function Header( { darkMode } ) {
  
  return (
  <header className={`px-30 ${darkMode ? 'bg-black' : 'bg-white mt-1'}`}>
    <nav className="flex justify-end items-center gap-[50px] cursor-pointer">
      <a className="text-[20px] font-medium text-gray-500 hover:text-violet-600">
        Skills
      </a>

      <a className="text-[20px] font-medium text-gray-500 hover:text-violet-600">
        Projects
      </a>

      <a className="flex items-center justify-center h-[48px] px-[32px] border border-violet-600 text-violet-600 rounded-[8px] text-[20px] font-medium hover:bg-violet-600 hover:text-white">
        Hire me
      </a>
    </nav>
  </header>
  );
}