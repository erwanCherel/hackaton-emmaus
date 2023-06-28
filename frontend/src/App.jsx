import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Stack } from "@chakra-ui/react";
import AddPhones from "./pages/AddPhone";
import DatabasePhones from "./pages/DatabasePhones";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Stack justify="space-between" height="100vh">
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
