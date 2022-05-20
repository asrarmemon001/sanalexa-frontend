import Image from "next/image";
import React from "react";
import BundleItem from "../BundleItem/BundleItem";

export const BundleSection = ({ sections }) => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h3 className="text-center">{sections?.sector?.name}</h3>
      <h5 className="text-center">{sections?.packages?.packagesName}</h5> 
      <p className="text-center" style={{fontWeight:600}}>₹ {sections?.packages?.price || 0}</p>
      <div className="d-flex flex-row justify-content-start m-auto container flex-wrap">
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
  );
};
