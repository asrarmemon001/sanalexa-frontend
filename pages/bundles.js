import React, { useEffect, useState, useContext } from "react";
import CartItemCard from "../components/CartItemCard/CartItemCard";
import CartInfoCard from "../components/CheckoutCard/CheckoutCard";
import Layout from "../components/layout";
import { BundlesList, DefaultBundlesList, RemoveBundleItem, RemoveBundleList } from "../utils/api-Request";
import { toast } from "react-toastify";
import AppContext from "../appContext/index"
import { BundleSection } from "../components/BundleSection/BundleSection";


function Bundles() {
  const setCounter = useContext(AppContext);
  let { setBundleProduct } = setCounter;
  const [BundleListIs, setBundleList] = useState();
  const [sessionId, setsessionId] = useState("");
  const [defaultBundles, setDefaultBundles] = useState();


  useEffect(() => {
    const sessionkey = localStorage.getItem("sessionId");
    setsessionId(sessionkey);
    DefaultBundlesList().then(res => setDefaultBundles(res?.data?.data)).catch((error)=>(console.error(error)))
  }, []);

  const getBundleList = async (sessionId) => {
    const res = await BundlesList(sessionId);
    setBundleList(res?.data?.data);
    return res;
  };

  console.log(sessionId);
  
  useEffect(() => {
    if (sessionId) {
      getBundleList(sessionId);
    }
  }, [sessionId]);

  const handleRemove = async (id, type) => {
    const data = {
      sessionId: sessionId,
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
    setBundleProduct(BundleListIs);
  }, [BundleListIs])
  
  return (
    <Layout>
      {/* <div
        className="container card-body mb-3"
        style={{
          border: "0.5px solid #DCDCDC",
          borderRadius: "10px",
          backgroundColor: "#f8f6f5",
        }}
      >
        Shop For more than $150 and get free vouchers
      </div> */}
      <div>
       <div>
        {
          defaultBundles?.map((i)=>(
            <BundleSection sections={i}/>
          ))
        }
      </div>
      <br />
        <h3 className="text-center">Custom Bundles</h3>
      </div> 

      <div className="container d-flex flex-row flex-wrap ">
        <div className="col-lg-12 col-12 ">
          {BundleListIs &&
            BundleListIs.map((i, index) => (
              <CartItemCard
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

export default Bundles;
