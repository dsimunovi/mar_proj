import axios from "axios";

const URLnaplatak = "http://localhost:3001/api/rims";

const dohvatiSveNaplatke = () => {
  return axios.get(URLnaplatak);
};

const stvori = (noviNaplatak) => {
  return axios.post(URLnaplatak, noviNaplatak);
};

const osvjezi = (id, noviNaplatak) => {
  return axios.put(`${URLnaplatak}/${id}`, noviNaplatak);
};

const brisi = (id) => {
  return axios.delete(`${URLnaplatak}/${id}`);
};

const dohvatiJedanNaplatak = async (id) => {
  return axios.get(`${URLnaplatak}/${id}`);
};

export default {
  dohvatiSveNaplatke,
  stvori,
  osvjezi,
  brisi,
  dohvatiJedanNaplatak,
};
