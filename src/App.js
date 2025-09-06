
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Header  from "./Components/Header";
import  Friends  from "./Components/Friends";
import  AddExpense  from "./Components/AddExpense";
import Dashboard from "./Components/Dashboard";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer"; 
import LandingPage from "./Components/LandingPage";
// import { useState } from "react";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        
          <Route path="/friends" element={<Friends />} />
          <Route path="/addExpense" element={<AddExpense />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
       <Footer />
    </BrowserRouter>
    
  );
}

export default App;
