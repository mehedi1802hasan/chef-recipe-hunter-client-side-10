import React, { Children, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';

export const AuthContext=createContext(null)
const Provider = ({children}) => {
    const auth=getAuth(app)
    const [user,setUser]=useState('')
    const signUp=(email,password)=>{ 
       // setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
       
      }
      const loginUser=(email,password)=>{
      //  setLoading(true)
       return  signInWithEmailAndPassword(auth, email, password)
      
     }
      const authInfo={
        user,
         signUp,
         loginUser
         
        }
    return (
        <div>
             <AuthContext.Provider value={authInfo}>
            {children}
           </AuthContext.Provider> 
        </div>
    );
};

export default Provider;