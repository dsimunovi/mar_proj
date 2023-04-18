
const express = require('express')
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors())
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
      boja:"yellow",
      cijena:146000,
      naplatci:"Stari"
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
      boja:"gray",
      cijena:76600,
      naplatci:"Stari" 
      
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
      boja:"black",
      cijena:30165,
      naplatci:"Stari" 
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
        gume:"Stare",
        boja:"darkgray",
        cijena:476315,
        naplatci:"Stari" 
      }
  ]

  let gume=[
    {
      id:1,
      slika:"https://vulkal.hr/images/thumbs/-0668047_MICHELIN-165-65-R15-PRIMACY-4-81T_360.jpeg",
      tip:"Ljetne",
      marka:"Michelin",
      cijena:98,
      original:false
    },
    {
      id:2,
      slika:"https://www.vulkal.hr/images/thumbs/-0693130_PIRELLI-195-55-R20-POWERGY-95H-XL_360.jpeg",
      tip:"Ljetne",
      marka:"Pirelli",
      cijena:113,
      original:false
  
    },
    {
      id:3,
      slika:"https://www.vulkal.hr/images/thumbs/-0678734_FIRESTONE-205-55-R16-WINTERHAWK-4-94H-XL_360.jpeg",
      tip:"Zimske",
      marka:"Firestone",
      cijena:75,
      original:false
  
    },
    {
      id:4,
      slika:"https://www.vulkal.hr/images/thumbs/-0690887_GRIPMAX-255-40-R20-PRO-WINTER-XL-101V_360.jpeg",
      tip:"Zimske",
      marka:"Gripmax",
      cijena:169,
      original:false
  
    },
    {
      id:5,
      slika:"https://www.vulkal.hr/images/thumbs/-0692692_GOOD-YEAR-215-40-R18-VECTOR-4SEASONS-G3-89W-XL_360.jpeg",
      tip:"Cjelogodišnje",
      marka:"Goodyear",
      cijena:82,
      original:false
  
    },
    {
      id:6,
      slika:"https://www.vulkal.hr/images/thumbs/-0669826_SAVA-165-70-R14-ALL-WEATHER-81T_360.jpeg",
      tip:"Cjelogodišnje",
      marka:"Sava",
      cijena:60,
      original:false
  
    },
    {
      id:7,
      slika:"https://rabljenegume.com.hr/common/core/images/hgumi/150/hasznalt_goodyear_excellence_nyari.jpg",
      tip:"Ljetne",
      marka:"Goodyear",
      cijena:0,
      original:true
  
    },
    {
      id:8,
      slika:"https://rabljenegume.com.hr/common/core/images/hgumi/14827/hasznalt_michelin_primacy_3_nyari.jpg",
      tip:"Ljetne",
      marka:"Michelin",
      cijena:0,
      original:true
  
    },
    {
      id:9,
      slika:"https://rabljenegume.com.hr/common/core/images/hgumi/14424/hasznalt_continental_allseasoncontact_4evszak.jpg",
      tip:"Cjelogodišnje",
      marka:"Continental",
      cijena:0,
      original:true
  
    },
    {
      id:10,
      slika:"https://rabljenegume.com.hr/common/core/images/hgumi/13132/hasznalt_bridgestone_lm001_teli.jpg",
      tip:"Zimske",
      marka:"Bridgestone",
      cijena:0,
      original:true
  
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

  

app.get('/api/cars',(req,res)=>{
    res.json(cars)
})

app.get('/api/cars/:id',(req,res)=>{
    const id=Number(req.params.id);
    const car=cars.find(c=>c.id===id)
    if(car){
        res.json(car)
    }
    else{
        res.status(404).end()
    }
})
app.delete('/api/cars/:id',(req,res)=>{
    const id=Number(req.params.id);
    cars=cars.filter(c=>c.id!==id)

    res.status(204).end()
})

app.post('/api/cars',(req,res)=>{
    const generirajId=()=>{
        const maxId=cars.length>0
        ? Math.max(...cars.map(c=>c.id))
        :0
        
        return maxId+1
    }
    const podatak=req.body
    if(!(podatak.slika &&podatak.model&&podatak.marka&&podatak.kilometri&&podatak.vrstaMotora&&podatak.snagaMotora&&podatak.cijena)){
        return res.status(400).json({
            error:"Nedostaje bitnih podataka!"
        })

    }

   

    

    const car={
        slika:podatak.slika,
        marka:podatak.marka,
        model:podatak.model,
        godiste:podatak.godiste,
        kilometri:podatak.kilometri,
        vrstaMotora:podatak.vrstaMotora,
        snagaMotora:podatak.snagaMotora,
        mjenjac:podatak.mjenjac,
        gume:podatak.gume,
        boja:podatak.boja,
        cijena:podatak.cijena,
        naplatci:podatak.naplatci,
        id:generirajId()
    }
    
    cars=cars.concat(car)
    res.json(car)
})
 app.get('/api/gume',(req,res)=>{
        res.json(gume)
    })
    app.get('/api/gume/:id',(req,res)=>{
        const id=Number(req.params.id);
        const tire=gume.find(t=>t.id===id)
        if(tire){
            res.json(tire)
        }
        else{
            res.status(404).end()
        }
    })
    app.get('/api/gume/:original',(req,res)=>{
      
  })

    app.post('/api/gume',(req,res)=>{
        const generirajIdGuma=()=>{
            const maxIdGuma=gume.length>0
            ? Math.max(...gume.map(t=>t.id))
            :0
            
            return maxIdGuma+1
        }
const podatakGuma=req.body
    if(!(podatakGuma.slika &&podatakGuma.marka&&podatakGuma.cijena&&podatakGuma.tip && podatakGuma.original)){
        return res.status(400).json({
            error:"Nedostaje bitnih podataka!"
        })

    }

    const tire={
        slika:podatakGuma.slika,
        tip:podatakGuma.tip,
        marka:podatakGuma.marka,
        cijena:podatakGuma.cijena,
        original:podatakGuma.original,
        id:generirajIdGuma()
        
    }
    gume=gume.concat(tire);
    res.json(tire)
})
app.get('/api/rims',(req,res)=>{
  res.json(rims)
})
app.get('/api/rims/:id',(req,res)=>{
  const id=Number(req.params.id);
  const rim=rims.find(r=>r.id===id)
  if(rim){
      res.json(rim)
  }
  else{
      res.status(404).end()
  }
})

app.post('/api/rims',(req,res)=>{
  const generirajIdNaplatak=()=>{
      const maxIdNaplatak=rims.length>0
      ? Math.max(...rims.map(r=>r.id))
      :0
      
      return maxIdNaplatak+1
  }
const podatakNaplatak=req.body
if(!(podatakNaplatak.slika &&podatakNaplatak.cijena&&podatakNaplatak.tip)){
  return res.status(400).json({
      error:"Nedostaje bitnih podataka!"
  })

}

const rim={
  slika:podatakNaplatak.slika,
  tip:podatakNaplatak.tip,
  cijena:podatakNaplatak.cijena,
  id:generirajIdNaplatak()
  
}
rims=rims.concat(rim);
res.json(rim)
})


const PORT = 3001 
app.listen(PORT)  
console.log(`Posluzitelj je pokrenut na portu ${PORT}`);