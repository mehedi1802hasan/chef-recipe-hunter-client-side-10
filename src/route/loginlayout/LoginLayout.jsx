import React from 'react';
import NavPart from '../../nav/NavPart';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <NavPart></NavPart>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;