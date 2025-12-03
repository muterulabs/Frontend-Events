import { LuX } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function CheckoutModal({ isOpen, onClose, total }) {
  if (!isOpen) return null;

  const navigate = useNavigate();
  const handlePayment = () => {
    //handle payment 
    onClose();
    navigate('/PaymentSuccessPage');
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-[#1A1A1A] w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold">Checkout</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition"
          >
            <LuX className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card</label>
              <input 
                type="text" 
                placeholder="4242 4242 4242"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CVC</label>
              <input 
                type="text" 
                placeholder="123"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500">Total</span>
            <span className="text-xl font-bold">${total?.toFixed(2)}</span>
          </div>
          <button onClick={handlePayment} className="w-full bg-[#0066FF] hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition shadow-lg shadow-blue-500/25">
            Pay & Get Ticket
          </button>
        </div>

      </div>
    </div>
  );
}

export default CheckoutModal;