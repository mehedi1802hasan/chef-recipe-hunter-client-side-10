import React from 'react';

const Registration = () => {
    return (
        <div>
           <div>
            <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
         
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Registration</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Registration;