import { useParams } from "react-router-dom";
import { events } from "../data/events";
import { LuCalendar, LuMapPin, LuMinus, LuPlus } from "react-icons/lu";
import { useState } from "react";
import CheckoutModal from "../components/CheckoutModal";

function EventDetailsPage() {
  const { id } = useParams();
  // convert the id from string to int
  const event = events.find((e) => e.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const price = 39;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  const total = price * quantity;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Grid Layout: 1 column on mobile, 2 columns on desktop */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] md:aspect-auto">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-[32px] md:text-[40px] tracking-tight font-bold text-gray-900 dark:text-white leading-tight">
            {event.title}
          </h1>

          <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <LuCalendar className="w-5 h-5 text-gray-400" />
              <span className="text-lg">{event.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <LuMapPin className="w-5 h-5 text-gray-400" />
              <span className="text-lg">{event.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold text-xs border border-gray-400 rounded-sm">
                $
              </span>
              <span className="text-lg">${price.toFixed(2)}</span>
            </div>
          </div>

          {/* Booking Card */}
          <div className="mt-4 bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl shadow-gray-200/50 dark:shadow-none">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  Qty
                </span>
                <div className="flex items-center gap-1 bg-gray-100 dark:bg-white/10 rounded-xl p-1">
                  <button
                    onClick={handleDecrease}
                    className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded-lg transition disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <LuMinus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrease}
                    className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded-lg transition"
                  >
                    <LuPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#0066FF] hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-500/25"
            >
              Buy Ticket
            </button>
          </div>

          {/* Description */}
          <div className="mt-2 pt-6 border-t border-gray-100 dark:border-white/10">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Immersive installations and curated works from emerging artists.
              Experience minimal forms and bold light.
            </p>
          </div>
        </div>
      </div>
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} total={total}
      />
    </div>
  );
}

export default EventDetailsPage;
