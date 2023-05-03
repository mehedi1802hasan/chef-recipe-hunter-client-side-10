import React from 'react';
import Home from '../Home/Home/Home';
import NavPart from '../nav/NavPart';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

import Secondlayout from './secondlayout/Secondlayout';
import ChefCards from '../Home/ChefCards';


const Main = () => {
    return (
        <div>
           
       <NavPart></NavPart>
       <Banner></Banner>
       <ChefCards></ChefCards>
      <Secondlayout></Secondlayout>
       <Footer></Footer>
        </div>
    );
};

export default Main;