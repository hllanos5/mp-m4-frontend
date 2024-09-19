import React from 'react'
import { useContext } from 'react';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { AuthContext } from '../../shared/context/authContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { loginMutation } = useContext(AuthContext);
    const setLocation = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();
        const data = {
            correo: e.target.username.value,
            password: e.target.password.value,
        };
        await loginMutation.mutate(data);
    };

    const handleRedirectToRegister = async e => {
        setLocation('/register');
    }
  
    return (
    <form onSubmit={handleLogin}>
        <div className='frm-login'>
            <div><label className='challengers'>devchallenges</label></div>
            <div><label className='negrita titulo'>Login</label></div>
            
            <IconField iconPosition="left">
                <InputIcon className="pi pi-envelope"> </InputIcon>
                <InputText v-model="value1" placeholder="Email" name='username'/>
            </IconField>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-lock"> </InputIcon>
                <InputText v-model="value1" placeholder="Password" type='password' name='password'/>
            </IconField>
            <Button label="Login"  type='submit'/>
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
                Dont have an account yet ? <span onClick={handleRedirectToRegister}>Register</span>
            </div>
            
        </div>
    </form>
  )
}
