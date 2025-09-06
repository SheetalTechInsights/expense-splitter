import React, { useState, useEffect } from "react";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState("");

  useEffect(() => {
    try {
      const data = localStorage.getItem("friends");
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) {
          setFriends(parsed);
        }
      }
    } catch (err) {
      console.error("Invalid JSON in localStorage:", err);
      setFriends([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  const addFriend = () => {
    if (newFriend.trim() === "") return;
    setFriends([...friends, newFriend]);
    setNewFriend("");
  };

  const deleteFriend = (name) => {
    setFriends(friends.filter((friend) => friend !== name));
  };

  return (
    <div className="mt-10 max-w-2xl mx-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-xl text-white">
      <h1 className="text-3xl font-extrabold text-yellow-400 text-center mb-6">
        👥 Friends List
      </h1>

      
      <div className="flex gap-3 mb-8">
        <input
          type="text"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
          placeholder="Enter friend's name"
          className="flex-1 px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={addFriend}
          className="px-6 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-semibold shadow-md transition"
        >
          + Add
        </button>
      </div>

      
      {friends.length === 0 ? (
        <p className="text-gray-400 text-center">No friends added yet...</p>
      ) : (
        <ul className="space-y-3">
          {friends.map((friend, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-5 py-3 bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <span className="text-lg font-medium">{friend}</span>
              <button
                onClick={() => deleteFriend(friend)}
                className="text-red-400 hover:text-red-600 transition"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}

       {friends.length > 0 && (
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="/addExpense"
            className="bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            ➕ Add Expense
          </a>
          <a
            href="/dashboard"
            className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            📊 View Dashboard
          </a>
        </div>
      )}
    </div>
  );
};

export default Friends;
