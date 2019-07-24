import React from "react";

const AdditionalFeature = ({ feature, addFeature }) => {
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
