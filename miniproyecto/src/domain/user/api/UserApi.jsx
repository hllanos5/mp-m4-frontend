import axios from 'axios';

export const obtenerImagen = async ({ imagen }) => {
  const res = await axios.get(`http://localhost:3000/api/images/${imagen}`);
  return res.data;
};


export const modificarUsuario = async ({ id,  nombre, paterno, materno, biografia, telefono, correo, password }) => {
    const res = await axios.patch(`http://localhost:3000/api/user/${id}`,{
        nombre:nombre,
        paterno: paterno,
        materno: materno,
        biografia: biografia,
        telefono: telefono,
        correo: correo,
        password: password
    });
  };