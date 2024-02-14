import React from "react";
import NavBar from './components/NavBar.jsx';
import Main from './components/Main.jsx';
import Flow from "./FlowChart.js";
import './assets/stylesheets/styles.css'

const App = () => {

  return (

    <div className='root'>
      {/* <NavBar/> */}
      <Main/>
      <Flow/>
    
    </div>

  )
}

export default App;