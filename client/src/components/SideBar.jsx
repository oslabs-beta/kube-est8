import React from 'react';
import ReactDOM from 'react-dom';
import mainLogo from '../assets/images/logo.png';


const clusterMetricsList = ['cpu', 'memory']


const SideBar = (props) => {

  return (

    <div className="Sidebar" clusterInfoRender={props.clusterInfoRender} podInfoRender={props.podInfoRender} flowChartRender = {props.flowChartRender}>

    <img className='logo' src={mainLogo}></img>


      <div class="sidebar-buttons">
        <a className='a-36' onClick={props.clusterInfoRender}>Cluster Overview</a>
        <a className='a-36' onClick={props.podInfoRender}>Deployments / Pods</a>
        <a className='a-36' onClick={props.flowChartRender}>Flow Chart </a>
        <a className='a-36' >Settings</a>
      </div>

    </div>


  )
}

export default SideBar;