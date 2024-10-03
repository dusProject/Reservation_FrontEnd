import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyReservationPage from "./pages/MyReservaionPage";
import ReservationPage from "./pages/ReservationPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-reservation" element={<MyReservationPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;