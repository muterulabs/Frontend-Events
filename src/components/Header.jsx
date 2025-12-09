function Header() {
  return (
    <header className="sticky top-0 z-40 w-full glass">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 py-3 md:py-4">
          {/* Logo and Title */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-xl bg-[#0066FF] grid place-content-center text-black">
              <span className="text-[13px] font-semibold tracking-tight">
                Au
              </span>
            </div>
            <span className="text-[18px] md:text-[20px] tracking-tight font-semibold">
              Events
            </span>
          </a>

          {/* Search (Simplified) */}
          <div className="relative flex-1 max-w-xl mx-auto">
            <div className="flex items-center gap-2 bg-[#F2F2F2] dark:bg-white/5 rounded-full pl-4 pr-3 py-2">
              <span className="w-4 h-4 dark:text-white/50 text-white/50">
                S
              </span>{" "}
              {/* Icon Placeholder */}
              <input
                type="text"
                placeholder="Search by event, venue, city"
                className="w-full bg-transparent outline-none text-[14px] placeholder-black/50 dark:placeholder-white/40"
              />
              <button className="hidden md:inline-flex text-[12px] px-2 py-1 rounded-full dark:bg-white/10 dark:text-white/70 bg-black text-white/70">
                ⌘K
              </button>
            </div>
          </div>

          {/* Actions (Simplified) */}
          <div className="ml-auto flex items-center gap-2">
            <button className="relative w-12 h-7 rounded-full dark:bg-white/15 transition p-1 group bg-white/10">
              {/* Dark Mode Toggle Placeholder */}
            </button>
            <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0066FF] text-[14px] font-medium tracking-tight text-black">
              <span>+</span> {/* Icon Placeholder */}
              Add Event
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
