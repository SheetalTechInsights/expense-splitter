import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icons (you already use lucide-react in your project)

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
            ✦ Expense Splitter
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-yellow-400 transition duration-300">
              Home
            </Link>
            <Link to="/friends" className="hover:text-yellow-400 transition duration-300">
              Friends
            </Link>
            <Link to="/addExpense" className="hover:text-yellow-400 transition duration-300">
              Add Expense
            </Link>
            <Link to="/dashboard" className="hover:text-yellow-400 transition duration-300">
              Dashboard
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (dropdown) */}
      {isOpen && (
        <nav className="md:hidden bg-gray-900 px-4 pb-4 space-y-2 text-sm font-medium">
          <Link
            to="/"
            className="block hover:text-yellow-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/friends"
            className="block hover:text-yellow-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Friends
          </Link>
          <Link
            to="/addExpense"
            className="block hover:text-yellow-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Add Expense
          </Link>
          <Link
            to="/dashboard"
            className="block hover:text-yellow-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
