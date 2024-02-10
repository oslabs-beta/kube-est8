import React from 'react';
import grafanaGraph from '../assets/images/grafanaGraph.png';
import prometheusGraph from '../assets/images/prometheusGraph.png';

const MetricsTable = (props) => {

    /*-------------------CONDITIONALLY RENDER CLUSTER INFO BASED ON STATE-----------------*/
    if (props.display === 'clusterInfo') {
      return (

        <div className='MetricsTable'>
          <h2 className='dataTitle' >Cluster Overview</h2>
          <iframe src="http://0.0.0.0:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&theme=dark&panelId=1" width="1200" height="200" frameBorder="0"></iframe>
          <div className='grafana1'>
            <iframe src="http://0.0.0.0:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&theme=dark&panelId=2" width="600" height="200" frameBorder="0"></iframe>
            <iframe src="http://0.0.0.0:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&from=1707402097171&to=1707423697171&theme=dark&panelId=3" width="600" height="200" frameborder="0"></iframe>
            <iframe src="http://0.0.0.0:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&theme=dark&panelId=4" width="600" height="200" frameBorder="0"></iframe>
            <iframe src="http://0.0.0.0:3000/d-solo/b3e4168a-0a31-445c-8ec2-2f635a2b285a/test-2?orgId=1&theme=dark&panelId=5" width="600" height="200" frameBorder="0"></iframe>
          </div>
        </div>

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