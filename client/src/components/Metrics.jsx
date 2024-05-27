import React from 'react';
import MetricsTable from './MetricsTable.jsx'

const Metrics = (props) => {

    return (

      <div className='Metrics'>
        <MetricsTable display={props.display} />
      </div>

    )
}

  export default Metrics;