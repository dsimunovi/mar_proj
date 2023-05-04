import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Prijava from "./components/Login";
import Registracija from "./components/Registration";
import PonudaAuta from "./pages/Cars";
import Footer from "./components/Footer";

const App = () => {
  const [korisnik, postaviKorisnika] = useState(null)
  const [visible, setVisible] = useState(false);
  const logout = () => {
    window.localStorage.removeItem('prijavljeniKorisnik')
  }

  useEffect(() => {
    const logiraniKorisnikJSON = window.localStorage.getItem(
      "prijavljeniKorisnik"
    );
    if (logiraniKorisnikJSON) {
      const korisnik = JSON.parse(logiraniKorisnikJSON);
      postaviKorisnika(korisnik);
    }
  }, []);

  return (

    
    <Router> 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a href="/home" className="navbar-brand">
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/audi-8-332760.png"
                  height="80"
                />
                <label>AUTO SALON ZRILIĆ</label>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                  <a
                    href="/home"
                    className="nav-item nav-link active"
                    onClick={() => setVisible(false)}
                  >
                    Početna
                  </a>
                  <a
                    href="/ponuda"
                    className="nav-item nav-link"
                  >
                    Ponuda vozila
                  </a>
                  <a href="/mojaVozila" className="nav-item nav-link">
                    Kupljena vozila
                  </a>
                </div>
                
                
                {korisnik===null?"":
                
                <div className="navbar-nav ms-auto">
                
                  <a
                    href="/sign-in"
                    className="nav-item nav-link"
                    onClick={logout}
                  >
                    Logout
                  </a>
                </div>}
              </div>
            </div>
          </nav>
      <Routes>
     
        <Route exact path="/sign-in" element={<Prijava />}></Route>
        <Route path="/sign-up" element={<Registracija />}></Route>
        <Route path="/home" element={korisnik!==null ?<Layout />:<Prijava/>}></Route>
        <Route path="/ponuda" element={korisnik!==null ?<PonudaAuta/>:<Prijava/>}></Route>
        
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
