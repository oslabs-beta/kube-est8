import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
import mainLogo from '../assets/images/logo.png';


const SideBar = (props) => {



  return (

    <div className="Sidebar" clusterInfoRender={props.clusterInfoRender} nodeInfoRender={props.nodeInfoRender} flowChartRender = {props.flowChartRender} throughputRender={props.throughputRender}>

    <img className='logo' src={mainLogo} onClick={props.homeRender}></img>


      <div class="sidebar-buttons">
        <a className='a-36' onClick={props.clusterInfoRender}>Cluster Overview</a>
        <a className='a-36' onClick={props.nodeInfoRender}>My Nodes</a>
        <a className='a-36' onClick={props.flowChartRender}>Flow Chart</a>
        <a className='a-36' onClick={props.throughputRender}>Throughput</a>
      </div>

    </div>
  )
};

export default SideBar;