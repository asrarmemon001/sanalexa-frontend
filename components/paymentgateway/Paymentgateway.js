import { useState } from "react";
import { paymentApi } from "../../utils/api-Request";
import { getSession } from "../../utils/constants";

export default function paymentgateway(props) {
  const [paymentRes, setPaymentRes] = useState(null)
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => { 
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const result = await paymentApi({sessionId:getSession(), type:'cart'})
    const data = result.data;

    var options = {
      key: "rzp_test_BSTTztDODhkhRQ", // Enter the Key ID generated from the Dashboard
      name: "Simulanis",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank you for choosing Simulanis",
      image: "/static/images/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        setPaymentRes(response)
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  console.log(paymentRes,'paymentRes')
  return <div onClick={makePayment}>Pay</div>;
}
