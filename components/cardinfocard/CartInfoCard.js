import React from "react";

function CartInfoCard() {
  return (
    <div
      className="card container"
      style={{
        minHeight: "20vh",
        backgroundColor: "#f8f6f5",
        borderRadius: "20px",
      }}
    >
      <p
        className="bg-danger py-2 my-2 text-center text-white"
        style={{ borderRadius: "20px" }}
      >
        {" "}
        Cart Details
      </p>

      <div className="d-flex flex-row justify-content-between">
        <p>1 X Ala Carte</p>
        <p>₹ 24</p>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <p>1 X Ala Carte</p>
        <p>₹ 24</p>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <p>1 X Ala Carte</p>
        <p>₹ 24</p>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <p>1 X Ala Carte</p>
        <p>₹ 24</p>
      </div>
      <hr />
      <div className="d-flex flex-row justify-content-between">
        <p>Total Amount</p>
        <p>₹ 96</p>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <p>Coupon Discount</p>
        <p>₹ 0</p>
      </div>

      <button className="btn btn-danger mb-3" style={{ borderRadius: "20px" }}>
        {" "}
        Pay ₹ 96{" "}
      </button>
    </div>
  );
}

export default CartInfoCard;
