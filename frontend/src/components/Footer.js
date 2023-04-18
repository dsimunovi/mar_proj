import React, { useState } from 'react';
import './Footer.css';

const Footer=()=>{
    return(
        <div>
            <footer>
  <div className="container foot">
    <div className="row1">
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div id="logo-footer">
        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/audi-8-332760.png" height="80" />
        <label>AUTO SALON ZRILIĆ</label>
        </div>
      </div>
      <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
        <div className="">
          <h4>Quick Link</h4>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-decoration-none">Home</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">Products</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">Service</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4>Address</h4>
          <ul className="list-unstyled">
            <li>
              <p>+017367234</p>
            </li>
            <li>
              <p><a href="#">JhoneDoe@gmail.com</a>
              </p>
            </li>
            <li>
              <p>New York
                City in New York State
                New York City comprises 5 boroughs sitting where the Hudson River meets th</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
        </div>
    )
}

export default Footer;