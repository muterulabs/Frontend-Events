import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({id, image, title, date, location}) {

  return (
    <Link to={`/events/${id}`} className="block group"> 
    <div className="group cursor-pointer">
      <div className="dark:bg-[#0F0F0F] rounded-2xl overflow-hidden elevate bg-black">
        <img
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
          src={image}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="mt-3">
        <h3 className="text-[18px] tracking-tight font-semibold">
          {title}
        </h3>
        <div className="flex flex-col gap-1 mt-1 text-[13px] dark:text-white/70 text-white/70">
          <div className="flex items-center gap-2">
            <span>C</span> {/* Calendar Icon Placeholder */}
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>L</span> {/* Location Icon Placeholder */}
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default EventCard;