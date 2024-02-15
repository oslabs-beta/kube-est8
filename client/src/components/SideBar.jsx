import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
import mainLogo from '../assets/images/logo.png';


const SideBar = (props) => {

  // It seems this code on line 9 is not been use
  const clusterMetricsList = ['cpu', 'memory']

  return (

    <div className="Sidebar" clusterInfoRender={props.clusterInfoRender} podInfoRender={props.podInfoRender} flowChartRender = {props.flowChartRender}>

    <img className='logo' src={mainLogo} onClick={props.homeRender}></img>


      <div class="sidebar-buttons">
        <a className='a-36' onClick={props.clusterInfoRender}>Cluster Overview</a>
        <a className='a-36' onClick={props.podInfoRender}>My Nodes</a>
        <a className='a-36' onClick={props.flowChartRender}>Flow Chart </a>
        <a className='a-36' >Settings</a>
      </div>

    </div>
  )
};

export default SideBar;