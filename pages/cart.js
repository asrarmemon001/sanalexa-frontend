import React, { useEffect, useState, useContext } from "react";
import CartItemCard from "../components/CartItemCard/CartItemCard";
import CartInfoCard from "../components/CheckoutCard/CheckoutCard";
import Layout from "../components/layout";
import { cartList, RemoveCartItem } from "../utils/api-Request";
import { toast } from "react-toastify";
import AppContext from "../appContext/index"


function cart() {
  const setCounter = useContext(AppContext);
  let { setCartProductCount } = setCounter;
  const [cartListIs, setcartList] = useState();
  const [sessionId, setsessionId] = useState("");
  useEffect(() => {
    const sessionkey = localStorage.getItem("sessionId");
    setsessionId(sessionkey);
  }, []);

  const getCartList = async (sessionId) => {
    const res = await cartList(sessionId);
    setcartList(res?.data?.data);
    return res;
  };
  console.log(sessionId);
  useEffect(() => {
    if (sessionId) {
      getCartList(sessionId);
    }
  }, [sessionId]);

  const handleRemove = async (id, type) => {
    const data = {
      sessionId: sessionId,
      id: id,
      type: "project",
    };
    await RemoveCartItem(data)
      .then((res) =>
        res?.status === 200
          ? toast.success("successfully Removed")
          : toast.error("something went wrong")
      )
      .catch((error) => console.error(error));
    getCartList(sessionId);
    
  };
  
  useEffect(() => {
    setCartProductCount(cartListIs?.length);
  }, [cartListIs])
  
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
        <div className="col-lg-8 col-12 ">
          {cartListIs &&
            cartListIs.map((i, index) => (
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
        <div className=" p-0 col-lg-4 col-12" >
          <CartInfoCard />
        </div>
      </div>
    </Layout>
  );
}

export default cart;
