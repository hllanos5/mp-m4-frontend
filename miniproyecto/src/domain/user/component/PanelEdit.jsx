import React, { useContext, useEffect, useState } from 'react'
import { Image } from 'primereact/image';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { AuthContext } from '../../shared/context/authContext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { modificarUsuario } from '../api/UserApi';

export default function PanelEdit() {
    const { user } = useContext(AuthContext);

    console.log(user);

    const [nombre, setNombre] = useState('');
    const [paterno, setPaterno] = useState('');
    const [materno, setMaterno] = useState('');
    const [biografia, setBiografia] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const setLocation = useNavigate();

    const handleProfile = () => {
        setLocation('/profile-info');
      };

    const handleUpdateUser= async e => {
        e.preventDefault();
        const data = {
            id: user?.id,
            nombre:nombre,
            paterno: paterno,
            materno: materno,
            biografia: biografia,
            telefono: telefono,
            correo: correo,
            password:  e.target.password.getAttribute("value")
        };

        const rawResponse = await fetch(`http://localhost:3000/api/user/${data.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(data)
        });

        setLocation('/profile-info');
    }

    useEffect(() => {
        setNombre(user?.nombre)
        setPaterno(user?.paterno)
        setMaterno(user?.materno)
        setBiografia(user?.biografia)
        setTelefono(user?.telefono)
        setCorreo(user?.correo)
        setPassword(user?.password)

      }, [user]) 

  return (
    <>
        <div className='seccion-atras'>
            <i className='pi pi-angle-left' onClick={handleProfile}> Back</i>
        </div>
        <form onSubmit={handleUpdateUser}>
            <div className='panel-profile'>
                <div className='panel-edit'>
                    <div className='fila'>
                        <h3>Change info</h3>
                        <label>Changes will be reflected to every services</label>
                    </div>
                    <div className='fila'>
                        <Image src={`http://localhost:3000/api/images/${user?.imagen}`} alt="Image" width="100" />
                        <label className='change-photo'> CHANGE PHOTO</label>
                    </div>
                    <div className='fila'>
                        <label>Name</label>
                        <InputText placeholder='Enter your name...' className='p-inputtext-sm'  name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className='fila'>
                        <label>Paterno</label>
                        <InputText placeholder='Enter your apellido paterno...' className='p-inputtext-sm' name='paterno' value={paterno} onChange={(e) => setPaterno(e.target.value)}/>
                    </div>
                    <div className='fila'>
                        <label>Materno</label>
                        <InputText placeholder='Enter your apellido materno...' className='p-inputtext-sm' name='materno' value={materno} onChange={(e) => setMaterno(e.target.value)}/>
                    </div>
                    <div className='fila'>
                        <label>Bio</label>
                        <InputTextarea rows={5} cols={30} placeholder="Enter your bio..." name="biografia" value={biografia} onChange={(e) => setBiografia(e.target.value)}/>
                    </div>
                    <div className='fila'>
                        <label>Phone</label>
                        <InputText placeholder='Enter your phone...'name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div className='fila'>
                        <label>Email</label>
                        <InputText placeholder='Enter your Email...' name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                    </div>
                    <div className='fila'>
                        <label>Password</label>
                        <InputText placeholder='Enter your new password...' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='fila'>
                        <Button label="Save" severity="info" />
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
