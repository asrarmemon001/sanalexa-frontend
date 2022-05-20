import React from "react";
import Paymentgateway from "../paymentgateway/Paymentgateway";

function CartInfoCard({ cartListIs, cartTotal }) {
  return (
    <div
      className="card container"
      style={{
        minHeight: "20vh",
        backgroundColor: "#f5f5f5",
        borderRadius: "0px",
        padding: "15px",
      }}
    >

      <p
        className="bg-danger py-2 my-2 text-center text-white"
        style={{ borderRadius: "20px" }}
      >
        {" "}
        Cart Details
      </p>

      {cartListIs.map((el, i) => {
        return (el.type == "project"
        ?
        <div key={`cart-total-${i}`} className="d-flex flex-row justify-content-between">
          <p>{el.productInfo.projectTitle} {" "}<strong className="text-info d-none badge">project</strong></p>
          <p>₹ {el.productInfo.price}</p>
        </div>
        :
        <div key={`cart-total-${i}`} className="d-flex flex-row justify-content-between">
        <p>{el.productInfo.packagesName} {" "}<strong className="text-info d-none badge">package</strong></p>
        <p>₹ {el.productInfo.price}</p>
      </div>)
      })}


      <hr />
      <div className="d-flex flex-row justify-content-between">
        <p>Coupon Discount</p>
        <p>₹ 0</p>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <p>Total Amount</p>
        <p>₹ {cartTotal}</p>
      </div>



      <Paymentgateway cartListIs={cartListIs} cartTotal={cartTotal} />

    </div>
  );
}

export default CartInfoCard;
