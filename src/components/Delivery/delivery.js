import React from 'react'
import './delivery.css'
import Filters from '../commom/filters';
import DeliveryCollections from './deliveryCollections/deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../commom/exploreSection';
import {restaurents} from '../../data/restaurent'

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurentList = restaurents;

function Delivery() {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList = {deliveryFilters} />
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection list = {restaurentList} collectionName='Delivery Restaurent in Bangalore'/>
    </div>
  )
}

export default Delivery