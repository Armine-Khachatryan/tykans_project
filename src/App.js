import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Services from "./app/pages/Services/Services";
import FAQ from "./app/pages/FAQ/FAQ";
import Careers from "./app/pages/Careers/Careers";
import LifeAtTykans from "./app/pages/LifeAtTykans/LifeAtTykans";
import TeamTestimonialsPage from "./app/pages/TeamTestimonialsPage/TeamTestimonialsPage";
import AdministrativePage from "./app/pages/AdministrativePage/AdministrativePage";
import AboutUs from "./app/pages/AboutUs/AboutUs";
import ContactUs from "./app/pages/ContactUs/ContactUs";
import './App.css';
import Home from "./app/pages/Home/Home";
import Success from "./app/pages/Success/Success";




function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={ <Home/>}/>
              {/*<Route exact path="/home" element={ <ServicesComponent/>}/>*/}
              <Route exact path="/services" element={ <Services/>}/>
              <Route exact path="/life-at-tykans"  element={ <LifeAtTykans/>}/>
              <Route exact path="/team-testimonials"  element={ <TeamTestimonialsPage/>}/>
              <Route exact path="/careers"  element={ <Careers/>}/>
              <Route exact path="/administrative"  element={ <AdministrativePage/>}/>
              <Route exact path="/faq"  element={ <FAQ/>}/>
              <Route exact path="/about-us"  element={ <AboutUs/>}/>
              <Route exact path="/contact-us"  element={ <ContactUs/>}/>
              <Route exact path="/success-stories" element={<Success/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
