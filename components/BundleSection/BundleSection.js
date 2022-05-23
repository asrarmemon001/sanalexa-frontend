import Image from "next/image";
import React from "react";
import BundleItem from "../BundleItem/BundleItem";

export const BundleSection = ({ sections }) => {
  return ( 
     <div className="container d-flex flex-column align-items-center bundleListOut">
       <h3 className="text-center">{sections?.sector?.name}</h3>
 <div class="tophead collapsebutton"><div
        className="container"><h3 className="text-center">{sections?.packages?.packagesName} <span> - ₹ {sections?.packages?.price || 0}</span></h3></div> 
        <i class="fa fa-caret-down" aria-hidden="true"></i> 
         </div> 
         <div className="toggleCollapse">      
      <div className="d-flex flex-row justify-content-start m-auto container flex-wrap bundleList">
        {sections.projects?.map((el, i) => (
          <BundleItem
            key={`bItem-${i}`}
            projectDesc={el.projectDesc}
            img={el.bannerImage}
            projectTitle={el.projectTitle}
          />
        ))}
      </div>
      <div className="d-flex justify-content-end w-100 mb-4">
        <button className="btn btn-danger mt-4 mr-3">Checkout</button>
      </div>
      </div>
    </div>
  );
};
