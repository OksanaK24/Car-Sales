import React from 'react';

import { connect } from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {addingFeature, removingFeature} from "./actions/item";



const App = (props) => {
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removingFeature(item)
  };

  const buyItem = (event, item) => {
    // dipsatch an action here to add an item
    // event.preventDefault();
    props.addingFeature(item)

  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car
  }
};

const mapDispatchToProps = {
  addingFeature,
  removingFeature
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
