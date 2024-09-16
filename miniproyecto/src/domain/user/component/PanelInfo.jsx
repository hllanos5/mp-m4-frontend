import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { AuthContext } from '../../shared/context/authContext';
import { useNavigate } from 'react-router-dom';
import { obtenerImagen } from '../api/UserApi';

export default function PanelInfo() {
    const { user } = useContext(AuthContext);
    

  return (
    <>
        <div className='panel-profile'>
        <h3>Personal info</h3>
        <label>Basic info, like your name and photo</label>
        <div className='panel-info'>
            <div className='fila'>
                <div className='seccion-profile'>
                    <h4>Profile</h4>
                    <label> Some info may be visited to other people</label>
                </div>
                <div className='seccion-editar'>
                    <Button label="Edit" severity="secondary" outlined />
                </div>
            </div>
            <div className='fila'>
                <label>PHOTO</label>
                <Image src={`http://localhost:3000/api/images/${user?.imagen}`} alt="Image" width="100" />
            </div>
            <div className='fila'>
                <label>NAME</label>
                <label>{user?.nombre} {user?.paterno} {user?.materno}</label>
            </div>
            <div className='fila'>
                <label>BIO</label>
                <label>{user?.biografia}</label>
            </div>
            <div className='fila'>
                <label>PHONE</label>
                <label>{user?.telefono}</label>
            </div>
            <div className='fila'>
                <label>EMAIL</label>
                <label>{user?.correo}</label>
            </div>
            <div className='fila'>
                <label>PASSWORD</label>
                <label>************</label>
            </div>
        </div>
      </div>
    </>
  )
}
