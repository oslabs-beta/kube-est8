import React from 'react';
import ReactDOM from 'react-dom';
import mainLogo from '../assets/images/logo.png';


const clusterMetricsList = ['cpu', 'memory']


const SideBar = (props) => {





  return (

    <div className="Sidebar" clusterInfoRender={props.clusterInfoRender}>

    <img className='logo' src={mainLogo}></img>


      <div class="sidebar-buttons">
        <a className='a-36' onClick={props.clusterInfoRender}>Cluster Overview</a>
        <a className='a-36' >Deployments / Pods</a>
        <a className='a-36' >Vulnerabilities Scan</a>
        <a className='a-36' >Settings</a>
      </div>

    </div>


  )
}

export default SideBar;