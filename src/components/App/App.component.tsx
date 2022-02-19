import React, { FC } from 'react';
import Advertiser from '../Advertiser/Advertiser.component';
import AdvertiserList from '../AdvertiserList/AdvertiserList.component';
import './App.component.scss';

const App: FC = () => (
  <main className="App">
    <h1 className="App-headline">Advertiser Portal</h1>
    <Advertiser />
    <AdvertiserList />
  </main>
);

export default App;