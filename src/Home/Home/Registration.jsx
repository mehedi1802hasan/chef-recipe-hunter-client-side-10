import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Registration = () => {
  const { signUp } = useContext(AuthContext)
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('');
  const handleSubmit = (event) => {
    event.preventDefault()
   setSuccess('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    if(password.length<6){
      setError('please add minimum 6 carecters')
      return
  }
    console.log(name, email, password, photoURL);

    signUp(email, password, name, photoURL)
      .then(result => {
        const singgedUser = result.user;
        console.log(singgedUser);
        setSuccess('successfully registration');
        setError('')
      })
      .catch(error => {
        console.log(error.message);
        setSuccess('');
        setError(error.message);
       
        return
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
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" name="photoURL" placeholder="photo URL" className="input input-bordered" required />
                </div>
                <div className="mt-6 form-control">
                  <button className="btn btn-primary">Registration</button>
                </div>
              </form>
              <p className='text-center text-red-500'>{success}</p>
              <p className='text-center text-red-500'>{error}</p>
              <p className='text-center'>Have an account? Please go to <Link className='btn-link' to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
