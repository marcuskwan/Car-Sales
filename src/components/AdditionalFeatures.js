import React from "react";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = ({ store }) => {


  return (
    <div className="content">
      <h4>Additional Features</h4>
      {store.length ? (
        <ol type="1">
          {store.map((feature,index) => (
            <AdditionalFeature key={index} feature={feature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
