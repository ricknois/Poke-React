import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import PokeDetails from "../../pages/pokeDetails/pokeDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
