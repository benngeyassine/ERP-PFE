import React from "react";
import { Container } from "@material-ui/core";

import Auth from "./components/auth/Auth";
import Home from "./components/Home/Home";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  let token = localStorage.getItem("token");
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth />} />
          {token && <Route path="/home" element={<Home />} />}
          <Route path="/" element={<Navigate replace to="/home" />} />
          {!token && (
            <Route path="/home" element={<Navigate replace to="/login" />} />
          )}
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
