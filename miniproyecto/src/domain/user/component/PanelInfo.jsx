import React, { useContext } from 'react'
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { AuthContext } from '../../shared/context/authContext';
import { useNavigate } from 'react-router-dom';

export default function PanelInfo() {
    const { user } = useContext(AuthContext);
    console.log(user);

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
                <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="100" />
            </div>
            <div className='fila'>
                <label>NAME</label>
                <label>Hans Llanos</label>
            </div>
            <div className='fila'>
                <label>BIO</label>
                <label>Ing de Software</label>
            </div>
            <div className='fila'>
                <label>PHONE</label>
                <label>961287931</label>
            </div>
            <div className='fila'>
                <label>EMAIL</label>
                <label>hans.llanos@gmail.com</label>
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
