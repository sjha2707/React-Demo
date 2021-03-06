import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//Call bootstrap globally

//
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './service/reducers/index'

const store=createStore(rootReducer);

console.warn("store data",store)
//


ReactDOM.render(
  
  <App />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
