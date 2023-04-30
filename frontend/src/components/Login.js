import React, { useState, useEffect } from 'react';
import "./Login.css"
import Registracija from './Registration'
import { Link } from 'react-router-dom';
import prijavaAkcije from '../services/login'
import Layout from './Layout';




const Prijava=() =>{
  const [username, promjenaImena] = useState("");
  const [pass, promjenaLozinke] = useState("");
  const [korisnik, postaviKorisnika]=useState(null)

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
        promjenaImena("");
        promjenaLozinke("");
        console.log(korisnik);
      } catch (exception) {
        alert("Neispravni podaci");
      }
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
    

  return(
    <div>
    {korisnik===null ?
    <div className='login-glavni'>
<div id='div-prijava' >


<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div className="text-center mb-3" id="labela">
        <p>Sign into your account:</p>
    </div>



      
      <div className="form-outline mb-4">
        <input type="text" id="loginName" className="form-control" name="Username" value={username} onChange={(e)=>promjenaImena(e.target.value)}/>
        <label className="form-label" htmlFor="loginName" id="user">Username</label>
      </div>

      
      <div className="form-outline mb-4">
        <input type="password" id="loginPassword" className="form-control" name="Password" value={pass} onChange={(e)=>promjenaLozinke(e.target.value)}  />
        <label className="form-label" htmlFor="loginPassword" id="pass">Password</label>
      </div>
      <div className="d-flex justify-content-center links">
						Don't have an account? <button className='link-to-reg'><Link to='/sign-up'>Sign Up</Link></button>
					</div>

      <button type="submit" className="btn btn-primary btn-block mb-4 prijava" onClick={userLogin}>Sign in</button>
      

      
    </form>
  </div>

</div>
</div>
</div>:<Layout></Layout>}
</div>

  )
}

export default Prijava;