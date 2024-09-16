import React, { useRef, useContext } from 'react'
import { Menubar } from 'primereact/menubar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../shared/context/authContext';

export default function Nav() {
    const { user } = useContext(AuthContext);

    const op = useRef(null);
    const setLocation = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        console.clear();
        setLocation('/');
      };

    const handleProfile = () => {
        setLocation('/profile-info');
    };

    const start = (
        <div className='seccion-izquierda'>
            <i className='pi pi-code'></i>
            <label> devchallenges</label>
        </div>
    )
    const end = (
        <div className='seccion-derecha'>
            <Avatar image={`http://localhost:3000/api/images/${user?.imagen}`} shape="circle" />
            <div className='nombre'>{user?.nombre} {user?.paterno} {user?.materno}</div>
            <i className='pi pi-angle-down ver-perfil' onClick={(e) => op.current.toggle(e)}></i>
            <OverlayPanel ref={op}>
                <div onClick={handleProfile}><i className='pi pi-user icono'></i> My profile</div>
                <div> <i className='pi pi-users icono'></i> Group Chat</div>
                <Divider />
                <div className='logout' onClick={handleLogout}> <i className='pi pi-sign-out'></i> Logout</div>
            </OverlayPanel>
        </div>
    );

    return (
        <div className="nav">
            <Menubar start={start} end={end} />
        </div>
    )
}
