import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
import mainLogo from '../assets/images/logo.png';


const SideBar = (props) => {

  const clusterMetricsList = ['cpu', 'memory']

  const handleClick = () => {
    fetch('http://localhost:3333/metrics')
      .then((response) => response.json())
      .then((data) => {



        
        console.log('This is the data -------->', data);
      })
      .catch((error) => console.log(error));
  };


  return (

    <div className="Sidebar" clusterInfoRender={props.clusterInfoRender} podInfoRender={props.podInfoRender}>

    <img className='logo' src={mainLogo} onClick={props.homeRender}></img>


      <div class="sidebar-buttons">
        <a className='a-36' onClick={props.clusterInfoRender}>Cluster Overview</a>
        {/* <a className='a-36' onClick={props.podInfoRender}>My Nodes</a> */}
        <a className='a-36' onClick={handleClick}>My Nodes</a>
        <a className='a-36' >Vulnerabilities Scan</a>
        <a className='a-36' >Settings</a>
      </div>

    </div>
  )
};

export default SideBar;