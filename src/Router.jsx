import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sucesso from "./Pages/Sucesso/Sucesso";
import Email from "./api/index";
import Cadastro from "./Pages/Cadastro/Cadastro";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sucesso" element={<Sucesso />} />
      <Route path="/email" element={<Email />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}
