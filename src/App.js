import "./App.css";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
