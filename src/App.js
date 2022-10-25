import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./app/pages/Home/Home";
import Careers from "./app/pages/Careers/Careers";
import LifeAtTykans from "./app/pages/LifeAtTykans/LifeAtTykans";
import TeamTestimonialsPage from "./app/pages/TeamTestimonialsPage/TeamTestimonialsPage";
import './App.css';




function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={ <Home/>}/>
              <Route exact path="/home" element={ <Home/>}/>
              <Route exact path="/life-at-tykans"  element={ <LifeAtTykans/>}/>
              <Route exact path="/team-testimonials"  element={ <TeamTestimonialsPage/>}/>
              <Route exact path="/careers"  element={ <Careers/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
