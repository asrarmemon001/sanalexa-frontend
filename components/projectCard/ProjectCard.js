import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import AppContext from "../../appContext";
import { AddtoCart } from "../../utils/api-Request";
import { ImageBaseUrl } from "../../utils/Baseurl";
import { getSession } from "../../utils/constants"; 

function ProjectCard({ obj, index, classes }) {
  const router = useRouter()
  const [apicall, setapicall] = useState(false);
  const apiContext = useContext(AppContext)
  const handleAddtoCart = async (id) => {
    setapicall(true)
    const data = {
      sessionId: getSession(),
      cart: { id: String(id), type: "project", quantity: 1 },
    };
    await AddtoCart(data)
      .then((res) => {
        if (res?.status == 200) {
          toast.success("Product added to cart")
        } else {
          toast.error("somethingwent wrong");
        }
        apiContext.fetchCartList()
        setapicall(false)
      }
      )
      .catch((error) => { setapicall(false); console.log(error) }); 
  };

  const isProductExistInCart = (id) => {
    return Boolean(apiContext.state.cartProduct?.find(el => el.id == id && el.type == 'project'))
  }
  return (
    <div className={classes} key={index}>
      <div className="pharmaceutical-box">
        <figure style={{ cursor: 'pointer' }} onClick={() => router.push(`/product-details/${obj.id}`)}>
          <img src={ImageBaseUrl + obj?.bannerImage} />
          <h5 className="Pharmacepo">{obj?.sector?.name}</h5>
        </figure>
        <div className="pharmaceutical-contant">
          <h4 style={{ cursor: 'pointer' }} onClick={() => router.push(`/product-details/${obj.id}`)}>{obj?.projectTitle}</h4>
          <h3>
            <span>${obj?.price}</span>
          </h3>
          <div className="buttons">


            <button
              className={
                isProductExistInCart(obj.id)
                  ? "carts bg-danger"
                  : "carts"
              }
              onClick={() => {
                !isProductExistInCart(obj.id) &&
                  handleAddtoCart(obj?.id, obj?.type, obj?.quantity);
              }}
              disabled={
                isProductExistInCart(obj.id)
                  ? true
                  : false
              }
            >
              {apicall ? (
                <CircularProgress size={20}/>) :
                <>
                  <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                </>}
            </button>

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
