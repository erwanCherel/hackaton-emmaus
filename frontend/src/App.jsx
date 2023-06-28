import { Routes, Route } from "react-router-dom";

import { Stack } from "@chakra-ui/react";
import AddPhones from "./pages/AddPhone";
import DatabasePhones from "./pages/DatabasePhones";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Stack id="app">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add-phone" element={<AddPhones />} />
        <Route path="/database-phones" element={<DatabasePhones />} />
      </Routes>
      <Footer />
    </Stack>
  );
}

export default App;
