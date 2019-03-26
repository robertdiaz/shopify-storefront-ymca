import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import '../../shared/app.css';
import './app.css';
import './ymca-custom.css';

const client = Client.buildClient({
  storefrontAccessToken: '0a60f2891c94681317d6927daf08992a',
  domain: 'adaptive-media.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
