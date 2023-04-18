import React, { useState } from 'react';
import "./Login.css"


function Prijava() {

  return(
<div id='div-prijava'>


<div className="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div className="text-center mb-3" id="labela">
        <p>Sign into your account:</p>
    </div>



      
      <div class="form-outline mb-4">
        <input type="text" id="loginName" class="form-control" />
        <label class="form-label" for="loginName" id="user">Username</label>
      </div>

      
      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" class="form-control" />
        <label class="form-label" for="loginPassword" id="pass">Password</label>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-4" id="prijava">Sign in</button>

      
      <div class="text-center">
        <p>Not a member? <a href="#!" id='reg'>Register</a></p>
      </div>
    </form>
  </div>

</div>
</div>
  )
}

export default Prijava;