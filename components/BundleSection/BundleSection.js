import Image from "next/image";
import React from "react";
import BundleItem from "../BundleItem/BundleItem";

export const BundleSection = ({ sections }) => {
  console.log(sections, "sections");
  return (
    <div className="container d-flex flex-column align-items-center">
      <h3 className="text-center">{sections?.sector?.name}</h3>
      <h5 className="text-center">{sections?.packages?.packagesName}</h5>
      <div className="d-flex flex-row justify-content-start m-auto container flex-wrap">
        {sections.projects?.map((i) => (
          <BundleItem
            projectDesc={i.projectDesc}
            img={i.bannerImage}
            projectTitle={i.projectTitle}
          />
        ))}
      </div>
        <button className="m-auto">Checkout</button>
    </div>
  );
};
