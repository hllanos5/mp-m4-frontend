import axios from 'axios';

export const obtenerImagen = async ({ imagen }) => {
  const res = await axios.get(`http://localhost:3000/api/images/${imagen}`);
  return res.data;
};