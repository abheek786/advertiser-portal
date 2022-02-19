import React, { FC } from 'react';
import './Advertiser.component.scss';

const Advertiser: FC = () => (
  <div className="Advertiser">
    <h2>Create Advertiser</h2>
    <div>
      Name: <input />
      APY: <input />
      Minimum Balance: <input />
      Logo: <input />
    </div>
    <button type="button">Create</button>
  </div>
);

export default Advertiser;