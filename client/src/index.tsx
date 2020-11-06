import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import makeStore from './redux/store';
import Axios from 'axios'

const store = makeStore()
Axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  
  if (token) {
    console.log(token)
    config.headers['Authorization'] = `Bearer ${token}`
  } 
  return config
})
ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
