import React from 'react';
import ReactDOM from 'react-dom';


const clusterMetricsList = ['cpu', 'memory']


const SideBar = () => {

    return (


      <div className="Sidebar">

        <button>Nodes</button>

        <button>Pods</button>

        <button>WorkLoads</button>

        <button>Security Scan</button>

        <button>Settings</button>

      </div>


    )
  }

  export default SideBar;