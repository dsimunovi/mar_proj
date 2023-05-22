import axios from "axios";

const osnovniUrl = "http://localhost:3001/api/cars";



const dohvatiSve = () => {
  return axios.get(osnovniUrl);
};

const stvori = (noviObjekt) => {
  return axios.post(osnovniUrl, noviObjekt);
};

const osvjezi = (id, noviObjekt) => {
  
  return axios.put(`${osnovniUrl}/${id}`, noviObjekt);
};

const brisi = (id) => {
  return axios.delete(`${osnovniUrl}/${id}`);
};
const dohvatiJednog = async (id) => {
  return axios.get(`${osnovniUrl}/${id}`);
};



export default { dohvatiSve, stvori, osvjezi, brisi, dohvatiJednog};
