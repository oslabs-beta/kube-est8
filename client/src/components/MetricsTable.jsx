import React from 'react';
import grafanaGraph from '../assets/images/grafanaGraph.png';
import prometheusGraph from '../assets/images/prometheusGraph.png';

const MetricsTable = () => {

    return (

      <div className='MetricsTable'>
        <img className='graph' src={grafanaGraph}/>
        <img className='graph' src={prometheusGraph}/>
      </div>

    )
  }

  export default MetricsTable;