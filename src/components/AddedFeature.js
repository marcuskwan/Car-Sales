import React from "react";
import { useDispatch } from "react-redux";
//import action names
import { REMOVE_FEATURE } from "./reducer";

const AddedFeature = ({ feature, removeFeature }) => {
  const dispatch = useDispatch();
  const removeFeature = feature => {
    // dispatch an action here to remove an item
    dispatch({ type: REMOVE_FEATURE, payload: feature });
  };
  const handleRemove = (event, featureToRemove) => {
    event.preventDefault();
    removeFeature(featureToRemove);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={event => handleRemove(event, feature)}>
        X
      </button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
