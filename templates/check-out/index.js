import React, { useContext, useEffect, useState } from "react"
import { ImageBaseUrl } from "../../utils/Baseurl"
import Link from "next/link";
import AccountDetails from "./account-details";
import PaymentMethodCheckout from "./payment-method-checkout";
import ReviewAndConfirm from "./review-and-confirm";
import CheckoutSummary from "./checkout-summary";
import BannerBottom from "../../components/banner-bottom";
import AppContext from "../../appContext/index"

export default function CheckoutPageTemplate() {
   const appContext = useContext(AppContext);
   const [completedState, setCompletedState] = useState([]);
   const [inProcess, setInProcess] = useState("account");
   let { fetchCartList, state } = appContext;
   const cartListIs = state.cartProduct;
   const cartTotal = state.cartTotal;

   return (
      <section className="innerbanner">
         <div className="banner-plans" style={{ backgroundImage: 'url(/static/images/learning.jpeg)' }}>
            <div className="container">
               <h3>Check Out </h3>
               <p>Simulator is an impactful alternative #training method to
                  traditional coating and spray-painting techniques.</p>
            </div>
         </div>

         <section className="progilesection">
            <div className="container">
               <ul className="tuch-monu">
                  <li className={`${inProcess === 'account' ? 'active' : completedState.indexOf('account') > -1 ? 'completed' : ''}`}>
                     <i className="fa fa-check-circle" aria-hidden="true"></i> <p>ACCOUNT</p></li>
                  <li className={`${inProcess === 'confirm' ? 'active' : completedState.indexOf('confirm') > -1 ? 'completed' : ''}`}>
                     <i className="fa fa-check-circle" aria-hidden="true"></i> <p>REVIEW</p></li>
                  <li className={`${inProcess === 'payment' ? 'active' : completedState.indexOf('payment') > -1 ? 'completed' : ''}`}>
                     <i className="fa fa-check-circle" aria-hidden="true"></i> <p>PAYMENT</p></li>
               </ul>


               <a className="backto" href="#">  Back to Pricing</a>
               <div className="row mt-3">
                  <div className="col-md-8">
                     <AccountDetails inProcess={inProcess} setInProcess={(e) => {
                        const data = completedState
                        data.push('account')
                        setCompletedState(data)
                        setInProcess(e)
                     }} />
                     <ReviewAndConfirm inProcess={inProcess} setInProcess={(e) => {
                        const data = completedState
                        data.push('confirm')
                        setCompletedState(data)
                        setInProcess(e)
                     }} />
                     <PaymentMethodCheckout inProcess={inProcess} setInProcess={(e) => setInProcess(e)} />
                  </div>

                  <div className="col-md-4">
                     <CheckoutSummary cartListIs={cartListIs} cartTotal={cartTotal} />

                  </div>
               </div>
            </div>
         </section>

         <BannerBottom />
      </section>
   )
}
