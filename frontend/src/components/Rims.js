import React ,{useEffect,useState}from "react";
import './Rims.css'
import rimsActions from '../services/rims'

const Rims=({changeRims})=>{

    const [rims, getRims]=useState([])
    const sviNaplatci=rims
    
    const content=sviNaplatci.map((r)=>
  
      <option key={r.id} value={r.id} > {r.tip} {r.cijena}€</option>)

      useEffect(()=>{
        rimsActions.dohvatiSveNaplatke()
        .then(res=>{
          getRims(res.data)
        console.log(res.data)})
      },[]) 
    return(


        
        <select 
      onChange={(e)=>changeRims(e.target.value)} >
        {content}

      </select>
        )
}

export default Rims