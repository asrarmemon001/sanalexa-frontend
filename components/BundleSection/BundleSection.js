import { CircularProgress } from "@mui/material";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import AppContext from "../../appContext";
import { addtoBundleApi } from "../../utils/api-Request";
import { getSession } from "../../utils/constants";
import BundleItem from "../BundleItem/BundleItem";

export const BundleSection = ({ sections, packages }) => {
  const [accordian, setAccordian] = useState(false)
  const apiContext = useContext(AppContext)
  const [bundleApicall, setBundleApicall] = useState(false);

  const handleAddtoBundle = async (id) => {
    setBundleApicall(true)
    const data = {
      sessionId: getSession(),
      bundle: { id: String(id), type: "package", quantity: 1 },
    };
    await addtoBundleApi(data)
      .then((res) => {
        if (res?.status == 200) {
          toast.success("Package added to bundle")
        } else {
          toast.error("something went wrong");
        }
        apiContext.fetchBundleList()
        setBundleApicall(false)
      }
      )
      .catch((error) => { setBundleApicall(false); console.log(error) });
  };


  const isPackageExistInBundle = (id) => {
    return Boolean(apiContext.state.bundleProduct?.find(el => el.id == id && el.type == 'package'))
  }

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
            <button
              className={
                'btn btn-danger'
              }
              onClick={() => {
                !isPackageExistInBundle(packages.id) &&
                  handleAddtoBundle(packages.id, 'package', 1);
              }}
              disabled={
                isPackageExistInBundle(packages.id)
                  ? true
                  : false
              }
            >
              {bundleApicall ? (
                <CircularProgress size={20} />) :
                isPackageExistInBundle(packages.id)
                  ? "Added to Bundle"
                  :
                  'Add to Bundle'}
            </button>
          </div>
        </>
        :
        null}
    </div>
  );
};
