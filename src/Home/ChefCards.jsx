import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChefCards = () => {
    const [chefs,setChefs]=useState([])
    useEffect(()=>{
        fetch('https://italian-kichen-chef-server-mehedi1802hasan.vercel.app/chefs')
        .then(res=>res.json())
      
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div className="grid gap-4 mb-5 md:grid-cols-3 justify-items-center">
         { 
            chefs.map( chef=>
                <div key={chef.id}>
                    <div className="shadow-xl w-max card bg-base-100">
  <figure><img className='h-40' src={chef.chefPicture} alt="chefPicture" /></figure>
  <div className="card-body">
    <h2 className="card-title">
   Name: {chef.chefName}
     
    </h2>
    <p>Experience:{chef.yearsOfExperience} year</p>
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