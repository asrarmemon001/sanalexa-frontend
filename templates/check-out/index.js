import React, { useEffect, useState } from "react"
import { ImageBaseUrl } from "../../utils/Baseurl"

import Link from "next/link";
import AccountDetails from "./account-details";
import PaymentMethodCheckout from "./payment-method-checkout";
import ReviewAndConfirm from "./review-and-confirm";
import CheckoutSummary from "./checkout-summary";
import BannerBottom from "../../components/banner-bottom";

export default function CheckoutPageTemplate() {
   const [userIs, setUser] = useState("")
   const [projects, setProjects] = useState([])
   const [packages, setPackages] = useState([])
   const [learningProjects, setLearningProjects] = useState([])
   const [favProjects, setFavProjects] = useState([])
   const [inProgressProjects, setInProgressProjects] = useState([])
   const [percentageData, setPercentageData] = useState([])
   const [activePanel, setActivePanel] = useState(0)
   const [loading, setLoading] = useState(false)



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
                  <li className="active"><i className="fa fa-check-circle" aria-hidden="true"></i> <p>ACCOUNT</p></li>
                  <li><i className="fa fa-check-circle" aria-hidden="true"></i> <p>PAYMENT</p></li>
                  <li><i className="fa fa-check-circle" aria-hidden="true"></i> <p>REVIEW</p></li>
               </ul>


               <a className="backto" href="#">  Back to Pricing</a>
               <div className="row mt-3">
                  <div className="col-md-8">
                     <AccountDetails />
                     <ReviewAndConfirm />
                     <PaymentMethodCheckout />
                  </div>

                  <div className="col-md-4">
                     <CheckoutSummary />

                  </div>
               </div>
            </div>
         </section>

         <BannerBottom />


         {/* <section className="banner bannerbottom" style={{ backgroundImage: 'url(/static/images/banner-bottom.jpg)' }}>
            <div className="container">
               <div className="main-banner">
                  <div className="banner-content">
                     <h1>Whan us to deploy paint  Simulator at your site?</h1>
                     <p>Our technical experts will respond to your query at the earliest.</p>
                     <Link href="#"><a className="button-download-launcher">Contact Us</a></Link>
                  </div>
                  <div className="banner-img">
                        <img src="/static/images/right-bott.png" />
                    </div>
               </div>
            </div>
         </section> */}
      </section>
   )
}
