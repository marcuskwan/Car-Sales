import React from "react";

import AddedFeature from "./AddedFeature";

const AddedFeatures = ({ features, removeFeature }) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(feature => (
            <AddedFeature key={feature.id} feature={feature} removeFeature={removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
