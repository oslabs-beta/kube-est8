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
  const podInfoRender = (e) => {
    setDisplay('podInfo');
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



  return (

    <div className='Main'>
      <SideBar display={display} homeRender={homeRender} clusterInfoRender={clusterInfoRender} podInfoRender={podInfoRender} flowChartRender = {flowChartRender}/>
     
      <Metrics display={display} homeRender={homeRender} clusterInfoRender={clusterInfoRender} podInfoRender={podInfoRender}/>
 

    </div>

  )
}

  export default Main;