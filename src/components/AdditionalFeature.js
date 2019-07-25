import React from "react";
import { useDispatch } from "react-redux";

import { ADD_FEATURE, REMOVE_FEATURE } from "../reducer";

const AdditionalFeature = ({ feature }) => {
  const dispatch = useDispatch();
  const addFeature = feature => {
    // dispatch an action here to add an item
    dispatch({ type: ADD_FEATURE, payload: feature });
  };
  const handleAdd = (event, newFeature) => {
    event.preventDefault();
    addFeature(newFeature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={event => handleAdd(event, feature)}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
