import { useParams } from "react-router-dom";
import { events } from "../data/events";

function EventDetailsPage() {
  const { id } = useParams();
  // Hint: id from URL is a string, but our event.id is a number.
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Grid Layout: 1 column on mobile, 2 columns on desktop */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col gap-6">
          {/* TODO: Add Title (h1) */}
          <h1 className="text-[28px] md:text-[36px] tracking-tight font-semibold">
            {event.title}
          </h1>
          {/* TODO: Add Date, Location, Price */}
          
          {/* Hint: Use flex-row to put icons next to text */}
          <div className="flex items-center gap-2">
            <span>C</span> {/* Calendar Icon Placeholder */}
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>L</span> {/* Location Icon Placeholder */}
            <span>{event.location}</span>
          </div>
          {/* Booking Card */}
          <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border dark:border-white/10 shadow-sm">
            {/* TODO: Add Quantity Selector and Buy Button */}
            <div className="flex items-center gap-2">
              <span>Q</span> {/* Quantity Icon Placeholder */}
              <span>1</span>
            </div>
            <div className="text-center p-4">Booking Section Placeholder</div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400">
            Immersive installations and curated works from emerging artists.
            Experience minimal forms and bold light.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsPage;
