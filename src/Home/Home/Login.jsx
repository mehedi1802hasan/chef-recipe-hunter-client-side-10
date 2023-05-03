
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider';
const Login = () => {
  const {loginUser}=useContext(AuthContext)
  const handleSubmit=(event)=>{
    event.preventDefault()
   
 const form=event.target;
 const email=form.email.value;
 const password=form.password.value;
 console.log(email,password)
 loginUser(email,password)
 .then(result=>{
    const loggedUser=result.user;
    console.log(loggedUser);
 navigate(from,{replace:true})
 })
 .catch(error=>{
    console.log(error.message)
 })
}
    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Passwordddddd</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;