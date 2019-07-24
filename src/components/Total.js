import React from "react";
// connect
import { connect } from "react-redux";

const Total = ({ price, additionalPrice }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => ({
  price: state.car.price,
  additionalPrice: state.additionalPrice,
});

export default connect(
  mapStateToProps,
  {},
)(Total);
