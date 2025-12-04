import { useParams } from 'react-router-dom';
import { events } from '../data/events';
import EventCard from '../components/EventCard';

function CategoryPage() {
  const { name } = useParams();
  
  // Filter events (case-insensitive)
  const filteredEvents = events.filter(
    (event) => event.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">{name} Events</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Check out what's happening in {name}.
        </p>
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