import { useContext, createContext, useEffect } from "react";
import { useState } from 'react';
import React from 'react'; 
//import authentication from firebase library
import { auth } from '../firebase'; 
//all of the features needed from firebase
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //useState Functionality
  const [user, setUser] = useState({}); 

    //declare function for googleSignIn
    const googleSignIn = () => {
        //create GoogleAuthProvider (this is built in method with firebase)
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
          prompt: 'select_account'
        })
        //take auth and provider with pop up
        signInWithPopup(auth, provider);
        // signInWithRedirect(auth, provider);
    }

    //function for logOut (pass this down to return statement)
    const logOut = () => {
      signOut(auth)
    }

  //checking for onAuthStateChanged - imported from firebase
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
      setUser(currentUser)
      // console.log('User', currentUser)
    })
    return () => {
      unsubscribe();
    }
  }, [])


  return (
    // pass down user 
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
