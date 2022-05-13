import React, { useState } from "react";
import { Loader } from "../Loader/Loader";

function ProjectCard({
  ImageBaseUrl,
  obj,
  cartListIs,
  index,
  handleAddtoCart,
  handleAddtoBundle,
  bundleListIs,
}) {
  const [apicall, setapicall] = useState(false);
  return (
    <div className=" col-lg-4 col-md-6 mb-4" key={index}>
      <div className="pharmaceutical-box">
        <figure>
          <img src={ImageBaseUrl + obj?.bannerImage} />
          <h5 className="Pharmacepo">{obj?.sector?.name}</h5>
        </figure>
        <div className="pharmaceutical-contant">
          <h4>{obj?.projectTitle}</h4>
          <h3>
            <span>${obj?.price}</span>
          </h3>
          <div className="buttons">
            {apicall ? (
              <Loader />
            ) : (
              <button
                className={
                  cartListIs.some((cartItem) => cartItem.id == obj?.id)
                    ? "carts bg-danger"
                    : "carts"
                }
                onClick={() => {
                  setapicall(true);
                  handleAddtoCart(obj?.id, obj?.type, obj?.quantity);
                  setapicall(false);
                }}
                disabled={
                  cartListIs.some((cartItem) => cartItem.id == obj?.id)
                    ? true
                    : false
                }
              >
                <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
              </button>
            )}
            <button
              href="#"
              className={
                bundleListIs.some((bundleItem) => bundleItem.id == obj?.id)
                  ? "addtubul bg-danger"
                  :"addtubul"
              }
              onClick={() => {
                handleAddtoBundle(obj?.id, obj?.type, obj?.quantity);
              }}
              disabled={
                bundleListIs.some((cartItem) => cartItem.id == obj?.id)
                  ? true
                  : false
              }
            >
              Add to Bundle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
