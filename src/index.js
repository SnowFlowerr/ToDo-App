import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// In Redux, a store is an object that holds the application's state tree. The only way to change the state inside it is to dispatch an action on it. A store is created using the createStore() function from the Redux library.

import { store } from './redux/store.js'

// In React Redux, the Provider component is a React component that provides the Redux store to the entire application. It allows you to access the Redux store and dispatch actions from any component in your application without having to pass the store down explicitly at every level.

import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
