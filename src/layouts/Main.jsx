import React from 'react';

import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="bg-slate-300 ">
           <Outlet/>
    
        </div>
    );
};

export default Main;