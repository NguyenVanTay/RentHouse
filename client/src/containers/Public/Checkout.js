/** @format */

import React from "react";
import Payment from "../../utils/Common/Payment";

const Checkout = () => {
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="">Checkout your order</h2>

      <Payment amount={120} />
    </div>
  );
};

export default Checkout;
