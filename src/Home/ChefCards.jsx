import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChefCards = () => {
    const [chefs,setChefs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
      
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div className="grid gap-4 md:grid-cols-2 justify-items-center">
         { 
            chefs.map( chef=>
                <div key={chef.id}>
                    <div className="shadow-xl w-max card bg-base-100">
  <figure><img src={chef.chefPicture} alt="chefPicture" /></figure>
  <div className="card-body">
    <h2 className="card-title">
   Name: {chef.chefName}
     
    </h2>
    <p>yearsOfExperience:{chef.yearsOfExperience}</p>
    <div>
      <p >Recipes: {chef.numberOfRecipes} </p>
     
      
    </div>
   
  <Link to={`chefs/${chef.id}`} > <button className="btn btn-primary">view recepies</button></Link>
  </div>
</div>
                    
                    
  </div>     
  )
       }
          </div>
    );
};

export default ChefCards;