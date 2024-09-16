import React, { useRef } from 'react'
import { Menubar } from 'primereact/menubar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';

export default function Nav() {
    const op = useRef(null);

    const start = (
        <div className='seccion-izquierda'>
            <i className='pi pi-code'></i>
            <label> devchallenges</label>
        </div>
    )
    const end = (
        <div className='seccion-derecha'>
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <div className='nombre'>Hans Llanos</div>
            <i className='pi pi-angle-down ver-perfil' onClick={(e) => op.current.toggle(e)}></i>
            <OverlayPanel ref={op}>
                <div><i className='pi pi-user icono'></i> My profile</div>
                <div> <i className='pi pi-users icono'></i> Group Chat</div>
                <Divider />
                <div className='logout'> <i className='pi pi-sign-out'></i> Logout</div>
            </OverlayPanel>
        </div>
    );

    return (
        <div className="nav">
            <Menubar start={start} end={end} />
        </div>
    )
}
