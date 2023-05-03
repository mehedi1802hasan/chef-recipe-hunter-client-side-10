import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider';
import { Link } from 'react-router-dom';
const Registration = () => {
  const {signUp}=useContext(AuthContext)
  const handleSubmit=(event)=>{
        event.preventDefault()
       
     const form=event.target;
     const email=form.email.value;
     const password=form.password.value;
   
     console.log(email,password)
     signUp(email,password)
     .then(result=>{
      const singgedUser=result.user;
      console.log(singgedUser)
     })
     .catch(error=>{
        console.log(error.message)
     })

    }
    return (
        <div>
           <div>
            <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <form onSubmit={handleSubmit}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
         
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Registration</button>
        </div>
      </form>
      <p className='text-center'>Have you account?. Please go to <Link className='btn-link' to="/login">Login</Link></p>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Registration;