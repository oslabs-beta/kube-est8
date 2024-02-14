import React from 'react';
import ReactDOM from 'react-dom';
import mainLogo from '../assets/images/logo.png';


const clusterMetricsList = ['cpu', 'memory']


const SideBar = (props) => {

  return (

    <div className="Sidebar" clusterInfoRender={props.clusterInfoRender} podInfoRender={props.podInfoRender}>

    <img className='logo' src={mainLogo} onClick={props.homeRender}></img>


      <div class="sidebar-buttons">
        <a className='a-36' onClick={props.clusterInfoRender}>Cluster Overview</a>
        <a className='a-36' onClick={props.podInfoRender}>Deployments / Pods</a>
        <a className='a-36' >Vulnerabilities Scan</a>
        <a className='a-36' >Settings</a>
      </div>

    </div>


  )
}

export default SideBar;