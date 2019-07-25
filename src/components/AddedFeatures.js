import React from "react";

import AddedFeature from "./AddedFeature";

const AddedFeatures = ({ features, removeFeature }) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map((feature, index) => (
            <AddedFeature key={index} feature={feature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
