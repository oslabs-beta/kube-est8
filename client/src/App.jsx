import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom"; 
import { AuthContextProvider } from "./context/AuthContent.js";
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import Signin from './components/Signin.jsx';


const App = () => {
  return (
    <div className="root">
      <AuthContextProvider>
      <NavBar/>
        {/* <Router> */}
           <Routes>

        <Route path='/' element={<Main/>} />
        <Route path='/signin' element={<Signin/>}/>
          </Routes>
        {/* </Router> */}
      </AuthContextProvider>
    </div>
  );
};

export default App;
