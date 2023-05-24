const Naplatak =require('../models/naplatak')
const Auto =require('../models/auto')
const Korisnik=require('../models/korisnik')

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
      gume:"646dc2a56da2a1c47c1868a8",
      boja:"#b8860b",
      cijena:146000,
      naplatci:"646e3d35b475986997cb1312",
      prodano:false
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
      gume:"646d3bf662ee84a7d5024abb",
      boja:"#808080",
      cijena:76600,
      naplatci:"646e3d35b475986997cb1310",
      prodano:false

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
      gume:"646d3e4062ee84a7d5024abd",
      boja:"#121212",
      cijena:30165,
      naplatci:"646e3d35b475986997cb1314",
      prodano:false
    },
    {
        id: 4,
        slika:"https://www.njuskalo.hr/image-w920x690/novi-auti/aston-martin-dbs-superleggera-5.2-v12-slika-184090900.jpg",
        marka:"Aston Martin",
        model:"DBS SUPERLEGGERA",
        godiste:2022,
        kilometri:0,
        vrstaMotora:"Benzin",
        snagaMotora:553,
        mjenjac:"Automatski",
        gume:"646d362bfdad12812acf18c1",
        boja:"#a9a9a9",
        cijena:476315,
        naplatci:"646e3d35b475986997cb1312",
        prodano:false 
      }
  ]

  const naplatciBaze=async()=>{
    const naplatak=await Naplatak.find({})
    return naplatak.map(n=>n.toJSON())
  }

  const autaBaze=async()=>{
    const auto=await Auto.find({})
    return auto.map(a=>a.toJSON())
  }

  const korisniciBaze = async () => {
    const korisnici = await Korisnik.find({})
    return korisnici.map(k => k.toJSON())
  }

  module.exports={rims, naplatciBaze, cars, autaBaze, korisniciBaze}