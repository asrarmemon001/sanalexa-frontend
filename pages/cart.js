import React, { useEffect, useState } from "react";
import Card from "../components/card/card";
import CartInfoCard from "../components/cardinfocard/CartInfoCard";
import Layout from "../components/layout";
import { cartList } from "../utils/api-Request";

function cart() {
  const [cartListIs, setcartList] = useState();
  const [sessionId, setsessionId] = useState(7);
  useEffect(() => {
    const sessionkey = sessionStorage.getItem("sessionId");
    // setsessionId(sessionkey)
  }, []);

  const getCartList = async (sessionId) => {
    const res = await cartList(sessionId);
    setcartList(res?.data?.data);
    console.log(res?.data?.data);
    return res;
  };

  useEffect(() => {
    getCartList(sessionId);
  }, []);

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

      <div className="container d-flex flex-row">
        <div className="col-lg-8" style={{ minHeight: "20vh" }}>
          {cartListIs &&
            cartListIs.map((i, index) => (
              <Card
                key={index}
                image={i.bannerImage}
                desc={i.projectDesc}
                title={i.projectTitle}
                supportDesc={i.supportingDesc}
                type={i.type}
                plateform={i.plateform}
                quantity={i.quantity}
                price={i.price}
                id={i.id}
              />
            ))}
        </div>
        <div className="col-lg-4 p-0" style={{ minHeight: "20vh" }}>
          <CartInfoCard />
        </div>
      </div>
    </Layout>
  );
}

export default cart;
