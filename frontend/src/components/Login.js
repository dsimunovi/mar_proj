import React, { useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import prijavaAkcije from "../services/login";
import { useNavigate } from "react-router-dom";
import korisniciAkcije from '../services/users'

const Prijava = () => {

  const [username, promjenaImena] = useState("");
  const [pass, promjenaLozinke] = useState("");
  const navigate=useNavigate()

    const userLogin = async (e) => {
      e.preventDefault();
      try {
        const korisnik = await prijavaAkcije.prijava({
          username,
          pass,
        });
        window.localStorage.setItem(
          "prijavljeniKorisnik",
          JSON.stringify(korisnik)
          
        );
        korisniciAkcije.dohvatiJednogKorisnika(korisnik.username)
        
        promjenaImena("");
        promjenaLozinke("");
        navigate('/home')
        window.location.reload()
      } catch (exception) {
        alert("Neispravni podaci");
        promjenaImena("");
        promjenaLozinke("");
      }
    };



  return (
    <div className="login-glavni">
      <div id="div-prijava">
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={userLogin}>
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
    </div>
  );
};

export default Prijava;
