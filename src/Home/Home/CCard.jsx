import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import NavPart from '../../nav/NavPart';
import { TiHeartFullOutline } from 'react-icons/ti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarRatings from 'react-star-ratings';
const CCard = () => {
  const { id } = useParams();
  const [chef, setChef] = useState({});
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    fetch(`https://italian-kichen-chef-server-mehedi1802hasan.vercel.app/chefs/${id}`)
      .then(res => res.json())
      .then(data => setChef(data))
      .catch(error => console.log(error))
  }, [id]);

  const handleFavoriteClick = (recipeIndex) => {
    toast('Added to Favorites!');
    setFavorites([...favorites, recipeIndex]);
  };
  
  const isFavorite = (recipeIndex) => {
    return favorites.includes(recipeIndex);
  };

  return (
    <div>
      <NavPart />
      <div>
        {chef && (
          <div>
            <div className="grid shadow-xl md:grid-cols-2 card card-side bg-base-100">
              <figure>
                <img className='h-full' src={chef.chefPicture} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <span className="font-bold">Recipi Name:</span> {chef.chefName}!
                </h2>
                <h5>
                  <span className="font-bold">Description:</span> {chef.chefDescription}
                </h5>
                <h4>
                  <span className="font-bold">Likes:</span> {chef.likes}
                </h4>
                <h4>
                  <span className="font-bold">Recipies:</span> {chef.numberOfRecipes}
                </h4>
                <h4>
                  <span className="font-bold">Experience: </span>
                  {chef.yearsOfExperience}
                </h4>
                <h1 className="text-center text-yellow-500">Popular Recipies</h1>
                <div className="grid gap-1 md:grid-cols-2">
                  {chef.recipes?.map((recipe, index) => (
                    <div key={index} className="h-full shadow-xl w-72 card bg-base-100">
                      <div className="card-body">
                        <h2 className="card-title">{recipe.name}</h2>
                        <p>
                          <span className="font-bold">Ingredients:</span> {recipe.ingredients}
                        </p>
                        <p>
                          <span className="font-bold">Method:</span> {recipe.method}
                        </p>
                        
                        <p className='flex gap-2'>
      <div className='text-center'> Rating :  <StarRatings
  rating={recipe.rating}
  starDimension="20px"
  starSpacing="5px"
  starRatedColor="red"
/></div>
<div className='mt-1'> {recipe?.rating}</div>

        </p>
            
                        <div className="justify-end card-actions">
                          <button
                            className="btn btn-primary"
                            onClick={() => handleFavoriteClick(index)}
                            disabled={isFavorite(index)}
                          >
                            <TiHeartFullOutline />
                            <span>Favorite</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
};

export default CCard;
