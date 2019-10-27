import React from 'react';
import { connect } from "react-redux";
import {removingFeature} from "../actions/item";

const AddedFeature = props => {
  const removeFeature = (e, item) => {
    e.preventDefault()
    // dispatch an action here to remove an item
    props.removingFeature(item)
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(e) => removeFeature(e, props.feature)} >X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps ={
  removingFeature
}
export default connect(null, mapDispatchToProps)(AddedFeature);
