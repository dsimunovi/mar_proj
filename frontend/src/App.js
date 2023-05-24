import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Prijava from "./components/Login";
import Registracija from "./components/Registration";
import PonudaAuta from "./pages/Cars";
import Footer from "./components/Footer";
import SviAuti from "./pages/Cars-admin";
import MojeKupnje from "./pages/mojeKupnje";
import SveKupnje from "./pages/sveKupnje";
import AddCar from "./components/AddCar";
import AddTireRim from "./components/AddTireRim";

const App = () => {
  const [korisnik, postaviKorisnika] = useState(null);
  const [visible, setVisible] = useState(false);
  const logout = () => {
    if (korisnik !== null) {
      korisnik.token = null;
      window.localStorage.clear();
    }
  };

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
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
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
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-nav" id="navbarCollapse">
          {korisnik === null ? (
            ""
          ) : (
            <div className="navbar-nav">
              <a
                href="/home"
                className="nav-item nav-link active"
                onClick={() => setVisible(false)}
              >
                Početna
              </a>
              {korisnik.admin === false ? (
                <a href="/ponuda" className="nav-item nav-link">
                  Ponuda vozila
                </a>
              ) : (
                <a href="/sviAuti" className="nav-item nav-link">
                  Auta u prodaji
                </a>
              )}
              {korisnik.admin === false ? (
                <a href="/mojaVozila" className="nav-item nav-link">
                  Kupljena vozila
                </a>
              ) : (
                <a href="/sveKupnje" className="nav-item nav-link">
                  Sve kupovine
                </a>
              )}
              {korisnik.admin === true ? (
                <div>
                  <a href="/dodajAuto" className="nav-item nav-link">
                    Dodaj auto
                  </a>
                </div>
              ) : (
                ""
              )}
              {korisnik.admin === true ? (
                <div>
                  <a href="/dodajGN" className="nav-item nav-link">
                    Dodaj gumu/naplatak
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          )}

          {korisnik === null ? (
            ""
          ) : (
            <div className="navbar-nav ms-auto">
              <div className="nav-item ime">{korisnik.ime}</div>
              <a href="/" className="nav-item nav-link " onClick={logout}>
                Logout
              </a>
            </div>
          )}
        </div>
      </nav>
      <Routes>
        <Route
          exact
          path="/"
          element={korisnik === null ? <Prijava /> : <Layout />}
        ></Route>
        <Route path="/sign-up" element={<Registracija />}></Route>
        <Route path="/home" element={<Layout />}></Route>
        <Route path="/ponuda" element={<PonudaAuta />}></Route>
        <Route path="/mojaVozila" element={<MojeKupnje />}></Route>
        <Route path="/sviAuti" element={<SviAuti />}></Route>
        <Route path="/sveKupnje" element={<SveKupnje />}></Route>
        <Route path="/dodajAuto" element={<AddCar />}></Route>
        <Route path="/dodajGN" element={<AddTireRim />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
