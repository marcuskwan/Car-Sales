import React from "react";
import { connect, useDispatch } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

//import action names
import { ADD_FEATURE, REMOVE_FEATURE } from "./reducer";

const App = ({ features, image, name, price, store }) => {
  const dispatch = useDispatch();
  const removeFeature = feature => {
    // dispatch an action here to remove an item
    dispatch({ type: REMOVE_FEATURE, payload: feature });
  };

  const addFeature = feature => {
    // dispatch an action here to add an item
    dispatch({ type: ADD_FEATURE, payload: feature });
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header image={image} name={name} price={price} />
        <AddedFeatures features={features} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} addFeature={addFeature} />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  features: state.car.features,
  image: state.car.image,
  name: state.car.name,
  price: state.car.price,
  store: state.store,
});

export default connect(
  mapStateToProps,
  {},
)(App);
