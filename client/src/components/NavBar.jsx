import React from 'react';
import mainLogo from '../assets/images/logo.png';
import { Link } from 'react-router-dom'; 
import '../assets/stylesheets/styles.css'
import {UserAuth} from '../context/AuthContent'


const NavBar = () => {
  const {user, logOut} = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error)
    }
  }

    return (

      <div className='NavBar'>
        {/* <div className='logoBox'> */}
          {/* <img className='logo' src={mainLogo}/> */}
          <h1 className='mainTitle' >Kube Est8</h1>
        {/* </div> */}
        {/* if user is logged in, display logout button, otherwise display sign in button */}
        {user?.displayName ? <button onClick={handleSignOut}>Logout</button> : <Link to='/signin' className='signInLink'><div>Sign In!</div></Link> }
      </div>

    )
  }

  export default NavBar;