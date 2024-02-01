import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import './assets/stylesheets/styles.css';


import App from './App.jsx';

const body = document.querySelector('body');
const root = createRoot(body);
root.render(

    <App />

);