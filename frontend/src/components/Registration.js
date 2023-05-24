import React, { useState } from "react";
import "./Login.css";
import usersActions from "../services/users";
import { Link } from "react-router-dom";
import ValidateEmail from "./provjere";

const Registracija = () => {
  const [username, promjenaNicka] = useState("");
  const [ime, promjenaNamea] = useState("");
  const [email, promjenaEmail] = useState("");
  const [pass, promjenaPassworda] = useState("");
  const[provjera, postaviProvjeru]=useState([])
  const provjeriKorisnika=(username)=>{
    usersActions.dohvatiJednogKorisnika(username)
    .then (res=>postaviProvjeru)
  }
  

  const userRegistration = async (e) => {
    e.preventDefault();
    try {
      if(!ValidateEmail(email)){
        return 
      }
      const korisnikNovi = await usersActions.stvoriKorisnika({
        username,ime,pass,email
      });
      promjenaNicka("");
      promjenaNamea("");
      promjenaEmail("");
      promjenaPassworda("");
      alert("Uspješno ste se registrirali")
      window.location.reload(true)}
      
     catch (exception) {
      alert("Probajte s drugim podacima");
       promjenaNicka("");
      promjenaNamea("");
      promjenaEmail("");
      promjenaPassworda("");
    }
  };
  return (
    <div className="login-glavni">
      <div id="div-reg">
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              <div className="text-center mb-3" id="labela">
                <p>Create your account:</p>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="registerUsername"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={(e) => promjenaNicka(e.target.value)}
                />
                <label
                  className="form-label"
                  htmlFor="registerUsername"
                  id="userReg"
                >
                  Username
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="registerName"
                  className="form-control"
                  name="name"
                  value={ime}
                  onChange={(e) => promjenaNamea(e.target.value)}
                />
                <label
                  className="form-label"
                  htmlFor="registerName"
                  id="ime"
                >
                  Name
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="registerEmail"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => promjenaEmail(e.target.value)}
                />
                <label
                  className="form-label"
                  htmlFor="registerEmail"
                  id="email"
                >
                  E-mail
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="registerPassword"
                  className="form-control"
                  name="pass"
                  value={pass}
                  onChange={(e) => promjenaPassworda(e.target.value)}
                />
                <label
                  className="form-label"
                  htmlFor="registerPassword"
                  id="pass"
                >
                  Password
                </label>
              </div>
              <div className="d-flex justify-content-center links">
                Have an account?
                <button className="link-to-reg">
                  <Link to="/">Sign in</Link>
                </button>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 prijava"
                onClick={userRegistration}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registracija;
