import axios from "axios";

const Url = "http://localhost:3001/api/users";


const dohvatiSveKorisnike = () => {
  return axios.get(Url)
};

const stvoriKorisnika = (noviKorisnik) => {
  return axios.post(Url, noviKorisnik);
};

const osvjeziKorisnika = (username, noviKorisnik) => {
  return axios.put(`${Url}/${username}`, noviKorisnik);
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
  dohvatiJednogKorisnika
};
