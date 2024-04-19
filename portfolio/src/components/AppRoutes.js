import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}
