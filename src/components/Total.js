import React from "react";

const Total = ({ price, additionalPrice }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
