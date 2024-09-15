import React from 'react'
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

export default function Login() {
  return (
    <div className='frm-login'>
        <div><label className='challengers'>devchallenges</label></div>
        <div><label className='negrita titulo'>Join thousands of learners from <br/> around the world</label></div>
        <div><label>Master web development by making real-life projects. There are multiple paths for you to choose.</label></div>
        
        <IconField iconPosition="left">
            <InputIcon className="pi pi-envelope"> </InputIcon>
            <InputText v-model="value1" placeholder="Email"/>
        </IconField>
        <IconField iconPosition="left">
            <InputIcon className="pi pi-lock"> </InputIcon>
            <InputText v-model="value1" placeholder="Password" type='password' />
        </IconField>
        <Button label="Start coding now" />
        <div className='seccion-texto-profile'>
            <label> or continue with these social profile</label>
            <div className='seccion-iconos-social'>
                <i className="pi pi-google"></i>
                <i className="pi pi-facebook"></i>
                <i className="pi pi-twitter"></i>
                <i className="pi pi-github"></i>
            </div>
        </div>
        
    </div>
  )
}
