import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import AppContext from "../../appContext";
import { paymentApi } from "../../utils/api-Request";
import { getSession, getToken } from "../../utils/constants";

export default function paymentgateway({type}) {
  const router = useRouter()
  const appContext = useContext(AppContext);
  const { fetchCartList, fetchBundleList, loginSignupModal } = appContext;
  const { isLoggedin } = appContext.state;
  const [paymentRes, setPaymentRes] = useState(null)
  const [loading, setLoading] = useState(false)
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
    try {
      if(!Boolean(isLoggedin)){
        // router.push("/payment/failed")
        loginSignupModal('login')
        console.log('loginSignupModal')
        return
      }
      setLoading(true)
      const res = await initializeRazorpay();

      if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
      }

      // Make API call to the serverless API
      const result = await paymentApi({ sessionId: getSession(), type: type })
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
          router.push("/payment/success")
          // validatePaymentVerification({"order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, signature, secret);

        },
        // callback_url: "http://localhost:3000/",
      };
      
      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response) {
        router.push("/payment/failed")
      });
      paymentObject.open();
      router.push("/payment/verifying-payment-status")
      setTimeout(() => {
        if(type=="cart"){
          fetchCartList()
        }else{

          fetchBundleList()
        }
        
        setLoading(false)
      }, 3000)
    } catch (error) {
      toast.error("Something went wrong.")
      setLoading(false)
    }
  };
  return <button disabled={loading} className="btn btn-danger mb-3" style={{ borderRadius: "20px" }} onClick={makePayment}>{loading ? <CircularProgress size={16} /> : 'Pay'}</button>;
}
