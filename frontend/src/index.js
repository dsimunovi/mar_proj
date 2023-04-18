import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./index.css"

let cars = [
  {
    id: 1,
    slika:"https://www.njuskalo.hr/image-w920x690/auti/audi-r8-5.2-fsi-spyder-facelift-model-full-oprema-cijena-146.000-slika-188056605.jpg",
    marka:"Audi",
    model:"R8",
    godiste:2017,
    kilometri:48000,
    vrstaMotora:"Benzin",
    snagaMotora:397,
    mjenjac:"Automatski",
    gume:"Stare",
    boja:"Žuta",
    cijena:146000
  },
  {
    id: 2,
    slika:"https://www.njuskalo.hr/image-w920x690/novi-auti/lexus-nx450h-awd-plug-in-samopuneci-hibrid-slika-188465544.jpg",
    marka:"Lexus",
    model:"NX",
    godiste:2023,
    kilometri:10000,
    vrstaMotora:"Benzin",
    snagaMotora:136,
    mjenjac:"Automatski",
    gume:"Stare",
    boja:"Siva",
    cijena:76600 
    
  },
  {
    id: 3,
    slika:"https://www.njuskalo.hr/image-w920x690/novi-auti/ford-kuga-1.5-ecoblue-120ks-isporuka-odmah-slika-170534746.jpg",
    marka:"Ford",
    model:"Kuga",
    godiste:2022,
    kilometri:3549,
    vrstaMotora:"Diesel",
    snagaMotora:88,
    mjenjac:"Mehanički",
    gume:"Stare",
    boja:"Crna",
    cijena:30165 
  }
]

let tires=[
  {
    id:1,
    slika:"https://vulkal.hr/images/thumbs/-0668047_MICHELIN-165-65-R15-PRIMACY-4-81T_360.jpeg",
    tip:"Ljetne",
    marka:"Michelin",
    cijena:98
  },
  {
    id:2,
    slika:"https://www.vulkal.hr/images/thumbs/-0693130_PIRELLI-195-55-R20-POWERGY-95H-XL_360.jpeg",
    tip:"Ljetne",
    marka:"Pirelli",
    cijena:113

  },
  {
    id:3,
    slika:"https://www.vulkal.hr/images/thumbs/-0693489_FIRESTONE-195-50-R15-WINTERHAWK-4-86H-XL_360.jpeg",
    tip:"Zimske",
    marka:"Firestone",
    cijena:75

  },
  {
    id:4,
    slika:"https://www.vulkal.hr/images/thumbs/-0696755_1_GRIPMAX-245-30-R20-PRO-WINTER-XL-90V_360.jpeg",
    tip:"Zimske",
    marka:"Gripmax",
    cijena:169

  },
  {
    id:5,
    slika:"https://vulkal.hr/images/thumbs/-0680066_GOOD-YEAR-175-65-R13-VECTOR-4SEASONS-80T_360.jpeg",
    tip:"Cjelogodišnje",
    marka:"Goodyear",
    cijena:82

  },
  {
    id:6,
    slika:"https://www.vulkal.hr/images/thumbs/-0409147_SAVA-185-65-R14-ADAPTO-HP-86H_360.jpeg",
    tip:"Cjelogodišnje",
    marka:"Sava",
    cijena:60

  }
  

]
let rims=[
  {
    id:1,
    slika:"https://www.vulkal.hr/images/thumbs/-0575468_-ELI-NI-NAPLATAK-4-5X14-4X100-ET39--54-0--CITROEN-C1-PEUGOT-107--SWIFT--AYGO-R1-1601_360.jpeg",
    tip:"Čelični",
    cijena:54
  },
  {
    id:2,
    slika:"https://www.vulkal.hr/images/thumbs/-0423215_-ELI-NI-NAPLATAK-6-5x16-5X114-3-ET31-5--67-0--KIA-SPORTAGE-III-R1-1821_360.jpeg",
    tip:"Čelični",
    cijena:71
  },
  {
    id:3,
    slika:"https://vulkal.hr/images/thumbs/-0659135_MAK-NAPL--5-5X14-ZENITH-5X100-ET35--72-0--MATT-BLACK_360.jpeg",
    tip:"Aluminijski",
    cijena:94
  },
  {
    id:4,
    slika:"https://www.vulkal.hr/images/thumbs/-0654573_MAK-NAPL--7X17-ICONA-ET42-4X108--63-4--SILVER_360.jpeg",
    tip:"Aluminijski",
    cijena:112
  }

]



ReactDOM.render(<App cars={cars} tires={tires} rims={rims}/>,document.getElementById('root'))


