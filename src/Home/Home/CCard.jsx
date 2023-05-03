import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import NavPart from '../../nav/NavPart';

const CCard = () => {
    const { id } = useParams();
    const [chef, setChef] = useState({});
    
    useEffect(() => {
        fetch(`http://localhost:5000/chefs/${id}`)
            .then(res => res.json())
           
            .then(data => setChef(data))
        

            .catch(error => console.log(error))
    }, [id]);
    
    return (
       <div>
        <NavPart></NavPart>
         <div>
            <h3>hiii</h3>
            {chef &&  (
                <div>
                    <h3>{chef.chefName}</h3>
                    <img src={chef.chefPicture} alt="chefPicture" />
                </div>
            )}
        </div>
        <Footer></Footer>
       </div>
    );
};

export default CCard;
