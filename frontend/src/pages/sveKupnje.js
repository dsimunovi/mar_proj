import React, { useState, useEffect } from "react";
import usersActions from '../services/users'
import kupnjeAkcije from '../services/buy'
import Kupnje from "../components/Kupnje";
import carActions from '../services/cars'

const SveKupnje=()=>{
    const [kupnje, postaviKupnje]=useState([])
    const [korisnik, postaviKorisnika]=useState(null)
    const [user, setUser]=useState(null)
    const [car, setCar]=useState([])
    


    useEffect(() => {
        const logiraniKorisnikJSON = window.localStorage.getItem(
            "prijavljeniKorisnik"
        );
        if (logiraniKorisnikJSON) {
            const korisnik = JSON.parse(logiraniKorisnikJSON);
            postaviKorisnika(korisnik);
            kupnjeAkcije.postaviToken(korisnik.token)
            kupnjeAkcije.dohvatiSve()
                .then(res => postaviKupnje(res.data))
    
        }
    }, []);

    return(
        <div>
            <h1>Moja vozila</h1>
            <table className="table">
            <thead>
                    <tr>
                        <th>Auto</th>
                        <th>Gume</th>
                        <th>Naplatci</th>
                        <th>Kupac</th>
                        <th>Ukupno</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {kupnje.map(k=>
                        <Kupnje key={k.id} car={k.car} tire={k.tire} rim={k.rim} kupac={k.korisnik.ime}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default SveKupnje