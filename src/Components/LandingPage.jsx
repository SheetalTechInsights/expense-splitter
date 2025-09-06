import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center 
      bg-gradient-to-b from-gray-900 via-black to-gray-800 text-center text-white overflow-hidden px-4">

      {/* Background blurred circles */}
      <div className="absolute top-10 left-1/4 w-48 h-48 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse hidden sm:block"></div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 px-2">
        Welcome to Expense Tracker
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-md sm:max-w-lg px-2">
        Stop fighting over “who paid what”! Manage shared expenses, split bills with friends, and track balances effortlessly.
      </p>

      {/* Start Now Button */}
      <Link
        to="/home"
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition text-sm sm:text-base"
      >
        🚀 Start Now
      </Link>
    </div>
  );
};

export default LandingPage;
