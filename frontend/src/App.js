import React,{useState,useEffect} from 'react' 
import './App.css'
import Cars from './components/Cars'
import Footer from './components/Footer'
import carsActions from './services/cars';
import Slideshow from './components/Slider';





const App = (props) => { 

  const [cars, getCars]=useState([])
  const [print, printAll]=useState() 
  const [visible,setVisible]=useState(false)


  const svi=cars
  const prikaziSve=()=>{
    printAll(svi);
  }
 
  useEffect(()=>{
    carsActions.dohvatiSve()
    .then(res=>{
      getCars(res.data)
    console.log(res.data)})
  },[])

 

  

  
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <a href="#" className="navbar-brand">
    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/audi-8-332760.png" height="80" />
    <label>AUTO SALON ZRILIĆ</label>
  </a>
  <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav">
          <a href="#" className="nav-item nav-link active" onClick={()=>setVisible(false)} >Početna</a>
          <a href="#" className="nav-item nav-link" onClick={()=>{prikaziSve();setVisible(true);}}>Ponuda vozila</a>
          <a href="#" className="nav-item nav-link">Kupljena vozila</a>
      </div>
      <div className="navbar-nav ms-auto">
          <a href="#" className="nav-item nav-link">Logout</a>
      </div>
  </div>
</div>
</nav>

            {visible?<div > 
              {print && print.map(c=>
                <Cars key={c.id} id={c.id} slika={c.slika} model={c.model} marka={c.marka} kilometri={c.kilometri} godiste={c.godiste} snagaMotora={c.snagaMotora} vrstaMotora={c.vrstaMotora} mjenjac={c.mjenjac} cijena={c.cijena} gume={c.gume} boja={c.boja} naplatci={c.naplatci} prikaziSve={()=>prikaziSve()} />)}
            </div>:<Slideshow/>}
            
  
                
        <Footer></Footer>
      </div>
  )} 
      

export default App;
