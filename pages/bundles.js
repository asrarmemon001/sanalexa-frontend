import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/layout";
import AppContext from "../appContext/index"
import BundleCard from "../components/BundleCard/BundleCard";
import { BundleSection } from "../components/BundleSection/BundleSection";
import { getDefaultBundlesList } from "../utils/api-Request";
import { NoDataFound } from "../components/NoDataFound/NoDataFound";


function bundles() {
  const conntextApi = useContext(AppContext);
  const { bundleProduct, bundleTotal } = conntextApi.state;
  const [defaultBundles, setDefaultBundles] = useState(null);

  const fetchDefaultBundleList = async () => {
    try {
      const response = await getDefaultBundlesList()
      setDefaultBundles(response.data.data)
    } catch (error) {
      console.log(error, 'fetchDefaultBundleList')
    }
  }
  useEffect(() => {
    fetchDefaultBundleList()
  }, []);

  return (
    <Layout>
      <div class="container cartcontainer"><h3>Create Bundle</h3></div>
      <div
        className="container card-body mb-3">
        Shop For more than $150 and get free vouchers
      </div>
    
      <div class="tophead"><div
        className="container"><h3 className="text-center">Custom Bundle <span> - ₹ {bundleTotal}</span></h3></div> </div>

      <div className="container d-flex flex-row flex-wrap mb-4 custombundel "> 
        {bundleProduct?.length ?
          <>
            {bundleProduct.map((el, index) => (
              <div className="col-md-9 cartlist ">
                <BundleCard
                  key={`bundle-${index}`}
                  image={el.productInfo.bannerImage}
                  desc={el.productInfo.projectDesc}
                  title={el.productInfo.projectTitle}
                  supportDesc={el.productInfo.supportingDesc}
                  type={el.type}
                  plateform={el.productInfo.plateform}
                  quantity={el.quantity}
                  price={el.productInfo.price}
                  id={el.productInfo.id}
                />
              </div>
            ))}
            <div className="col-md-3 col-12">
              <div className="d-flex justify-content-end w-100">
                <button className="btn btn-danger my-4 mr-3">Checkout</button>
              </div>
            </div>

          </>
          :
          <NoDataFound />}

      </div>

      <div>
        {
          defaultBundles?.map((el, i) => (
            <BundleSection key={`dfBundle-${i}`} sections={el} />
          ))
        }
      </div>

    </Layout>
  );
}

export default bundles;
