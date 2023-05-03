import React from 'react';
import ChefCards from '../../Home/ChefCards';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import NavPart from '../../nav/NavPart';

const Secondlayout = () => {
    return (
        <div> 
         
            <Outlet></Outlet>
         
        </div>
    );
};

export default Secondlayout;