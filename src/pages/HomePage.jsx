import EventCard from "../components/EventCard"; // Go UP one folder, then into components

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
      {/* Title and Category Filters */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-[28px] md:text-[36px] tracking-tight font-semibold">
          Discover Events
        </h1>
        <div className="hidden md:flex items-center gap-2">
          <button className="px-3 py-2 rounded-xl dark:bg-white/10 text-[13px] bg-white/5">
            Tech
          </button>
          <button className="px-3 py-2 rounded-xl dark:bg-white/10 text-[13px] bg-white/5">
            Food & Drink
          </button>
          <button className="px-3 py-2 rounded-xl dark:bg-white/10 text-[13px] bg-white/5">
            Arts & Culture
          </button>
          <button className="px-3 py-2 rounded-xl dark:bg-white/10 text-[13px] bg-white/5">
            Music
          </button>
        </div>
      </div>

      {/* Event Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default HomePage;
