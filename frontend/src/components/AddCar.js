import React, { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "./AddCar.css";
import gumeAkcija from "../services/tires";
import naplatciAkcija from "../services/rims";
import autiAkcija from "../services/cars";

const AddCar = () => {
  const [color, setColor] = useColor("hex", "#121212");
  const [slika, postaviSliku] = useState("");
  const [marka, postaviMarku] = useState("");
  const [model, postaviModel] = useState("");
  const [snagaMotora, postaviSnaguMotora] = useState("");
  const [godiste, postaviGodinu] = useState("");
  const [kilometri, postaviKilometre] = useState("");
  const [cijena, postaviCijenu] = useState("");
  const [gumaAuta, postaviGumuAuta] = useState("");
  const [naplatakAuta, postaviNaplatakAuta] = useState("");
  const [vrstaMotora, postaviVrstuMotra] = useState("");
  const [mjenjac, postaviMjenjac] = useState("");
  const [guma, postaviGumu] = useState("");
  const [gumaMarka, postaviMarkuGume] = useState("");
  const [gumaTip, postaviTipGume] = useState("");
  const [gumaCijena, postaviCijenuGume] = useState("");
  const [naplatak, postaviNaplatak] = useState("");
  const [naplatakTip, postaviTipNaplatka] = useState("");
  const [naplatakCijena, postaviCijenuNaplatka] = useState("");
  const [disabledGume,setDisabledGume]=useState(false)
  const [disabledNaplatci, setDisabledNaplatci]=useState(false)

  const dodajGumu = (e) => {
    e.preventDefault();
    try {
      if (
        guma === "" ||
        gumaTip === "" ||
        gumaMarka === "" ||
        gumaCijena === "" ||
        gumaTip === "Odaberi tip gume"
      ) {
        alert("Niste popunili sve podatke!");
        return;
      }
      const novaGuma = {
        slika: guma,
        tip: gumaTip,
        marka: gumaMarka,
        cijena: gumaCijena,
      };
      gumeAkcija.stvori(novaGuma).then((res) => {
        postaviGumuAuta(res.data.id);
      });
      postaviCijenuGume("");
      postaviGumu("");
      postaviMarkuGume("");
      postaviTipGume("");
      alert("Uspješno se spremili gumu!");
      setDisabledGume(true)
    } catch (exception) {
      alert("Dogodila se greška!");
      postaviCijenuGume("");
      postaviGumu("");
      postaviMarkuGume("");
      postaviTipGume("");
    }
  };
  const dodajNaplatak = (e) => {
    e.preventDefault();

    try {
      if (
        naplatak === "" ||
        naplatakTip === "" ||
        naplatakCijena === "" ||
        naplatakTip === "Odaberi tip naplatka"
      ) {
        alert("Niste popunili sve podatke!");
        return;
      }
      const noviNaplatak = {
        slika: naplatak,
        tip: naplatakTip,
        cijena: naplatakCijena,
      };
      naplatciAkcija.stvori(noviNaplatak).then((res) => {
        postaviNaplatakAuta(res.data.id);
      });
      postaviNaplatak("");
      postaviTipNaplatka("");
      postaviCijenuNaplatka("");
      alert("Uspješno ste spremili naplatak!");
      setDisabledNaplatci(true)
    } catch (exception) {
      alert("Dogodila se greška!");
      postaviNaplatak("");
      postaviTipNaplatka("");
      postaviCijenuNaplatka("");
    }
  };

  const dodajAuto = (e) => {
    e.preventDefault();
    try {
      if (
        slika === "" ||
        marka === "" ||
        model === "" ||
        snagaMotora === "" ||
        godiste === "" ||
        kilometri === "" ||
        cijena === "" ||
        vrstaMotora === "" ||
        mjenjac === "" ||
        gumaAuta === "" ||
        naplatakAuta === "" ||
        vrstaMotora === "Odaberi vrstu motora" ||
        mjenjac === "Odaberi vrstu mjenjača"
      ) {
        alert("Niste popunili sve podatke!");
        return;
      }
      const novoAuto = {
        slika: slika,
        marka: marka,
        model: model,
        snagaMotora: snagaMotora,
        godiste: godiste,
        kilometri: kilometri,
        cijena: cijena,
        vrstaMotora: vrstaMotora,
        mjenjac: mjenjac,
        gume: gumaAuta,
        naplatci: naplatakAuta,
        boja: color.hex,
      };
      autiAkcija.stvori(novoAuto);
      postaviSliku("");
      postaviMarku("");
      postaviModel("");
      postaviKilometre("");
      postaviMjenjac("");
      postaviGodinu("");
      postaviSnaguMotora("");
      postaviVrstuMotra("");
      postaviCijenu("");
      postaviGumuAuta("");
      postaviNaplatakAuta("");
      alert("Uspješno ste dodali auto!");
      window.location.reload(true);
    } catch (exception) {
      alert("Dogodila se greška!");
      postaviSliku("");
      postaviMarku("");
      postaviModel("");
      postaviKilometre("");
      postaviMjenjac("");
      postaviGodinu("");
      postaviSnaguMotora("");
      postaviVrstuMotra("");
      postaviCijenu("");
      postaviGumuAuta("");
      postaviNaplatakAuta("");
    }
  };
  return (
    <div className="dodavanje">
      <div className="stupac">
        <label>
          URL slike auta:
          <input onChange={(e) => postaviSliku(e.target.value)}></input>
        </label>
        <label>
          Marka auta:{" "}
          <input onChange={(e) => postaviMarku(e.target.value)}></input>
        </label>
        <label>
          Model auta:
          <input onChange={(e) => postaviModel(e.target.value)}></input>
        </label>
        <label>
          Snaga motora u kW:
          <input onChange={(e) => postaviSnaguMotora(e.target.value)}></input>
        </label>
        <label>
          Godište auta:{" "}
          <input onChange={(e) => postaviGodinu(e.target.value)}></input>
        </label>
        <label>
          Prijeđena kilometraža auta:{" "}
          <input onChange={(e) => postaviKilometre(e.target.value)}></input>
        </label>
        <label>
          Cijena auta:{" "}
          <input onChange={(e) => postaviCijenu(e.target.value)}></input>
        </label>
        <label>
          Gume auta: <span>{gumaAuta}</span>
        </label>
        <label>
          Naplatci auta: <span>{naplatakAuta}</span>
        </label>
        <ColorPicker
          width={300}
          height={250}
          color={color}
          onChange={setColor}
          hideHSV
          hideRGB
          dark
        />
        <select
          className="razmak"
          onChange={(e) => postaviVrstuMotra(e.target.value)}
        >
          <option>Odaberi vrstu motora</option>
          <option>Benzin</option>
          <option>Dizel</option>
        </select>
        <select
          className="razmak"
          onChange={(e) => postaviMjenjac(e.target.value)}
        >
          <option>Odaberi vrstu mjenjača</option>
          <option>Mehanički</option>
          <option>Automatski</option>
        </select>
        <button id="dodaj" onClick={dodajAuto}>
          Dodaj auto
        </button>
      </div>
      <div className="stupac">
        <h3>Gume na autu</h3>
        <label>
          URL slike guma:{" "}
          <input onChange={(e) => postaviGumu(e.target.value)}></input>
        </label>
        <label>
          Marka gume:{" "}
          <input onChange={(e) => postaviMarkuGume(e.target.value)}></input>
        </label>
        <label>
          Tip gume:{" "}
          <select onChange={(e) => postaviTipGume(e.target.value)}>
            <option>Odaberi tip gume</option>
            <option>Zimske</option>
            <option>Ljetne</option>
            <option>Cjelogodišnje</option>
          </select>
        </label>
        <label>
          Cijena gume:{" "}
          <input onChange={(e) => postaviCijenuGume(e.target.value)}></input>
        </label>
        <button onClick={dodajGumu} disabled={disabledGume}>Spremi gume</button>
      </div>
      <div className="stupac">
        <h3>Naplatci na autu</h3>
        <label>
          URL slike naplataka:{" "}
          <input onChange={(e) => postaviNaplatak(e.target.value)}></input>
        </label>
        <label>
          Tip naplatka:{" "}
          <select onChange={(e) => postaviTipNaplatka(e.target.value)}>
            <option>Odaberi tip naplatka</option>
            <option>Čelični</option>
            <option>Aluminijski</option>
          </select>
        </label>
        <label>
          Cijena naplataka:{" "}
          <input
            onChange={(e) => postaviCijenuNaplatka(e.target.value)}
          ></input>
        </label>
        <button onClick={dodajNaplatak} disabled={disabledNaplatci}>Spremi naplatke</button>
      </div>
    </div>
  );
};
export default AddCar;
