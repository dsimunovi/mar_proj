import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Prijava from "./components/Login";
import Registracija from "./components/Registration";
import PonudaAuta from "./pages/Cars";
import Footer from "./components/Footer";
import SviAuti from "./pages/Cars-admin";

const App = () => {
  const [korisnik, postaviKorisnika] = useState(null)
  const [visible, setVisible] = useState(false);
  const logout = () => { 
    
    if(korisnik!==null){
     
      korisnik.token=null
      window.localStorage.clear()
    }
    

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
            <div className="navigacija">
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
              <div className="collapse navbar-collapse flex-nav" id="navbarCollapse">
                {korisnik===null?"":<div className="navbar-nav">
                  <a
                    href="/home"
                    className="nav-item nav-link active"
                    onClick={() => setVisible(false)}
                  >
                    Početna
                  </a>
                  {korisnik.admin===false?<a
                    href="/ponuda"
                    className="nav-item nav-link"
                  >
                    Ponuda vozila
                  </a>:<a
                    href="/sviAuti"
                    className="nav-item nav-link"
                  >
                    Neprodana auta
                  </a>}
                  <a href="/mojaVozila" className="nav-item nav-link">
                    Kupljena vozila
                  </a>
                  {korisnik.admin===true?
                <div>
                  <a href="/novaAuta" className="nav-item nav-link">
                    Dodaj auto
                  </a>
                </div>:""}
                </div>
                }
                
                
                {korisnik===null?"":
        
                <div className="navbar-nav ms-auto">
                  <div className="nav-item ime">
                    {korisnik.ime}
                  </div>
                  <a
                    href="/"
                    className="nav-item nav-link "
                    onClick={logout}
                  >
                    Logout
                  </a>
                  
                </div>}
              </div>
            </div>
          </nav>
      <Routes>
     
        <Route exact path="/" element={korisnik===null?<Prijava />:<Layout/>}></Route>
        <Route path="/sign-up" element={<Registracija />}></Route>
        <Route path="/home" element={<Layout />}></Route>
        <Route path="/ponuda" element={<PonudaAuta/>}></Route>
        <Route path="/sviAuti" element={<SviAuti/>}></Route>
        
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
