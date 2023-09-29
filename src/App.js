import "./App.css";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import SignIn from "./pages/signin/signIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
