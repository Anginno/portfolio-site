//importing react
import React from 'react';
import ReactDOM from 'react-dom';

//importing router
import {
    BrowserRouter as Router
  } from "react-router-dom";

//importing main app
import App from './App.js';

//whatever this is im still learning
import * as serviceWorker from './serviceWorker';


//MAIN WEBSITE CLASS
ReactDOM.render(
    <Router>
        <App />
    </Router>,   
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


