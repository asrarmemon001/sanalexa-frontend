import React, { useEffect, useState, useContext } from "react";
import CartItemCard from "../components/CartItemCard/CartItemCard";
import CartInfoCard from "../components/CheckoutCard/CheckoutCard";
import Layout from "../components/layout";
import { cartList, RemoveCartItem } from "../utils/api-Request";
import { toast } from "react-toastify";
import AppContext from "../appContext/index"
import { NoDataFound } from "../components/NoDataFound/NoDataFound";
import { getSession } from "../utils/constants";


function Cart() {
  const appContext = useContext(AppContext);
  let { fetchCartList, state } = appContext;
  const cartListIs = state.cartProduct;
  const cartTotal = state.cartTotal;
  const handleRemove = async (id, type) => {
    const data = {
      sessionId: getSession(),
      id: id,
      type,
    };
    await RemoveCartItem(data)
      .then((res) =>
        res?.status === 200
          ? toast.success("successfully Removed")
          : toast.error("something went wrong")
      )
      .catch((error) => console.error(error));
      await fetchCartList()

  };


  return (
    <Layout>
      <div className="container cartcontainer">
        <h3>Shoping Cart</h3>
      </div>

      <div
        className="container card-body mb-3 topstrip"
        style={{
        }}
      >
        Shop For more than $150 and get free vouchers
      </div>

      <div className="container d-flex flex-row flex-wrap cartLayout">
        {cartListIs && cartListIs.length
          ?
          <>
            <div className="col-lg-9 col-12 "> 
              {cartListIs &&
                cartListIs.map((el, index) => (
                 el.type == "project"
                 ?
                 <CartItemCard
                 key={index}
                 selectServices={el?.selectServices}
                 image={el.productInfo.bannerImage}
                 desc={el.productInfo.projectDesc}
                 title={el.productInfo.projectTitle}
                 supportDesc={el.productInfo.supportingDesc}
                 type={el.type}
                 plateform={el.productInfo.plateform}
                 quantity={el.quantity}
                 price={el.productInfo.price}
                 id={el.productInfo.id}
                 sessionId={getSession()}
                 handleRemove={handleRemove}
               />
               :
               <CartItemCard
               key={index}
               image={el.productInfo.bannerImage}
               desc={el.productInfo.packagesDesc}
               title={el.productInfo.packagesName}
              //  supportDesc={el.productInfo.supportingDesc}
               type={el.type}
               project={el.project}
               quantity={el.quantity}
               price={el.productInfo.price}
               id={el.productInfo.id}
               sessionId={getSession()}
               handleRemove={handleRemove}

             />
                ))}
            </div>
            <div className=" p-0 col-lg-3 col-12" >
              <CartInfoCard cartListIs={cartListIs} type="cart" title="Cart Details" cartTotal={cartTotal} />
            </div>
          </>
          :
          <NoDataFound />}
      </div>
    </Layout>
  );
}

export default Cart;