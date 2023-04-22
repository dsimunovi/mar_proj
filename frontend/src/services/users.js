import axios from 'axios'

const Url = 'http://localhost:3001/api/users'
 
const dohvatiSveKorisnike = () => {   
    return axios.get(Url);
}
 
const stvoriKorisnika = noviKorisnik => {
    return axios.post(Url, noviKorisnik)
}
 
const osvjeziKorisnika = (id, noviKorisnik) => {
    return axios.put(`${Url}/${id}`, noviKorisnik)
}

const brisiKorisnika = id => {
    return axios.delete(`${Url}/${id}`)
}
const dohvatiJednogKorisnika = async (id) => {
    return axios.get(`${Url}/${id}`);
}

 
export default { dohvatiSveKorisnike, stvoriKorisnika, osvjeziKorisnika, brisiKorisnika, dohvatiJednogKorisnika}