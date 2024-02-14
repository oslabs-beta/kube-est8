import React from 'react';
import NodeInfo from './NodeInfo.jsx'

const MetricsTable = (props) => {

    /*-------------------CONDITIONALLY RENDER CLUSTER INFO BASED ON STATE-----------------*/
    if (props.display === 'clusterInfo') {
      return (

        <div className='MetricsTable'>
          <h2 className='dataTitle' >Cluster Overview</h2>
          <iframe src="http://localhost:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&refresh=5s&from=1707917295389&to=1707919095389&panelId=1" width="1200" height="200" frameborder="0"></iframe>
          <div className='grafana1'>
            <iframe src="http://localhost:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&refresh=5s&from=1707917360843&to=1707919160843&panelId=2" width="600" height="200" frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&refresh=5s&from=1707917382073&to=1707919182073&panelId=3" width="600" height="200" frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&refresh=5s&from=1707917254721&to=1707919054721&panelId=4" width="600" height="200" frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&refresh=5s&from=1707917165744&to=1707918965744&panelId=5" width="600" height="200" frameborder="0"></iframe>
          </div>
        </div>



      )
    }

    if (props.display === 'podInfo') {
      return (
        <NodeInfo/>
      )
    }

    /*-----------------------IF USER JUST ARRIVED / NO DATA LOADED------------------------*/
    return (
      <div className='no-info'>
        <div className='no-info-text'>
          Welcome to your <span className='text-span'>Kube Est8</span>.
          <br></br>
          Please use the sidebar to render desired cluster info.
        </div>
      </div>
    )
  }

  export default MetricsTable;