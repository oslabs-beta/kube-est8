import React from 'react';
import SideBar from './SideBar.jsx'
import Metrics from './Metrics.jsx'

const Main = () => {

    return (

      <div className='Main'>
        <h1>Main page is connected</h1>
        <SideBar/>
        <Metrics/>
      </div>

    )
  }

  export default Main;