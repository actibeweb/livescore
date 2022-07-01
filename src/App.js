import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Home from "./components/Home";
import TopNavbar from "./components/Navbar/TopNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-n-black h-screen overflow-auto hide-scrollbar">
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
