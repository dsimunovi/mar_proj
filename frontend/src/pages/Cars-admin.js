import React, {useState,useEffect} from "react";
import Cars_admin from "../components/Cars-admin";
import carsActions from "../services/cars"


const SviAuti=()=>{


const [cars, getCars] = useState([]);
const [print, printAll] = useState();
const svi = cars.filter((car)=>car.prodano===false);


useEffect(() => {
  carsActions.dohvatiSve().then((res) => {
    getCars(res.data);
  });
}, []);
return(

<div>
              {
                svi.map(c=> (
                  <Cars_admin
                    key={c.id}
                    id={c.id}
                    slika={c.slika}
                    model={c.model}
                    marka={c.marka}
                    kilometri={c.kilometri}
                    godiste={c.godiste}
                    snagaMotora={c.snagaMotora}
                    vrstaMotora={c.vrstaMotora}
                    mjenjac={c.mjenjac}
                    cijena={c.cijena}
                    gume={c.gume}
                    boja={c.boja}
                    naplatci={c.naplatci}
                    prodano={c.prodano}
                  />
                ))}
            </div>

)

}

export default SviAuti;