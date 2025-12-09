function Footer() {
  // We can get the year dynamically!
  const year = new Date().getFullYear(); 

  return (
    <footer className="border-t dark:border-white/10 border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[13px] dark:text-white/60 text-white/60">
          © {year} Events
        </p>
        <div className="flex items-center gap-3 text-[13px]">
          <a className="px-3 py-2 rounded-xl dark:hover:bg-white/10 hover:bg-white/5" href="#">
            Privacy
          </a>
          <a className="px-3 py-2 rounded-xl dark:hover:bg-white/10 hover:bg-white/5" href="#">
            Terms
          </a>
          <a className="px-3 py-2 rounded-xl dark:hover:bg-white/10 hover:bg-white/5" href="#">
            Admin
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;