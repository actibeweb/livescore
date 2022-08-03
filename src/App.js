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
import TennisDetails from "./components/GameDetails/TennisDetails";
import Hockey from "./components/Home/Hockey";
import HockeyDetails from "./components/GameDetails/HockeyDetails";
import Baseball from "./components/Home/Baseball";
import BaseballDetails from "./components/GameDetails/BaseballDetails";
import Rugby from "./components/Home/Rugby";
import RugbyDetails from "./components/GameDetails/RugbyDetails";
import About from "./components/Common/About";
import Contact from "./components/Common/Contact";
import Article from "./Article/Article";
import ArticleDetail from "./Article/ArticleDetail";
import Terms from "./components/Common/Terms";
import Custom from "./components/GameDetails/Custom";
import MotoSports from "./components/Home/MotoSports";
import MmaFight from "./components/Home/MmaFight";
function App() {
  return (
    <>
      <div className="bg-n-black h-screen overflow-auto hide-scrollbar">
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soccer" element={<Home />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/hockey" element={<Hockey />} />
          <Route path="/baseball" element={<Baseball />} />
          <Route path="/rugby" element={<Rugby />} />
          <Route path="/motoSports" element={<MotoSports />} />
          <Route path="/mmaFight" element={<MmaFight />} />
          <Route path="/football/:league/:match/:id" element={<FootballDetails />} />
          <Route path="/cricket/:league/:match/:id" element={<CricketDetails />} />
          <Route path="/basketball/:league/:match/:id" element={<BasketballDetails />} />
          <Route path="/tennis/:league/:match/:id" element={<TennisDetails />} />    
          <Route path="/hockey/:league/:match/:id" element={<HockeyDetails />} />    
          <Route path="/baseball/:league/:match/:id" element={<BaseballDetails />} />    
          <Route path="/rugby/:league/:match/:id" element={<RugbyDetails />} />    
          <Route path="/about" element={<About />} />    
          <Route path="/contact" element={<Contact />} />    
          <Route path="/blog" element={<Article />} />    
          <Route path="/blog/:name/:id" element={<ArticleDetail />} />    
          <Route path="/terms" element={<Terms />} />    
          <Route path="/custom/:league/:match/:id" element={<Custom />} />    
        </Routes>
        <BottomNavbar />
      </div>
    </>
  );
}

export default App;
