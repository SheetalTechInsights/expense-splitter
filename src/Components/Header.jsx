import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-4 px-6 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
        ✦ Expense Splitter
      </h1>

      {/* Navigation */}
      <div className="space-x-6 text-sm font-medium">
        <Link
          to="/"
          className="hover:text-yellow-400 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/friends"
          className="hover:text-yellow-400 transition duration-300"
        >
          Friends
        </Link>
        <Link
          to="/addExpense"
          className="hover:text-yellow-400 transition duration-300"
        >
          Add Expense
        </Link>
        <Link
          to="/dashboard"
          className="hover:text-yellow-400 transition duration-300"
        >
          Dashboard
        </Link>
      </div>
    </header>
  );
}

export default Header;
