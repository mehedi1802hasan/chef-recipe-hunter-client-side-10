
import React, { Children,useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged,signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';

export const AuthContext=createContext(null)
const Provider = ({children}) => {
    const auth=getAuth(app)
    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(true);
    const signUp=(email,password)=>{ 
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
       
      }
      const googleProvider = new GoogleAuthProvider();
      const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
     }
     

      const loginUser=(email,password)=>{
      //  setLoading(true)
       return  signInWithEmailAndPassword(auth, email, password)
      
     }
    
      


     useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
         setUser(currentUser);
         console.log('auth state changed',currentUser)
        setLoading(false);
         })
          return ()=> {unsubscribe()}
     },[])
     const logOut=()=>{
        return signOut(auth)
   }
      const authInfo={
       
      
         signUp,
         user,
         loginUser,
         logOut,
         loading,
         googleLogin
         
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