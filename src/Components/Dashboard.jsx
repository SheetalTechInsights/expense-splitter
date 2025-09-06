import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const storedExpense = JSON.parse(localStorage.getItem("expenses")) || [];
    const storedFriends = JSON.parse(localStorage.getItem("friends")) || [];
    setExpenses(storedExpense);
    setFriends(storedFriends);
  }, []);

  const calculateBalances = () => {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const share = friends.length > 0 ? total / friends.length : 0;

    const balances = {};
    friends.forEach((friend) => (balances[friend] = 0));
    expenses.forEach((exp) => {
      balances[exp.friend] += exp.amount;
    });

    const result = friends.map((friend) => ({
      name: friend,
      balance: (balances[friend] || 0) - share,
    }));

    return { total, share, result, balances };
  };

  const { total, share, result, balances } = calculateBalances();

  const contributions = friends.map((friend) => ({
    name: friend,
    paid: balances[friend] || 0,
  }));

  const COLORS = ["#4F46E5", "#06B6D4", "#FACC15", "#F97316", "#10B981"];

  return (
    <div className="mt-10 max-w-6xl mx-auto px-6 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl text-white">
      <h1 className="text-5xl font-extrabold text-green-400 mb-12 text-center drop-shadow-lg">
        📊 Expense Dashboard
      </h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold text-white">Total Expenses</h2>
          <p className="text-4xl font-bold mt-4">₹{total}</p>
        </div>

        <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold text-white">Share Per Person</h2>
          <p className="text-4xl font-bold mt-4">₹{share.toFixed(2)}</p>
        </div>
      </div>

      {/* Balance Summary */}
      <h2 className="text-3xl font-semibold text-green-300 mb-6">
        💰 Balance Summary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {result.map((r, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-6 rounded-2xl shadow-lg border-l-4 transition transform hover:scale-105 ${
              r.balance < 0
                ? "bg-red-500/20 border-red-400"
                : "bg-green-500/20 border-green-400"
            }`}
          >
            <span className="font-medium text-lg">{r.name}</span>
            <span
              className={`font-bold text-lg ${
                r.balance < 0 ? "text-red-300" : "text-green-300"
              }`}
            >
              {r.balance < 0
                ? `Owes ₹${Math.abs(r.balance).toFixed(2)}`
                : `Gets ₹${r.balance.toFixed(2)}`}
            </span>
          </div>
        ))}
      </div>

      {/* Expense Contributions Chart */}
      <h2 className="text-3xl font-semibold text-green-300 mt-12 mb-6 text-center">
        📈 Expense Contributions
      </h2>
      <div className="h-96 bg-gray-800/70 shadow-2xl rounded-2xl p-6">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={contributions}
              dataKey="paid"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={60}
              fill="#8884d8"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              animationDuration={800}
            >
              {contributions.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                borderRadius: "10px",
                border: "none",
                color: "#fff",
              }}
            />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ color: "#fff", fontSize: "14px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
