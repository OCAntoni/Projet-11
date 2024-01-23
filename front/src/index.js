import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Provider } from 'react-redux';
import { Store } from "./store/store";
import store from 'mongoose/lib/promise_provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider Store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);