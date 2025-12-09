import { useParams } from "react-router-dom";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import artsCultureBg from "../assets/hero/arts-culture.jpg";
import techBg from "../assets/hero/tech.jpg";
import musicBg from "../assets/hero/music.jpg";
import foodDrinkBg from "../assets/hero/food-drink.jpg";

const categoryBackgrounds = {
  "Arts & Culture": artsCultureBg,
  Tech: techBg,
  Music: musicBg,
  "Food & Drink": foodDrinkBg,
};

function CategoryPage() {
  const { name } = useParams();

  // Filter events (case-insensitive)
  const filteredEvents = events.filter(
    (event) => event.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-gray-900 text-white py-24 px-4 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${
            categoryBackgrounds[name] || categoryBackgrounds["Tech"]
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 capitalize tracking-tight">
            {name} Events
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg font-medium">
            Check out what's happening in {name}.
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              image={event.image}
            />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No events found in this category.
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
