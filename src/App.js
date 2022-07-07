import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Home from "./components/Home/Football";
import TopNavbar from "./components/Navbar/TopNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNavbar from "./components/Navbar/BottomNavbar";
import FootballDetails from "./components/GameDetails/FootballDetails";
import Cricket from "./components/Home/Cricket";
function App() {
  return (
    <>
      <div className="bg-n-black h-screen overflow-auto hide-scrollbar">
        <TopNavbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/games/:id" element={<FootballDetails />} />
        </Routes>
        <BottomNavbar />
      </div>
    </>
  );
}

export default App;
