import axios from "axios";

const Url = "http://localhost:3001/api/users";

let token = null
const postaviToken = (noviToken) => {
    token = `bearer ${noviToken}`
}

const dohvatiSveKorisnike = () => {
  const config = {
    headers: { Authorization: token }
}
  const odg=axios.get(Url,config);
  return odg
};

const stvoriKorisnika = (noviKorisnik) => {
  return axios.post(Url, noviKorisnik);
};

const osvjeziKorisnika = (id, noviKorisnik) => {
  return axios.put(`${Url}/${id}`, noviKorisnik);
};

const brisiKorisnika = (id) => {
  return axios.delete(`${Url}/${id}`);
};
const dohvatiJednogKorisnika = async (username) => {
  return axios.get(`${Url}/${username}`);
};

export default {
  dohvatiSveKorisnike,
  stvoriKorisnika,
  osvjeziKorisnika,
  brisiKorisnika,
  dohvatiJednogKorisnika,
  postaviToken
};
