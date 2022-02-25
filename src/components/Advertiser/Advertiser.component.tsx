import React, { FC } from 'react';
import './Advertiser.component.scss';

const Advertiser: FC = () => (
  <div className="Advertiser">
    <h2 className="Advertiser-headline">Create Advertiser</h2>
    <div className="Advertiser-formInput">
      <div><input className="Advertiser-input" type="text" placeholder="Name" /></div>
      <div><input className="Advertiser-input" type="text" placeholder="APY" /></div>
      <div><input className="Advertiser-input" type="text" placeholder="Minimum Balance" /></div>
      <div><input className="Advertiser-input" type="text" placeholder="Logo" /></div >
    </div>
    <button type="button" className="Advertiser-create">Create</button>
  </div>
);

export default Advertiser;