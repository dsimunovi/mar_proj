import axios from "axios";

const Url = "http://localhost:3001/api/tires";

const dohvatiSve1 = () => {
  return axios.get(Url);
};

const stvori = (novaGuma) => {
  return axios.post(Url, novaGuma);
};

const osvjezi = (id, novaGuma) => {
  return axios.put(`${Url}/${id}`, novaGuma);
};

const brisi = (id) => {
  return axios.delete(`${Url}/${id}`);
};
const dohvatiJedneGume = async (id) => {
  return axios.get(`${Url}/${id}`);
};

export default { dohvatiSve1, stvori, osvjezi, brisi, dohvatiJedneGume };
