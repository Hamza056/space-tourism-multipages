import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Home from "./pages/Home/Home";
import Navbar from "./Navbar/Navbar";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
