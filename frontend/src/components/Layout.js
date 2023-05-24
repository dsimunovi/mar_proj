import React, { useState, useEffect } from "react";
import "../App.css";
import Slideshow from "./Slider";
import korisniciAkcije from "../services/users";
import kupnjaAkcija from "../services/buy";

const Layout = (props) => {
  const [korisnik, postaviKorisnika] = useState(null);
  const [kor, postaviKor] = useState(null);

  useEffect(() => {
    const logiraniKorisnikJSON = window.localStorage.getItem(
      "prijavljeniKorisnik"
    );
    if (logiraniKorisnikJSON) {
      const korisnik = JSON.parse(logiraniKorisnikJSON);
      postaviKorisnika(korisnik);
      kupnjaAkcija.postaviToken(korisnik.token);
      korisniciAkcije
        .dohvatiJednogKorisnika(korisnik.username)
        .then((res) => postaviKor(res.data));
    }
  }, []);

  return (
    <div>
      <Slideshow />
    </div>
  );
};

export default Layout;
