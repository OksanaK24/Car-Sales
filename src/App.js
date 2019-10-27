import React from 'react';

import { connect } from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total car={props.car} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car
  }
};

export default connect(mapStateToProps)(App);
