import { Routes, Route } from "react-router-dom";

import { Stack } from "@chakra-ui/react";
import AddPhones from "./pages/AddPhone";
import DatabasePhones from "./pages/DatabasePhones";
import { UserContextProvider } from "./contexts/UserContext";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Authentication from "./pages/Authentication";
import Faq from "./pages/Faq";
import PrivateRoutes from "./components/PrivateRoutes";
import RetailPhone from "./pages/RetailPhone";

function App() {
  return (
    <UserContextProvider>
      <Stack id="app">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Authentication />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/add-phone" element={<AddPhones />} />
            <Route path="/database-phones" element={<DatabasePhones />} />
          </Route>
          <Route path="/retail-phone/:id" element={<RetailPhone />} />
          {/* <Route path="/*" element={<Home />} /> */}
        </Routes>
        <Footer />
      </Stack>
    </UserContextProvider>
  );
}

export default App;
