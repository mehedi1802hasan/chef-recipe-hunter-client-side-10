import React from 'react';

import NavPart from '../../nav/NavPart';
import Banner from '../../Banner/Banner';
import ChefCards from '../ChefCards';
import Secondlayout from '../../layouts/secondlayout/Secondlayout';
import Footer from '../../Footer/Footer';


const Home = () => {
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

export default Home;