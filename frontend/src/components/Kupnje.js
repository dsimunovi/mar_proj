import React from "react";
import "./Kupnje.css";
const Kupnje = ({ id, car, tire, rim, kupac }) => {
  const ukupno = car.cijena + tire.cijena + rim.cijena;
  const cifra = ukupno.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  return (
    <tr>
      <td>
        <img src={car.slika} /> {car.marka} {car.model}{" "}
        <b>
          {car.cijena.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}€
        </b>
      </td>
      <td>
        <img src={tire.slika} /> {tire.marka} {tire.tip} <b>{tire.cijena}€</b>
      </td>
      <td>
        <img src={rim.slika} /> {rim.tip} <b>{rim.cijena}€</b>
      </td>
      <td>{kupac}</td>
      <td id="ukupno">
        <b>{cifra} €</b>
      </td>
    </tr>
  );
};

export default Kupnje;
