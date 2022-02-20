import React, { FC } from 'react';
import './AdvertiserList.component.scss';
import Chase from '../../assets/images/chase-bank.svg';
import WellsFargo from '../../assets/images/wells-fargo.svg';
import CapitalOne from '../../assets/images/capital-one.svg';

const AdvertiserList: FC = () => (
  <div className="AdvertiserList">
    <h2>Advertiser List</h2>
    <div className="AdvertiserList-container">
      <div className="AdvertiserList-advertiser1">
        <h2>Chase</h2>
        <h2>1.5%</h2>
        <h2>15,000$</h2>
        <img src={Chase} alt="" height={100} width={150} />
        <div className="AdvertiserList-buttonsContainer">
          <button type="button" className="AdvertiserList-button">Update</button>
          <button type="button" className="AdvertiserList-button">Delete</button>
        </div>
      </div>
      <div className="AdvertiserList-advertiser2">
        <h2>Wells</h2>
        <h2>2.5%</h2>
        <h2>20,000$</h2>
        <img src={WellsFargo} alt="" height={100} width={150} />
        <div className="AdvertiserList-buttonsContainer">
          <button type="button" className="AdvertiserList-button">Update</button>
          <button type="button" className="AdvertiserList-button">Delete</button>
        </div>
      </div>
      <div className="AdvertiserList-advertiser3">
        <h2>Capit</h2>
        <h2>3.5%</h2>
        <h2>25,000$</h2>
        <img src={CapitalOne} alt="" height={100} width={150} />
        <div className="AdvertiserList-buttonsContainer">
          <button type="button" className="AdvertiserList-button">Update</button>
          <button type="button" className="AdvertiserList-button">Delete</button>
        </div>
      </div>
    </div>
  </div>
);

export default AdvertiserList;