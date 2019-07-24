import React from "react";

const AddedFeature = ({ feature, removeFeature }) => {
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
