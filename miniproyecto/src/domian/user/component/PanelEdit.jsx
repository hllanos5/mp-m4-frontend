import React from 'react'
import { Image } from 'primereact/image';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from 'primereact/button';

export default function PanelEdit() {
  return (
    <>
        <div className='seccion-atras'>
            <i className='pi pi-angle-left'> Back</i>
        </div>
        <div className='panel-profile'>
            <div className='panel-edit'>
                <div className='fila'>
                    <h3>Change info</h3>
                    <label>Changes will be reflected to every services</label>
                </div>
                <div className='fila'>
                    <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="100" />
                    <label className='change-photo'> CHANGE PHOTO</label>
                </div>
                <div className='fila'>
                    <label>Name</label>
                    <InputText placeholder='Enter your name...' className='p-inputtext-sm'/>
                </div>
                <div className='fila'>
                    <label>Bio</label>
                    <InputTextarea rows={5} cols={30} placeholder="Enter your bio..."/>
                </div>
                <div className='fila'>
                    <label>Phone</label>
                    <InputText placeholder='Enter your phone...'/>
                </div>
                <div className='fila'>
                    <label>Email</label>
                    <InputText placeholder='Enter your Email...'/>
                </div>
                <div className='fila'>
                    <label>Password</label>
                    <InputText placeholder='Enter your new password...' type='password'/>
                </div>
                <div className='fila'>
                    <Button label="Save" severity="info" />
                </div>
            </div>
        </div>
    </>
  )
}
