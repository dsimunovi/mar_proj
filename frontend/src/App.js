import React,{useState,useEffect} from 'react' 
import './App.css'
import Cars from './components/Cars'
import Footer from './components/Footer'
import carsActions from './services/cars';
import Slideshow from './components/Slider';
import Prijava from './components/Login';
import prijavaAkcije from './services/login'
import korisnikAkcije from './services/users'





const App = (props) => { 

  const [cars, getCars]=useState([])
  const [print, printAll]=useState() 
  const [visible,setVisible]=useState(false)
  const [username, postaviUsername] = useState("");
  const [pass, postaviPass] = useState("");
  const [korisnik, postaviKorisnika] = useState(null);
  const [usernameReg,postaviNick]=useState("")
  const [nameReg,postaviName]=useState("")
  const [emailReg, postaviEmail]=useState("")
  const [passReg,postaviPassword]=useState("")
  const [noviKorisnik, postaviNovogKorisnika]=useState(null)


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

  const userLogin = async (e) => {
    e.preventDefault();
    try {
      const korisnik = await prijavaAkcije.prijava({
        username,
        pass,
      });
      const isLoggedIn=window.localStorage.setItem(
        "prijavljeniKorisnik",
        JSON.stringify(korisnik)
      );
      postaviKorisnika(korisnik);
      postaviUsername("");
      postaviPass("");
      console.log(korisnik);
    } catch (exception) {
      alert("Neispravni podaci");
    }
  };
  const userRegistration=async(e)=>{
    e.preventDefault();
    try{
      const noviKorisnik=await korisnikAkcije.stvoriKorisnika({
        usernameReg,
        nameReg,
        emailReg,
        passReg
      })
      postaviNovogKorisnika(noviKorisnik);
      postaviNick("");
      postaviName("");
      postaviEmail("")
      postaviPassword("")
      console.log(korisnik);
      
    }
    catch(exception){
      alert("Probajte s drugim podacima")
    }
  }

  const prijava = () => {
    return (
        <Prijava
          username={username}
          pass={pass}
          promjenaImena={({ target }) => postaviUsername(target.value)}
          promjenaLozinke={({ target }) => postaviPass(target.value)}
          userLogin={userLogin}
          usernameReg={usernameReg}
        nameReg={nameReg}
        emailReg={emailReg}
        passReg={passReg}
        promjenaNicka={({ target }) => postaviNick(target.value)}
        promjenaNamea={({target})=>postaviName(target.value)}
        promjenaEmail={({target})=>postaviEmail(target.value)}
        promjenaPassworda={({target})=>postaviPassword(target.value)}
        userRegistration={userRegistration}
        />
    );
  };

  

 

  useEffect(() => {
    const logiraniKorisnikJSON = window.localStorage.getItem(
      "prijavljeniKorisnik"
    );
    if (logiraniKorisnikJSON) {
      const korisnik = JSON.parse(logiraniKorisnikJSON);
      postaviKorisnika(korisnik);
    }
  }, []);

  const handleLogout = () => {
   window.localStorage.removeItem('prijavljeniKorisnik')
   window.location.reload(true)
  };


  
 

  

  
  return (
    
    <div>
      {korisnik===null ? (
        prijava()
      ):
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
        <p className="nav-item nav-link"><b>{korisnik.ime}</b></p>
          <a href="#" className="nav-item nav-link" onClick={handleLogout}>Logout</a>
      </div>
  </div>
</div>
</nav>

            {visible?<div > 
              {print && print.map(c=>
                <Cars key={c.id} id={c.id} slika={c.slika} model={c.model} marka={c.marka} kilometri={c.kilometri} godiste={c.godiste} snagaMotora={c.snagaMotora} vrstaMotora={c.vrstaMotora} mjenjac={c.mjenjac} cijena={c.cijena} gume={c.gume} boja={c.boja} naplatci={c.naplatci} prikaziSve={()=>prikaziSve()} />)}
            </div>:<Slideshow/>}
            
  
                
        <Footer></Footer>
      </div>}
      </div>
  )} 
      

export default App;
