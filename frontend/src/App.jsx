import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import AddPhones from "./pages/AddPhone";
import DatabasePhones from "./pages/DatabasePhones";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add-phone" element={<AddPhones />} />
        <Route path="/database-phones" element={<DatabasePhones />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
