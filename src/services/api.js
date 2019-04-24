import axios from 'axios';

const ENDPOINT = {
  MENU: 'mi-servicio',
  FORM: 'form'
};

const instance = axios.create({
  baseURL: `http://localhost:3001/`
});

export const fetchMenu = () => {
  return instance
    .get(ENDPOINT.MENU)
    .then(res => {
      return res.data;
    })
    .catch(err => console.error(err));
};
