import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center text-center px-6">
     
      
       <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse"></div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg">
        Welcome Back
      </h1>

      <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
        Manage friends, split expenses, and track balances with ease — all in a
        smart, elegant dashboard. Simplify group expenses with style.
      </p>

     
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="/friends"
          className="bg-white/5 backdrop-blur-md border border-gray-700 px-6 py-5 rounded-xl shadow-md hover:shadow-lg hover:border-yellow-400 transition transform hover:-translate-y-1 w-56"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-1">👥 Friends</h3>
          <p className="text-gray-400 text-sm">Add and manage your group</p>
        </a>

        <a
          href="/addExpense"
          className="bg-white/5 backdrop-blur-md border border-gray-700 px-6 py-5 rounded-xl shadow-md hover:shadow-lg hover:border-green-400 transition transform hover:-translate-y-1 w-56"
        >
          <h3 className="text-lg font-semibold text-green-400 mb-1">➕ Add Expense</h3>
          <p className="text-gray-400 text-sm">Record and split expenses</p>
        </a>

        <a
          href="/dashboard"
          className="bg-white/5 backdrop-blur-md border border-gray-700 px-6 py-5 rounded-xl shadow-md hover:shadow-lg hover:border-purple-400 transition transform hover:-translate-y-1 w-56"
        >
          <h3 className="text-lg font-semibold text-purple-400 mb-1">📊 Dashboard</h3>
          <p className="text-gray-400 text-sm">View balances & insights</p>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
