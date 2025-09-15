import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Coursework from "./pages/Coursework";

function App() {
  return (
    <div className="font-display text-black bg-stone-50 ">
      <BrowserRouter>
        <div className="min-h-screen">
          <NavBar />
          <main className="px-4 md:px-40">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/coursework" element={<Coursework />} />
            </Routes>
          </main>
        </div>
        <footer className="h-10 text-center text-sm mt-10">
          <p>© 2025 Harut Sargsyan</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
