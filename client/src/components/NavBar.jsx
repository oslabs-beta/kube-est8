import React from 'react';
import mainLogo from '../assets/images/logo.png';
import { Link } from 'react-router-dom'; 
import '../assets/stylesheets/styles.css'


const NavBar = () => {

    return (

      <div className='NavBar'>
        {/* <div className='logoBox'> */}
          {/* <img className='logo' src={mainLogo}/> */}
          <h1 className='mainTitle' >Kube Est8</h1>
        {/* </div> */}
        <Link to='/signin' className='signInLink'>Sign In!</Link>
      </div>

    )
  }

  export default NavBar;