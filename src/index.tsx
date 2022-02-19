import React from 'react';
import ReactDOM from 'react-dom';
import Advertiser from './components/Advertiser/Advertiser.component';
import AdvertiserList from './components/AdvertiserList/AdvertiserList.component';
import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <h1>Advertiser Portal</h1>
    <Advertiser />
    <AdvertiserList />
  </React.StrictMode>,
  document.getElementById('root')
);
