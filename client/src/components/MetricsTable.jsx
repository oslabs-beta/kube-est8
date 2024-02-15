import React from 'react';
import NodeInfo from './NodeInfo.jsx'
import Flow from './FlowChart.js';
import { UserAuth } from '../context/AuthContent.js';

const MetricsTable = (props) => {

    /*-------------------CONDITIONALLY RENDER CLUSTER INFO BASED ON STATE-----------------*/
    if (props.display === 'clusterInfo') {
      return (

        <div className='MetricsTable'>
          {/* <h2 className='dataTitle' >Cluster Overview</h2> */}
          <iframe src="http://localhost:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&refresh=5s&panelId=1"  frameborder="0"></iframe>
          <div className='grafana1'>
            <iframe src="http://localhost:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&refresh=5s&panelId=2"  frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&refresh=5s&panelId=3"  frameborder="0"></iframe>
            <iframe className='grafanaGraph' src="http://localhost:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&refresh=5s&panelId=4" height="500" frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&refresh=5s&panelId=5" className='grafanaGraph' height="500" frameborder="0"></iframe>
          </div>
        </div>



      )
    }

    if (props.display === 'podInfo') {
      return (
        <NodeInfo/>
      )
    }

    if (props.display === 'flowChart'){
      return (
        <Flow/>
      )
    }

    const { user } = UserAuth();

    /*-----------------------IF USER JUST ARRIVED / NO DATA LOADED------------------------*/
    return (
      <div className='no-info'>
        <div className='no-info-text'>
          Welcome to your <span className='text-span'>Kube Est8</span>, {user?.displayName}.
          <br></br>
          Please use the sidebar to render desired cluster info.
        </div>
      </div>
    )
  }

  export default MetricsTable;