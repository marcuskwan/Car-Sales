import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";



const App = ({ features, image, name, price, store, additionalPrice }) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header image={image} name={name} price={price} />
        <AddedFeatures features={features}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={store} />
        <Total additionalPrice={additionalPrice} price={price} />
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
  additionalPrice: state.additionalPrice,
});

export default connect(
  mapStateToProps,
  {},
)(App);
