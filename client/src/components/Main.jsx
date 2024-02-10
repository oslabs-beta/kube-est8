import React, {useState} from 'react';
import SideBar from './SideBar.jsx'
import Metrics from './Metrics.jsx'

const Main = (props) => {

  const [display, setDisplay] = useState('');

  // FUNCTION TO CHANGE STATE FOR RENDERING CLUSTER INFO IN METRICS TABLE
  const clusterInfoRender = (e) => {
    setDisplay('clusterInfo');
    return;
  }





  return (

    <div className='Main'>
      <SideBar display={display} clusterInfoRender={clusterInfoRender}/>
      <Metrics display={display} clusterInfoRender={clusterInfoRender}/>
    </div>

  )
}

  export default Main;