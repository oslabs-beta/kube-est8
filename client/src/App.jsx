import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContent.js";
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import Signin from './components/Signin.jsx';
import WelcomePage from './components/WelcomePage.jsx'
import Protected from './components/Protected.js'


const App = () => {
  return (
    <div className="root">
      <AuthContextProvider>
      <NavBar/>
        {/* <Router> */}
           <Routes>

        <Route path='/' element={<WelcomePage/>} />
        <Route path='/main' element={<Protected><Main/></Protected>} />
        <Route path='/signin' element={<Signin/>}/>
          </Routes>
        {/* </Router> */}
      </AuthContextProvider>
    </div>
  );
};

export default App;
