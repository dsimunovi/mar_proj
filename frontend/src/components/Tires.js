import React, { useState,useEffect } from "react";
import './Tires.css'
import tiresActions from '../services/tires';

const Tires=({changeTire})=>{
    const [tires, getTires]=useState([])
    const sveGume=tires
    const nove=sveGume.filter((n)=>
      n.original===false
      )
    
    const content=nove.map((t)=>
  
      <option key={t.id} value={t.id} >{t.marka} {t.tip} {t.cijena}€</option>
      
    )
    
    useEffect(()=>{
      tiresActions.dohvatiSve1()
      .then(res=>{
        getTires(res.data)
      console.log(res.data)})
    },[]) 
    

    
    return(
      <select 
      onChange={(e)=>changeTire(e.target.value)} >
        {content}

      </select>
        )
}

export default Tires
