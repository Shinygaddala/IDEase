import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Student from "./pages/Student";
import Permission from "./pages/Permission";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/permission" element={<Permission />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;