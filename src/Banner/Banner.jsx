import React from 'react';

const Banner = () => {
    return (
        
        <div className='p-10 mt-1 mb-5 md:flex bg-slate-200'>
        <div className="md:w-6/12 shadow-x card bg-base-100">
        <div className="p-28 card-body">
       <h1 className="font-bold text-amber-500 card-title">One Step <br/> Closer To Your<br/>Dream Job </h1>
      <p className="flex justify-center text-amber-800">Join our talent community
Get connected!  Stay informed about opportunities that match your interest.</p>
     
    </div>
   </div>
   <div className='w-8/12'>
       <img className='w-full h-96 ' src='https://img.freepik.com/free-vector/chef-character-design_1322-128.jpg?w=740&t=st=1683143426~exp=1683144026~hmac=17e44d42bc0744ac9a089939133a1acc908e808aeac63a5e5781448e843848a9' />
   </div>
   </div>
       
    );
};

export default Banner;