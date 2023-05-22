import React, { useState,useEffect } from 'react';
import './Cars.css'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Tires from "./Tires";
import tiresActions from "../services/tires"
import rimsActions from "../services/rims"
import Rims from "./Rims";
import carsActions from '../services/cars';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Payment.css'
import korisnikAkcije from '../services/users'
import kupnjaAkcije from '../services/buy'






const Cars=({id,slika,marka,model,kilometri,godiste,vrstaMotora,snagaMotora,mjenjac,gume,boja,cijena,naplatci,prodano})=>{
  const [korisnik, postaviKorisnika] = useState(null)
  const [user,setUser]=useState(null)
  const [startColor, setStartColor] = useState(boja);
  const [color, setColor] = useColor("hex", startColor);
  const [cars, postaviAute] = useState([])
  const [checkGuma, setCheckGuma]=useState(false)
  const [checkNaplatak, setCheckNaplatak]=useState(false)
  const [visible, setVisible] = useState(false)
  const [visibleGume, setVisibleGume] = useState(false)
  const [visibleRim, setVisibleRim] = useState(false)
  const [lgShow, setLgShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [chosenTire,setChosenTire]=useState()
  const [chosenRim,setChosenRim]=useState()
  const [tires,setTires]=useState({
    slika:"/",
    marka:"/",
    tip:"/",
    cijena:"/"
  })
  const [rims,setRims]=useState({
    slika:"/",
    tip:"/",
    cijena:"/"
  })
  const handleClose = () => setShow(false);
  const [brKartice,postaviKarticu]=useState("")
  const [istekGodina, postaviIstekGodina]=useState("")
  const [istekMjesec, postaviIstekMjesec]=useState("")
  const [cvv, postaviCvv]=useState("")

  

   let ukupno=cijena+tires.cijena+rims.cijena
   var ukupno_ispis=ukupno.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
   var cifra = cijena.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
   


const izmjenaAuta=(id)=>{
  const auto=cars.find((c)=>c.id===id)
  const modCar={
    ...auto,
    boja:startColor,
    gume:tires.id,
    naplatci:rims.id,
    prodano:true
    
  }
  carsActions.osvjezi(id,modCar, {new:true})
}

const kupnjaAuta=(e)=>{
  e.preventDefault()
  try{
  kupnjaAkcije.stvori({
    car:id,
    tire:tires.id,
    rim:rims.id,
    brKartice:brKartice,
    mjesec:istekMjesec,
    godina:istekGodina,
    cvv:cvv
  })
  window.location.reload(true)
}
  catch{
    alert ("Neispravni podaci")
  }

}

  const pronadiNaplatak=()=>{
    if(!checkNaplatak){
    rimsActions.dohvatiJedanNaplatak(chosenRim)
    .then(res=>{
      setRims(res.data)
    })}
    else{
      rimsActions.dohvatiJedanNaplatak(naplatci)
      .then(res=>{
        setRims(res.data)
      })
    }
    setVisibleRim(true)
  } 
  

 
  const pronadiGumu=()=>{
    if(!checkGuma){
    tiresActions.dohvatiJedneGume(chosenTire)
    .then(res=>{
      setTires(res.data)
   })}
      else{
        tiresActions.dohvatiJedneGume(gume)
        .then(res=>{
          setTires(res.data)
        })
      }
    setVisibleGume(true)
  }

  

    const handleChange = () => {
        izmjenaAuta(id)
        setShow(true)
    }

    
  const changeColor = () => {
    setStartColor(color.hex)
    setVisible(true)
  }


  
useEffect(() => {
  carsActions.dohvatiSve()
  .then(res => postaviAute(res.data))
}, []); 

useEffect(()=>{tiresActions.dohvatiJedneGume(gume)
  .then(res=>{
    setTires(res.data)
    setVisibleGume(true)
  })},[])
  
useEffect(()=>{rimsActions.dohvatiJedanNaplatak(naplatci)
    .then(res=>{
      setRims(res.data)
      setVisibleRim(true)
    })},[]) 
useEffect(()=>{
  const logiraniKorisnikJSON = window.localStorage.getItem(
    "prijavljeniKorisnik"
);
if (logiraniKorisnikJSON) {
  const korisnik=JSON.parse(logiraniKorisnikJSON)
    postaviKorisnika(korisnik);
    kupnjaAkcije.postaviToken(korisnik.token)
    
}
},[])

    return(
         
        <div id="main-car">
                    <div className="row" id="car-card">
                      <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div className="bg-image hover-zoom ripple rounded ripple-surface podaci">
                          <img id="slika-auta" src={slika}
                            className="w-100" />
                          <a href="#!">
                            <div className="hover-overlay">
                              <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
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

                        <div className='info'>
                          <span>{kilometri} km</span>
                          <span className="text-primary"> • </span>
                          <span>{godiste}</span>
                          <span className="text-primary"> • </span>
                          <span>{vrstaMotora}<br /></span>
                          <span className="text-primary"> • </span>
                          <span>{snagaMotora}kW</span>
                          <span className="text-primary"> • </span>
                          <span>{mjenjac} mjenjač</span>
                        </div>
                        
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none  cijena">
                        <div className="d-flex flex-row align-items-center mb-1 cijenaAuta">
                          <label className="mb-1 me-1">{cifra} €</label> {/*trenutna cijena */}
                        </div>
                        <div className="d-flex flex-column mt-4">
                        <Button style={{backgroundColor:'black', border:'2px solid darkmagenta'}} variant="primary" onClick={() => setLgShow(true)}>Kupi</Button>
                        </div>
                      </div>
                      <div className='row-1'>
                      
                    </div>
                    </div>
                 
      <Modal size="fullscreen"
        show={lgShow}
        aria-labelledby="example-modal-sizes-title-lg"
        onHide={() => setLgShow(false)}
        >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Odaberi za svoj {marka} {model}</Modal.Title>
        </Modal.Header>
        <Modal.Body>  <div className="flex-row-1">
              <div className="flex-column-2">
      <ColorPicker
        width={300}
        height={250}
        color={color}
        onChange={setColor}
        hideHSV hideRGB dark
      />
      {visible ?
        <div>
          <div>{startColor}</div>
          <div style={{
            backgroundColor: `${startColor}`,
            width: '65px',
            height: '20px'
          }}></div>
        </div>
        : ""
      }
              </div> {/*flex-column-1*/}
            <div className="flex-column-2">
            <div className='flex-row-color'>
        <input
          type='checkbox'
          name="check1"
          value={checkGuma}
          className="flexCheckChecked"
          onChange={() => setCheckGuma(!checkGuma)}
        /><label>Ne želim mijenjati gume</label>
      </div>
              <Tires changeTire={setChosenTire} />
              {visibleGume?<div><img className='slike-sel' src={tires.slika}/>
              <div>Marka: {tires.marka}</div>
              <div>Tip: {tires.tip}</div>
              <div>Cijena u €: {tires.cijena}</div></div>:""}
              
            </div> {/*flex-column-2*/}
            <div className="flex-column-2">
            <div className='flex-row-color'>
            <input
          type='checkbox'
          name="check1"
          value={checkGuma}
          className="flexCheckChecked"
          onChange={() => setCheckNaplatak(!checkNaplatak)}
        /><label>Ne želim mijenjati naplatke</label>
        </div>
            <Rims changeRims={setChosenRim} />
              {visibleRim?<div><img className='slike-sel'src={rims.slika}/>
              <div>Tip: {rims.tip}</div>
              <div>Cijena u €: {rims.cijena}</div></div>:""}
              
            </div> {/*flex-column-2*/}
          </div> {/*flex-row-1*/}
          <div id="botun">
          <button  className="postavi" onClick={changeColor} >Postavi boju</button>
            <button  className="postavi" onClick={pronadiGumu} >Postavi gume</button>
            <button className="postavi" onClick={pronadiNaplatak} >Postavi naplatke</button>
          </div>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="outline-success" onClick={()=>handleChange()}>
            Spremi promjene
          </Button>
        </Modal.Footer>
      </Modal>

    
    {show?
     <Modal show={show} size="lg" onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title>Modal heading</Modal.Title>
     </Modal.Header>
     <Modal.Body>
     <div className="padding">
<div className="row">
<div className="col-sm-6">
<div className="card">
<div className="card-header">
<strong>Kreditna kartica</strong>
</div>
<div className="card-body">
<div className="row">
<div className="col-sm-12">
<div className="form-group">
    

    
<label htmlFor="name">Ime kupca</label>
<input className="form-control" id="name" type="text" placeholder="Enter your name" />
</div>
</div>
</div>

<div className="row">
<div className="col-sm-12">
<div className="form-group">
<label htmlFor="ccnumber">Broj kreditne kartice</label>


<div className="input-group">
<input className="form-control" type="text" placeholder="0000 0000 0000 0000" value={brKartice.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()} onChange={(e)=>postaviKarticu(e.target.value)}/>
<div className="input-group-append">
<span className="input-group-text">
<i className="mdi mdi-credit-card"></i>
</span>
</div>
</div> 
</div>
</div>
</div>

<div className="row">
<div className="form-group col-sm-4">
<label htmlFor="ccmonth">Mjesec</label>
<select className="form-control" id="ccmonth" onChange={(e)=>postaviIstekMjesec(e.target.value)}>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
<option>11</option>
<option>12</option>
</select>
</div>
<div className="form-group col-sm-4">
<label htmlFor="ccyear">Godina</label>
<select className="form-control" id="ccyear" onChange={(e)=>postaviIstekGodina(e.target.value)}>
<option>2023</option>
<option>2024</option>
<option>2025</option>
<option>2026</option>
<option>2027</option>
<option>2028</option>
<option>2029</option>
<option>2030</option>
<option>2031</option>
<option>2032</option>
<option>2033</option>
<option>2034</option>
</select>
</div>
<div className="col-sm-4">
<div className="form-group">
<label htmlFor="cvv">CVV/CVC</label>
<input className="form-control" id="cvv" type="text" placeholder="123" onChange={(e)=>postaviCvv(e.target.value)}/>
</div>
</div>
</div>

</div>
<div className="card-footer">
<button className="btn btn-sm btn-success float-right" type="submit" onClick={kupnjaAuta}>
<i className="mdi mdi-gamepad-circle"></i> Kupi</button>
<button className="btn btn-sm btn-danger" type="reset">
<i className="mdi mdi-lock-reset"></i> Odustani</button>
</div>
</div>
</div>
</div>
</div>
     </Modal.Body>
   </Modal>:""}
      
    

     
                    
             
      
     </div>
            
          
    )
}

export default Cars;