import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
   <div className="h-screen flex flex-col justify-center items-center 
  bg-gradient-to-b from-gray-900 via-black to-gray-800 
  text-center text-white relative overflow-hidden">
  
          
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Welcome to Expense Tracker
      </h1>
      <p className="text-lg md:text-xl mb-10 text-center max-w-lg">
       Stop fighting over “who paid what”!  
        Manage shared expenses, split bills with friends, and track balances effortlessly.  
      </p>
      <Link
        to="/home"
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
      >
        🚀 Start Now
      </Link>
    </div>
  );
};

export default LandingPage;
