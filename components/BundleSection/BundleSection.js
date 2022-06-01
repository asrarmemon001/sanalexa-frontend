import { CircularProgress } from "@mui/material";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import AppContext from "../../appContext";
import { directPayemntAndCheckoutBundleApi } from "../../utils/api-Request"; 
import BundleItem from "../BundleItem/BundleItem";
import DirectPaymentANdCheckoutBundle from "../paymentgateway/directCheckoutPaymentBundle";

export const BundleSection = ({ sections, packages }) => {
  const [accordian, setAccordian] = useState(false)
    return (
    <div className="container d-flex flex-column align-items-center bundleListOut mb-4">
      {/* <h3 className="text-center">{sections?.sector?.name}</h3>  */}
      <div className="tophead py-3" onClick={() => setAccordian(!accordian)}><div
        className="container"><h3 className="text-center">{packages?.packagesName} <span> - ₹ {packages?.price || 0}</span></h3></div>
        <i className={`fa fa-caret-${accordian ? 'up' : 'down'}`} aria-hidden="true"></i>
      </div>
      {accordian
        ?
        <>
          <div className="d-flex flex-row justify-content-start m-auto container flex-wrap bundleList border">
            {sections?.map((el, i) => (
              <BundleItem
                key={`bItem-${i}`}
                projectDesc={el.projectDesc}
                img={el.bannerImage}
                projectTitle={el.projectTitle}
                price={el.price}
              />
            ))}
          </div>
          <div className="d-flex justify-content-end w-100 my-4">
           <DirectPaymentANdCheckoutBundle packageId={packages?.id}/>
          </div>
        </>
        :
        null}
    </div>
  );
};
