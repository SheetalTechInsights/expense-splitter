import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AddExpense = () => {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem("friends")) || [];
    setFriends(storedFriends);
  }, []);

  useEffect(() => {
    const storedExpense = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpense);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (!selectedFriend || !amount) return;
    const newExpense = {
      friend: selectedFriend,
      amount: parseFloat(amount),
      description,
      id: Date.now(),
    };
    setExpenses([...expenses, newExpense]);
    setAmount("");
    setDescription("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <div className="mt-10 max-w-2xl mx-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-xl text-white">
      <h1 className="text-3xl font-extrabold text-yellow-400 text-center mb-6">
        💸 Add Expense
      </h1>

    
      <div className="space-y-4 mb-8">
        <select
          value={selectedFriend}
          onChange={(e) => setSelectedFriend(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">Select friend</option>
          {friends.map((friend, index) => (
            <option key={index} value={friend}>
              {friend}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="text"
          placeholder="Enter description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={addExpense}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-md transition"
        >
          + Add Expense
        </button>
      </div>

      
      {expenses.length === 0 ? (
        <p className="text-gray-400 text-center">No expenses added yet...</p>
      ) : (
        <ul className="space-y-3">
          {expenses.map((exp) => (
            <li
              key={exp.id}
              className="flex justify-between items-center px-5 py-3 bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <span className="text-lg font-medium">
                {exp.friend} → ₹{exp.amount}{" "}
                {exp.description && `(${exp.description})`}
              </span>
              <button
                onClick={() => deleteExpense(exp.id)}
                className="text-red-400 hover:text-red-600 transition"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}

       <Link
        to="/dashboard"
        className="block text-center bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
      >
        🚀 Go to Dashboard
      </Link>
    </div>
  );
};

export default AddExpense;
