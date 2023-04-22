import React, { useState,useEffect } from 'react';
import './Cars.css'
import './Selection.css';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Tires from "./Tires";
import tiresActions from "../services/tires"
import rimsActions from "../services/rims"
import Rims from "./Rims";
import carsActions from '../services/cars';
import axios from 'axios';
import "./CarReview.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





const Cars=({id,slika,marka,model,kilometri,godiste,vrstaMotora,snagaMotora,mjenjac,gume,boja,cijena,naplatci,})=>{
  const [color, setColor] = useColor("hex", "#121212");
  const [cars, postaviAute] = useState([])
  const [nacin, postaviNacin]=useState("Gotovina")
  const [check, setCheck]=useState(false)
  const [checkGuma, setCheckGuma]=useState(false)
  const [checkNaplatak, setCheckNaplatak]=useState(false)
  const [visible, setVisible] = useState(false)
  const [startColor, setStartColor] = useState(boja);
  const [colorSet, setColorSet] = useState("");
  const [visibleGume, setVisibleGume] = useState(false)
  const [visibleRim, setVisibleRim] = useState(false)
  const [lgShow, setLgShow] = useState(false);

  const [tires,setTires]=useState({
    id:"",
    slika:"/",
    marka:"/",
    tip:"/",
    cijena:"/"
  })
  const [rims,setRims]=useState({
    id:"",
    slika:"/",
    tip:"/",
    cijena:"/"
  })

  
  
  

 const [chosenRim,setChosenRim]=useState()

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
  
  

  const [chosenTire,setChosenTire]=useState()
  const pronadiGumu=()=>{
    if(!checkGuma){
    tiresActions.dohvatiJedneGume(chosenTire)
    .then(res=>{
      setTires(res.data)
    console.log(res.data)})}
      else{
        tiresActions.dohvatiJedneGume(gume)
        .then(res=>{
          setTires(res.data)
        })
      }
    setVisibleGume(true)
  }

  

    const handleChange = (event) => {
        postaviNacin(event.target.value)
    }
  const changeColor = () => {
    if (!check) {
      setColorSet(color.hex);
    } else {
      setColorSet(startColor);
    }
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

                        <div className="mt-1 mb-0 text-muted small">
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
                      <div className='row-1'>
                      <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div className="d-flex flex-row align-items-center mb-1">
                          <label className="mb-1 me-1">{cijena} €</label> {/*trenutna cijena */}
                        </div>
                        <div className="d-flex flex-column mt-4">
                        <Button style={{backgroundColor:'black', border:'2px solid darkmagenta'}} variant="primary" onClick={() => setLgShow(true)}>Kupi</Button>
                        </div>
                      </div>
                    </div>
                    </div>
                 
      <Modal size="xl"
        show={lgShow}
        aria-labelledby="example-modal-sizes-title-lg"
        onHide={() => setLgShow(false)}
        >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Odaberi po svojoj želji za {marka} {model}</Modal.Title>
        </Modal.Header>
        <Modal.Body>  <div className="flex-row-1">
              <div className="flex-column-2">
      <div className='flex-row-color'>
        <input
          type='checkbox'
          name="check1"
          value={check}
          className="flexCheckChecked"
          onChange={() => setCheck(!check)}
        /><label>Ne želim mijenjati boju</label>
      </div>
      <ColorPicker
        width={300}
        height={250}
        color={color}
        onChange={setColor}
        hideHSV hideRGB dark
      />
      {visible ?
        <div>
          <div>{colorSet}</div>
          <div style={{
            backgroundColor: `${colorSet}`,
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
            <button className="postavi" onClick={changeColor}>Postavi boju</button>
            <button  className="postavi" onClick={pronadiGumu} >Postavi gume</button>
            <button className="postavi" onClick={pronadiNaplatak} >Postavi naplatke</button>
          </div>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="outline-success" >
            Spremi promjene
          </Button>
        </Modal.Footer>
      </Modal>
    

     
                    
             
      
     </div>
            
          
    )
}

export default Cars;