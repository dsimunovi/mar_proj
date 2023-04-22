import React, { useState } from 'react';
import "./Login.css"




const Prijava=( {userLogin,
  promjenaImena,
  promjenaLozinke,
  username,
  pass},{userRegistration,promjenaNicka, promjenaNamea,promjenaEmail,promjenaPassworda,
  usernameReg, nameReg,emailReg,passReg}) =>{


  return(
    <div id="log-reg">
<div id='div-prijava' >


<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div className="text-center mb-3" id="labela">
        <p>Sign into your account:</p>
    </div>



      
      <div className="form-outline mb-4">
        <input type="text" id="loginName" className="form-control" name="Username" value={username} onChange={promjenaImena}/>
        <label className="form-label" htmlFor="loginName" id="user">Username</label>
      </div>

      
      <div className="form-outline mb-4">
        <input type="password" id="loginPassword" className="form-control" name="Password" value={pass} onChange={promjenaLozinke}  />
        <label className="form-label" htmlFor="loginPassword" id="pass">Password</label>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-4 prijava" onClick={userLogin}>Sign in</button>

      
    </form>
  </div>

</div>
</div>
<div id='div-reg' >


<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div className="text-center mb-3" id="labela">
        <p>Create your account:</p>
    </div>



      
      <div className="form-outline mb-4">
        <input type="text" id="registerUsername" className="form-control" name="username" value={usernameReg} onChange={promjenaNicka}/>
        <label className="form-label" htmlFor="registerUsername" id="user">Username</label>
      </div>
      <div className="form-outline mb-4">
        <input type="text" id="registerName" className="form-control" name="name" value={nameReg} onChange={promjenaNamea}/>
        <label className="form-label" htmlFor="registerName" id="user">Name</label>
      </div>
      <div className="form-outline mb-4">
        <input type="text" id="registerEmail" className="form-control" name="Username" value={emailReg} onChange={promjenaEmail}/>
        <label className="form-label" htmlFor="registerEmail" id="user">E-mail</label>
      </div>

      
      <div className="form-outline mb-4">
        <input type="password" id="registerPassword" className="form-control" name="Password" value={passReg} onChange={promjenaPassworda}  />
        <label className="form-label" htmlFor="registerPassword" id="pass">Password</label>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-4 prijava" onClick={userRegistration}>Sign up</button>

      
    </form>
  </div>

</div>
</div>

        
        </div>

  )
}

export default Prijava;