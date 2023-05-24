import React ,{ useEffect, useState }from "react";
import './AddCar.css'
import gumeAkcija from '../services/tires'
import naplatciAkcija from '../services/rims'
import './AddCar.css'

const AddTireRim=()=>{
    const [guma, postaviGumu]=useState('')
    const [gumaMarka, postaviMarkuGume]=useState('')
    const [gumaTip, postaviTipGume]=useState('')
    const [gumaCijena, postaviCijenuGume]=useState('')
    const [naplatak, postaviNaplatak]=useState('')
    const [naplatakTip, postaviTipNaplatka]=useState('')
    const [naplatakCijena, postaviCijenuNaplatka]=useState('')

    const dodajGumu=(e)=>{
        e.preventDefault()
        try{
            if(guma==='' || gumaTip==='' || gumaMarka==='' || gumaCijena==='' || gumaTip==="Odaberi tip gume"){
                alert("Niste popunili sve podatke!")
                return;
            }
            const novaGuma={
            slika:guma,
            tip:gumaTip,
            marka:gumaMarka,
            cijena:gumaCijena,
            original:false
        }
        gumeAkcija.stvori(novaGuma)
        
        postaviCijenuGume('')
        postaviGumu('')
        postaviMarkuGume('')
        postaviTipGume('')
        alert("Uspješno se spremili gumu!")
        window.location.reload(true)}
        
        catch(exception){
            alert("Dogodila se greška!");
            postaviCijenuGume('')
        postaviGumu('')
        postaviMarkuGume('')
        postaviTipGume('')

        }
    }
    const dodajNaplatak=(e)=>{
        e.preventDefault()
        
        try{
            if(naplatak==='' || naplatakTip==='' || naplatakCijena===''|| naplatakTip==="Odaberi tip naplatka"){
                alert("Niste popunili sve podatke!")
                return;
            }
        const noviNaplatak={
            slika:naplatak,
            tip:naplatakTip,
            cijena:naplatakCijena,
            original:false
        }
        naplatciAkcija.stvori(noviNaplatak)
       
        postaviNaplatak('')
        postaviTipNaplatka('')
        postaviCijenuNaplatka('')
        alert("Uspješno ste spremili naplatak!")}
        catch(exception){
            alert("Dogodila se greška!");
            postaviNaplatak('')
            postaviTipNaplatka('')
            postaviCijenuNaplatka('')
        }
    }


    return(
        <div className="red">
            <div className="stupac">
                <h3>Gume na autu</h3>
                <label>URL slike guma: <input onChange={(e)=>postaviGumu(e.target.value)}></input></label>
                <label>Marka gume: <input onChange={(e)=>postaviMarkuGume(e.target.value)}></input></label>
                <label>Tip gume: <select onChange={(e)=>postaviTipGume(e.target.value)}>
                <option>Odaberi tip gume</option>
                <option>Zimske</option>
                <option>Ljetne</option>
                <option>Cjelogodišnje</option>
            </select></label>
            <label>Cijena gume: <input onChange={(e)=>postaviCijenuGume(e.target.value)}></input></label>
            <button onClick={dodajGumu}>Spremi gume</button>

            </div>
            <div className="stupac">
                <h3>Naplatci na autu</h3>
                <label>URL slike naplataka: <input onChange={(e)=>postaviNaplatak(e.target.value)}></input></label>
                <label>Tip naplatka: <select onChange={(e)=>postaviTipNaplatka(e.target.value)}>
                <option>Odaberi tip naplatka</option>
                <option>Čelični</option>
                <option>Aluminijski</option>
            </select></label>
            <label>Cijena naplataka: <input onChange={(e)=>postaviCijenuNaplatka(e.target.value)}></input></label>
            <button onClick={dodajNaplatak}>Spremi naplatke</button>

            </div>
        </div>
    )
}
export default AddTireRim