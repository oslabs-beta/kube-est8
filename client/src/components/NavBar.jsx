import React from 'react';
import mainLogo from '../assets/images/logo.png';


const NavBar = () => {

    return (

      <div className='NavBar'>
        <div className='logoBox'>
          <img className='logo' src={mainLogo}/>
          <h1 className='mainTitle' >Kube Est8</h1>
        </div>
      </div>

    )
  }

  export default NavBar;