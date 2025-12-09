import { LuCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

function PaymentSuccessPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 bg-[#0066FF] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
        <LuCheck className="w-12 h-12 text-white" />
      </div>
      
      <h1 className="text-3xl font-bold mb-2">Payment Successful</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        Your ticket is confirmed. A receipt and QR pass have been sent to your email.
      </p>

      <div className="flex gap-4">
        <Link to="/" className="px-6 py-3 bg-gray-100 dark:bg-white/10 rounded-xl font-medium hover:bg-gray-200 transition">
          Back to Discover
        </Link>
        <button className="px-6 py-3 bg-[#0066FF] text-white rounded-xl font-medium hover:bg-blue-600 transition shadow-lg shadow-blue-500/25">
          View Mobile Pass
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;