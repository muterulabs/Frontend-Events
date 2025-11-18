function EventCard() {
  const event = {
    title: 'Art & Light Expo',
    date: 'Nov 28, 2025, 06:30 PM',
    venue: 'Warehouse 19',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop',
  };

  return (
    <div className="group cursor-pointer">
      <div className="dark:bg-[#0F0F0F] rounded-2xl overflow-hidden elevate bg-black">
        <img
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
          src={event.image}
          alt={event.title}
        />
      </div>
      <div className="mt-3">
        <h3 className="text-[18px] tracking-tight font-semibold">
          {event.title}
        </h3>
        <div className="flex flex-col gap-1 mt-1 text-[13px] dark:text-white/70 text-white/70">
          <div className="flex items-center gap-2">
            <span>C</span> {/* Calendar Icon Placeholder */}
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>L</span> {/* Location Icon Placeholder */}
            <span>{event.venue}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;