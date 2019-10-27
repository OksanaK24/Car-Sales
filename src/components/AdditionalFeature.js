import React from 'react';
import { connect } from "react-redux";
import {addingFeature} from "../actions/item";

const AdditionalFeature = props => {
  const buyItem = (e, item) => {
    e.preventDefault()
    props.addingFeature(item)
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={(e) => buyItem(e, props.feature)} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
  addingFeature
}

export default connect(null, mapDispatchToProps)(AdditionalFeature);
