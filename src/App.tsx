import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";


import About from "./pages/About";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}
