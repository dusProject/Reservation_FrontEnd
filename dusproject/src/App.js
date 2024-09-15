import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopBar from "./components/TopBar";
import MyReservationPage from "./pages/MyReservaionPage";
import ReservationPage from "./pages/ReservationPage";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-reservation" element={<MyReservationPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;