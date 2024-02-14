import { useContext, createContext } from "react";
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

    //declare function for googleSignIn
    const googleSignIn = () => {
        //create GoogleAuthProvider (this is built in method with firebase)
        const provider = new GoogleAuthProvider();
        //take auth and provider with pop up
        signInWithPopup(auth, provider);
    }


  return (
    <AuthContext.Provider value={{ googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
