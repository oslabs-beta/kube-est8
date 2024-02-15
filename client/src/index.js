import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./assets/stylesheets/styles.css";
import { BrowserRouter } from "react-router-dom";import Flow from './components/FlowChart.js';


import App from "./App.jsx";

//changed root variable source to createRoot
const root = createRoot(document.getElementById('root')); 
root.render(
<BrowserRouter>
    <App />
   
</BrowserRouter>
    
);
