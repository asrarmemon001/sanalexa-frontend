import React, { useState } from "react";
import { Loader } from "../Loader/Loader";

function ProjectCard({ ImageBaseUrl, obj, cartListIs,index,handleAddtoCart }) {
  const [apicall, setapicall] = useState(false);
  return (
    <div className=" col-lg-4 col-md-6 mb-4" key={index}>
      <div className="pharmaceutical-box" data-aos="fade-right">
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
            <button href="#" className="addtubul">
              Add to Bundle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
