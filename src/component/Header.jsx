export default function Header() {
  return (
    <header>
      <div className="flex justify-end items-center text-center gap-1 bg-white pt-10 text-[13px] font-bold">
        <label className="relative cursor-pointer">
        <input type="checkbox" className="peer sr-only" />

        <div className="
          h-6 w-11 rounded-full bg-violet-300 transition
          peer-checked:bg-violet-600
        "></div>

        <span className="
          absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-gray-300 transition
          peer-checked:translate-x-5
        "></span>
      </label>

      <span className="text-gray-600 uppercase">
        Dark Mode
      </span>

      <span className="text-gray-300">|</span>

      <nav>
        <a href = "#turkce" className="text-[13px] font-bold text-violet-600 uppercase"> Türkçe </a>
      </nav>

      <span className="text-[13px] font-semibold text-gray-500 uppercase">
        'ye Geç
      </span>
    </div>

    <nav className="flex justify-end items-center gap-[52px] cursor-pointer pt-10">
      <a className="text-[20px] font-medium text-gray-500 hover:text-gray-900">
        Skills
      </a>

      <a className="text-[20px] font-medium text-gray-500 hover:text-gray-900">
        Projects
      </a>

      <a className="flex items-center justify-center h-[48px] px-[32px] border border-violet-600 text-violet-600 rounded-[8px] text-[20px] font-medium hover:bg-violet-600 hover:text-white">
        Hire me
      </a>
    </nav>

    </header>
  );
}