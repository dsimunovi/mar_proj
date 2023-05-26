import React, { useState, useEffect } from "react";
import "./Cars.css";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Tires from "./Tires";
import tiresActions from "../services/tires";
import rimsActions from "../services/rims";
import Rims from "./Rims";
import carsActions from "../services/cars";
import Button from "react-bootstrap/Button";
import korisnikAkcije from "../services/users";
import kupnjaAkcije from "../services/buy";

const Cars_admin = ({
  id,
  slika,
  marka,
  model,
  kilometri,
  godiste,
  vrstaMotora,
  snagaMotora,
  mjenjac,
  gume,
  boja,
  cijena,
  naplatci,
  prodano,
  brisanjeAuta,
}) => {
  const [korisnik, postaviKorisnika] = useState(null);
  const [user, setUser] = useState(null);
  const [startColor, setStartColor] = useState(boja);
  const [color, setColor] = useColor("hex", startColor);
  const [cars, postaviAute] = useState([]);
  const [checkGuma, setCheckGuma] = useState(false);
  const [checkNaplatak, setCheckNaplatak] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visibleGume, setVisibleGume] = useState(false);
  const [visibleRim, setVisibleRim] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [chosenTire, setChosenTire] = useState();
  const [chosenRim, setChosenRim] = useState();
  const [tires, setTires] = useState({
    slika: "/",
    marka: "/",
    tip: "/",
    cijena: "/",
  });
  const [rims, setRims] = useState({
    slika: "/",
    tip: "/",
    cijena: "/",
  });

  let ukupno = cijena + tires.cijena + rims.cijena;
  var ukupno_ispis = ukupno
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

  useEffect(() => {
    carsActions.dohvatiSve().then((res) => postaviAute(res.data));
  }, []);

  useEffect(() => {
    tiresActions.dohvatiJedneGume(gume).then((res) => {
      setTires(res.data);
      setVisibleGume(true);
    });
  }, []);

  useEffect(() => {
    rimsActions.dohvatiJedanNaplatak(naplatci).then((res) => {
      setRims(res.data);
      setVisibleRim(true);
    });
  }, []);

  return (
    <div id="main-car">
      <div className="row" id="car-card">
        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
          <div className="bg-image hover-zoom ripple rounded ripple-surface podaci">
            <img id="slika-auta" src={slika} className="w-100" />
            <a href="#!">
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                ></div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 podaci">
          <h3>{marka}</h3>
          <h5>{model}</h5>
          <div className="text-danger mb-1 me-2">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>

          <div className="info">
            <span>{kilometri} km</span>
            <span className="text-primary"> • </span>
            <span>{godiste}</span>
            <span className="text-primary"> • </span>
            <span>
              {vrstaMotora}
              <br />
            </span>
            <span className="text-primary"> • </span>
            <span>{snagaMotora}kW</span>
            <span className="text-primary"> • </span>
            <span>{mjenjac} mjenjač</span>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none  cijena">
          <div className="d-flex flex-row align-items-center mb-1 cijenaAuta">
            <label className="mb-1 me-1">{ukupno_ispis} €</label>{" "}
            {/*trenutna cijena */}
          </div>
          <div className="d-flex flex-column mt-4">
            <Button variant="danger" onClick={brisanjeAuta}>
              Obriši
            </Button>
          </div>
        </div>
        <div className="row-1"></div>
      </div>
    </div>
  );
};

export default Cars_admin;
