import React from "react";
import Paymentgateway from "../paymentgateway/Paymentgateway";

function CartInfoCard({ cartListIs, cartTotal, title, type }) {
  const calculateProductPriceWithSelectedServices = (price, services) => {
    let servicesPrice = 0;
    for (let i = 0; i < services?.length; i++) {
      servicesPrice = servicesPrice + Number(services[i].price)
    }

    return Number(price) + servicesPrice
  }
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
        {title}
      </p>

      {cartListIs.map((el, i) => {
        return (el.type == "project"
          ?
          <div key={`cart-total-${i}`} className="d-flex flex-row justify-content-between">
            <p>{el.productInfo.projectTitle} {" "}<strong className="text-info d-none badge">project</strong></p>
            <p>₹ {calculateProductPriceWithSelectedServices(el.productInfo.price, el.selectServices)}</p>
          </div>
          :
          <div key={`cart-total-${i}`} className="d-flex flex-row justify-content-between">
            <p>{el.productInfo.packagesName} {" "}{Boolean(el?.noOfDayMonthYear) && Boolean(el?.dayMonthYear) ? <strong className="text-danger badge">{el?.noOfDayMonthYear} {el?.dayMonthYear}</strong> : null}</p>

            <p style={{whiteSpace:"nowrap"}}>₹ {el.productInfo.price}</p>



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



      {type == 'bundle' && (cartListIs.length < 3 || cartListIs.length > 4)
        ?
        <button disabled={true} className="btn btn-danger mb-3" style={{ borderRadius: "20px" }} >Pay</button>
        :
        <Paymentgateway cartListIs={cartListIs} cartTotal={cartTotal} type={type} />}

    </div>
  );
}

export default CartInfoCard;
