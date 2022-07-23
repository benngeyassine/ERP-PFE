import React from "react";
import { Container } from "@material-ui/core";

import Auth from "./components/auth/Auth";
import Home from "./components/home/Home";
import HomeLayout from "./components/home/HomeLayout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/theme";
import Costumers from "./components/customer";
import Products from "./components/product";
import Employers from "./components/employer";
import Purchase from "./components/purchase/index";
import Sales from "./components/sales/index";
import Projects from "./components/projects/index";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  let token = localStorage.getItem("token");
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <BrowserRouter>
          {!token ? (
            <Routes>
              <Route path="/login" element={<Auth />} />
              <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
          ) : (
            <HomeLayout>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/customers" element={<Costumers />} />
                <Route path="/products" element={<Products />} />
                <Route path="/employers" element={<Employers />} />
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route
                  path="/login"
                  element={<Navigate replace to="/home" />}
                />
              </Routes>
            </HomeLayout>
          )}
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
