import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Home from "./components/Home/Football";
import TopNavbar from "./components/Navbar/TopNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNavbar from "./components/Navbar/BottomNavbar";
import FootballDetails from "./components/GameDetails/FootballDetails";
import Cricket from "./components/Home/Cricket";
import CricketDetails from "./components/GameDetails/CricketDetails";
import Basketball from "./components/Home/BasketBall";
import BasketballDetails from "./components/GameDetails/BasketballDetails";
import Tennis from "./components/Home/Tennis";
function App() {
  return (
    <>
      <div className="bg-n-black h-screen overflow-auto hide-scrollbar">
        <TopNavbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/football/:id" element={<FootballDetails />} />
          <Route path="/cricket/:id" element={<CricketDetails />} />
          <Route path="/basketball/:id" element={<BasketballDetails />} />
          
        </Routes>
        <BottomNavbar />
      </div>
    </>
  );
}

export default App;
