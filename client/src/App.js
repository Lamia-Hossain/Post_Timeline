import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./landing/LandingPage";
import Timeline from "./timeline/Timeline";

function App() {
  return (
    <div className="bg-[#eef0f1] dark:bg-[#333334] min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </div>
  );
}

export default App;
