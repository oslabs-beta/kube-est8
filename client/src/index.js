import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";

import App from './App.jsx';

const body = document.querySelector('body');
const root = createRoot(body);
root.render(

    <App />

);