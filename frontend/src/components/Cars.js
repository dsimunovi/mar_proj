import React, { useState,useEffect } from 'react';
import './Cars.css'
import './Selection.css';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { HiOutlineX, HiChevronDown } from "react-icons/hi";
import { BsFillCarFrontFill } from "react-icons/bs";
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
  const[selection, setSelection]=useState(false)
  const [color, setColor] = useColor("hex", "#121212");
  const [print1, printAll1]=useState()
  const [print2, printAll2]=useState()
  const [cars, postaviAute] = useState([])
  const [payment,setPayment]=useState(false)
  const [nacin, postaviNacin]=useState("Gotovina")
  const [check, setCheck]=useState(false)
  const [checkGuma, setCheckGuma]=useState(false)
  const [visible, setVisible] = useState(false)
  const [startColor, setStartColor] = useState(boja);
  const [colorSet, setColorSet] = useState("");
  const [visibleGume, setVisibleGume] = useState(false)
  const [visibleRim, setVisibleRim] = useState(false)
  const [lgShow, setLgShow] = useState(false);

  const[startGuma,setStartGuma]=useState({
    id:0,
    slika:"https://www.vulkal.hr/images/thumbs/-0690522_GRIPMAX-265-35-R20-SUREGRIP-PRO-SPORT-XL-99Y_360.jpeg",
    marka:"Gripmax",
    tip:"Ljetna",
    stanje:"Rabljeno",
    cijena:0
  })
  const [tires,setTires]=useState({
    id:"",
    slika:"/",
    marka:"/",
    tip:"/",
    stanje:"/",
    cijena:"/"
  })

  const [chosenTire,setChosenTire]=useState()

  const[startRim,setStartRim]=useState({
    id:0,
    slika:"https://www.vulkal.hr/images/thumbs/-0690522_GRIPMAX-265-35-R20-SUREGRIP-PRO-SPORT-XL-99Y_360.jpeg",
    tip:"Aluminijski",
    cijena:0
  })
  const [rims,getRims]=useState({
    id:"",
    slika:"/",
    tip:"/",
    cijena:"/"
  })

  const [chosenRim,setChosenRim]=useState()

  const pronadiNaplatak=()=>{
    rimsActions.dohvatiJedanNaplatak(chosenRim)
    .then(res=>{
      getRims(res.data)
    })
    setVisibleRim(true)
  }

  
  const pronadiGumu=()=>{
    if(!checkGuma){
    tiresActions.dohvatiJedneGume(chosenTire)
    .then(res=>{
      setTires(res.data)
    console.log(res.data)})}
      else{
        setTires(startGuma)
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



  


  const svi1=tires
  const prikaziSve1=()=>{
    printAll1(svi1);
  }
  const svi2=rims
  const prikaziSveNaplatke=()=>{
    printAll2(svi2);
  }

useEffect(()=>{
  rimsActions.dohvatiSveNaplatke()
  .then(res=>{
    getRims(res.data)
    console.log(res.data)
  })
},[])

useEffect(() => {
  carsActions.dohvatiSve()
  .then(res => postaviAute(res.data))
}, []);

let ukupno=cijena+tires.cijena+rims.cijena
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
                        <Button variant="primary" onClick={() => setLgShow(true)}>Kupi</Button>
                        </div>
                      </div>
                    </div>
                    </div>
                 
      <Modal size="lg"
        show={lgShow}
        aria-labelledby="example-modal-sizes-title-lg"
        onHide={() => setLgShow(false)}
        >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Odaberi pod svojoj želji za {marka} {model}</Modal.Title>
        </Modal.Header>
        <Modal.Body>  <div className="flex-row-1">
              <div className="flex-column-2">
              <div>
      <div className='flex-row-color'>
        <input
          type='checkbox'
          name="check1"
          value={check}
          id="flexCheckChecked"
          onChange={() => setCheck(!check)}
        /><label>Ne želim mijenjati boju</label>
      </div>
      <ColorPicker
        width={300}
        height={150}
        color={color}
        onChange={setColor}
        hideHSV hideRGB dark
      />
      <button onClick={changeColor}>Postavi boju</button>
      {visible ?
        <div>
          <div>{colorSet}</div>
          <div style={{
            backgroundColor: `${colorSet}`,
            width: '20px',
            height: '20px'
          }}></div>
        </div>
        : ""
      }
    </div>
              </div> {/*flex-column-1*/}
            <div className="flex-column-2">
            <div className='flex-row-color'>
        <input
          type='checkbox'
          name="check1"
          value={checkGuma}
          id="flexCheckChecked"
          onChange={() => setCheckGuma(!check)}
        /><label>Ne želim mijenjati gume</label>
      </div>
              <Tires changeTire={setChosenTire} />
              {visibleGume?<div><div><img src={tires.slika} style={{width:"100px",height:"100px"}}/></div>
              <div>Marka: {tires.marka}</div>
              <div>Tip: {tires.tip}</div>
              <div>Stanje: {tires.stanje}</div>
              <div>Cijena u €: {tires.cijena}</div></div>:""}
              <button onClick={pronadiGumu} >Postavi gume</button>
              
            </div> {/*flex-column-2*/}
            <div className="flex-column-2">
            <div className='flex-row-color'>
            <input
          type='checkbox'
          name="check1"
          value={checkGuma}
          id="flexCheckChecked"
          onChange={() => setCheckGuma(!check)}
        /><label>Ne želim mijenjati gume</label>
        </div>
            <Rims changeRims={setChosenRim} />
              {visibleRim?<div><div><img src={rims.slika} style={{width:"100px",height:"100px"}}/></div>
              <div>Tip: {rims.tip}</div>
              <div>Cijena u €: {rims.cijena}</div></div>:""}
              <button onClick={pronadiNaplatak} >Postavi naplatke</button>
            </div> {/*flex-column-2*/}
          </div> {/*flex-row-1*/}
      </Modal.Body>
      <Modal.Footer>
        <label style={{color:'red',fontWeight:'bold'}}>Ukupno za platiti: {ukupno} €</label>
          <Button variant="primary" >
            Spremi promjene
          </Button>
        </Modal.Footer>
      </Modal>
    

     
                    
             
      
     </div>
            
          
    )
}

export default Cars;