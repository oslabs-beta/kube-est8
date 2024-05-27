import React, {useState} from 'react';
import {userAuth} from '../context/AuthContent.js';
import SideBar from './SideBar.jsx'
import Metrics from './Metrics.jsx'
import Flow from './FlowChart.js';

const Main = (props) => {

  const [display, setDisplay] = useState('');


  // FUNCTION TO CHANGE STATE FOR RENDERING CLUSTER INFO IN METRICS TABLE
  const clusterInfoRender = (e) => {
    setDisplay('clusterInfo');
    return;
  }

  // FUNCTION TO CHANGE STATE FOR RENDERING POD INFO
  const nodeInfoRender = (e) => {
    setDisplay('nodeInfo');
    return;
  }

 // FUNCTION TO CHANGE STATE FOR RENDERING
  const flowChartRender = (e) => {
    setDisplay('flowChart');
    return;
  }

  const homeRender = () => {
    setDisplay('');
    return;
  }

  const throughputRender = (e) => {
    setDisplay('throughput');
    return;
  }


  return (

    <div className='Main'>
      <SideBar display={display} homeRender={homeRender} clusterInfoRender={clusterInfoRender} nodeInfoRender={nodeInfoRender} flowChartRender = {flowChartRender} throughputRender={throughputRender}/>

      <Metrics display={display} homeRender={homeRender} clusterInfoRender={clusterInfoRender} nodeInfoRender={nodeInfoRender}/>


    </div>

  )
}

  export default Main;