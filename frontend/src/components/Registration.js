import React, { useState } from 'react';
import "./Login.css"
import usersActions from '../services/users'
import { Link } from 'react-router-dom';




const Registracija=() =>{

    const [usernameReg,promjenaNicka]=useState("")
    const [nameReg,promjenaNamea]=useState("")
    const [emailReg, promjenaEmail]=useState("")
    const [passReg,promjenaPassworda]=useState("")
    const [noviKorisnik, postaviNovogKorisnika]=useState(null)



    const userRegistration=async(e)=>{
      e.preventDefault();
      try{
       
        const korisnikNovi=await usersActions.stvoriKorisnika({
          username:usernameReg,
          ime:nameReg,
          email:emailReg,
          passHash:passReg
        })
        postaviNovogKorisnika(korisnikNovi);
        promjenaNicka("");
        promjenaNamea("");
        promjenaEmail("")
        promjenaPassworda("")
        console.log(noviKorisnik);
        
      }
      catch(exception){
        alert("Probajte s drugim podacima")
      }
    }
  return(
   <div className='login-glavni'>
<div id='div-reg' >


<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div className="text-center mb-3" id="labela">
        <p>Create your account:</p>
    </div>



      
      <div className="form-outline mb-4">
        <input type="text" id="registerUsername" className="form-control" name="username" value={usernameReg} onChange={(e)=>promjenaNicka(e.target.value)}/>
        <label className="form-label" htmlFor="registerUsername" id="userReg">Username</label>
      </div>
      <div className="form-outline mb-4">
        <input type="text" id="registerName" className="form-control" name="name" value={nameReg} onChange={(e)=>promjenaNamea(e.target.value)}/>
        <label className="form-label" htmlFor="registerName" id="nameReg">Name</label>
      </div>
      <div className="form-outline mb-4">
        <input type="text" id="registerEmail" className="form-control" name="email" value={emailReg} onChange={(e)=>promjenaEmail(e.target.value)}/>
        <label className="form-label" htmlFor="registerEmail" id="emailReg">E-mail</label>
      </div>

      
      <div className="form-outline mb-4">
        <input type="password" id="registerPassword" className="form-control" name="pass" value={passReg} onChange={(e)=>promjenaPassworda(e.target.value)}  />
        <label className="form-label" htmlFor="registerPassword" id="passReg">Password</label>
      </div>
      <div className="d-flex justify-content-center links">
						Have an account?<button className='link-to-reg'><Link to='/sign-in'>Sign in</Link></button>
					</div>

      <button type="submit" className="btn btn-primary btn-block mb-4 prijava" onClick={userRegistration}>Sign up</button>

      
    </form>
  </div>

</div>
</div>
</div>

  )
}

export default Registracija;