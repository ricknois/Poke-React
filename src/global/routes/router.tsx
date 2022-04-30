import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import PokeDetails from "../../Pages/PokeDetails/PokeDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PokeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
