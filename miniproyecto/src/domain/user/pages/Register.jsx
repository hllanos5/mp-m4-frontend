
import React, { useState } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { Dialog } from 'primereact/dialog';

export default function Register() {

    const setLocation = useNavigate();
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    const header = <div className="font-bold mb-3">Ingrese Contraseña</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Sugerencias</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>Al menos 1 letra mayuscula</li>
                <li>Al menos 1 letra minuscula</li>
                <li>Al menos 1 dato numerico</li>
                <li>Mínimo 8 caracteres</li>
            </ul>
        </>
    );

    const handleRegister = async e => {
        e.preventDefault();
        let pattern  = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/
        console.log(pattern);
        if(!pattern.test(e.target.password.value)){
            setVisible(true);
        }
        
        const data = {
            correo: e.target.username.value,
            password: e.target.password.value,
        };

        crearUsuario(data)
    };

    const handleRedirectToLogin = async e => {
        setLocation('/');
    }
  
    return (
        <>
        <form onSubmit={handleRegister}>
            <div className='frm-login'>
                <div><label className='challengers'>devchallenges</label></div>
                <div><label className='negrita titulo'>Join thousands of learners from <br/> around the world</label></div>
                <div><label>Master web development by making real-life projects. There are multiple paths for you to choose.</label></div>
                
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-envelope"> </InputIcon>
                    <InputText v-model="value1" placeholder="Email" name='username'/>
                </IconField>
                <IconField iconPosition="left">
                    <Password  value={value} onChange={(e) => setValue(e.target.value)} header={header} footer={footer} name='password' />
                </IconField>
                <Button label="Start coding now"  type='submit'/>
                <div className='seccion-texto-profile'>
                    <label> or continue with these social profile</label>
                    <div className='seccion-iconos-social'>
                        <i className="pi pi-google"></i>
                        <i className="pi pi-facebook"></i>
                        <i className="pi pi-twitter"></i>
                        <i className="pi pi-github"></i>
                    </div>
                </div>
                <div className='navegacion'>
                    Adready a member ? <span onClick={handleRedirectToLogin}>Login</span>
                </div>
                
            </div>
        </form>
        <Dialog header="Mensaje" visible={visible} style={{ width: '350px' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                   Datos incorrectos por favor verificar
                </p>
        </Dialog>
        </>
    
  )
}
