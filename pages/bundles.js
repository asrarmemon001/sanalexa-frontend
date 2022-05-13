import React, { useEffect, useState, useContext } from "react";
import CartItemCard from "../components/CartItemCard/CartItemCard";
import Layout from "../components/layout";
import { BundlesList, RemoveBundleList } from "../utils/api-Request";
import { toast } from "react-toastify";
import AppContext from "../appContext/index"
import BundleCard from "../components/BundleCard/BundleCard";


function bundles() {
  const setCounter = useContext(AppContext);
  let { setBundleCount } = setCounter;
  const [bundleListIs, setbundleList] = useState();
  const [sessionId, setsessionId] = useState("");

  useEffect(() => {
    const sessionkey = localStorage.getItem("sessionId");
    setsessionId(sessionkey);
  }, []);

  const getBundleList = async (sessionId) => {
    const res = await BundlesList(sessionId);
    setbundleList(res?.data?.data);
    return res;
  };
  
  useEffect(() => {
    if (sessionId) {
      getBundleList(sessionId);
    }
  }, [sessionId]);

  const handleRemove = async (id, type) => {
    const data = {
      sessionId: 3,
      id: id,
      type: "project",
    };
    await RemoveBundleList(data)
      .then((res) =>
        res?.status === 200
          ? toast.success("successfully Removed")
          : toast.error("something went wrong")
      )
      .catch((error) => console.error(error));
    getBundleList(sessionId);
    
  };
  
  useEffect(() => {
    setBundleCount(bundleListIs?.length);
  }, [bundleListIs])
  
  return (
    <Layout>
      <div
        className="container card-body mb-3"
        style={{
          border: "0.5px solid #DCDCDC",
          borderRadius: "10px",
          backgroundColor: "#f8f6f5",
        }}
      >
        Shop For more than $150 and get free vouchers
      </div>

      <div className="container d-flex flex-row flex-wrap ">
        <div className="col-lg-12 col-12 ">
          {bundleListIs &&
            bundleListIs.map((i, index) => (
              <BundleCard
                key={index}
                image={i.productInfo.bannerImage}
                desc={i.productInfo.projectDesc}
                title={i.productInfo.projectTitle}
                supportDesc={i.productInfo.supportingDesc}
                type={i.productInfo.type}
                plateform={i.productInfo.plateform}
                quantity={i.productInfo.quantity}
                price={i.productInfo.price}
                id={i.productInfo.id}
                sessionId={sessionId}
                handleRemove={handleRemove}
              />
            ))}
        </div>
       
      </div>
    </Layout>
  );
}

export default bundles;
