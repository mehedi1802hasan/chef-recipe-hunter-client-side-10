import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
        <div className='flex justify-center bg m-28'>
        <div className='p-40 m-40'>
            
     <button className="p-5 m-6 font-bold text-red-500 border"><Link to='/'> <p>GO back</p> </Link></button>
     </div>
     </div>
    
    );
};

export default Error;