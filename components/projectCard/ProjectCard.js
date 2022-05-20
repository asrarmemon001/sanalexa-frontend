import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import AppContext from "../../appContext";
import { addtoBundleApi, AddtoCart } from "../../utils/api-Request";
import { ImageBaseUrl } from "../../utils/Baseurl";
import { getSession } from "../../utils/constants"; 

function ProjectCard({ obj, index, classes }) {
  const router = useRouter()
  const [apicall, setapicall] = useState(false);
  const [bundleApicall, setBundleApicall] = useState(false);
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


  const handleAddtoBundle = async (id) => {
    setBundleApicall(true)
    const data = {
      sessionId: getSession(),
      bundle: { id: String(id), type: "project", quantity: 1 },
    };
    await addtoBundleApi(data)
      .then((res) => {
        if (res?.status == 200) {
          toast.success("Product added to bundle")
        } else {
          toast.error("something went wrong");
        }
        apiContext.fetchBundleList()
        setBundleApicall(false)
      }
      )
      .catch((error) => { setBundleApicall(false); console.log(error) }); 
  };

  const isProductExistInCart = (id) => {
    return Boolean(apiContext.state.cartProduct?.find(el => el.id == id && el.type == 'project'))
  }

  const isProductExistInBundle = (id) => {
    return Boolean(apiContext.state.bundleProduct?.find(el => el.id == id && el.type == 'project'))
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
            <span>₹{obj?.price}</span>
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

            {/* <button  className="addtubul">
              Add to Bundle
            </button> */}

<button
              className={
                isProductExistInBundle(obj.id)
                  ? "btn btn-danger"
                  : "btn"
              }
              onClick={() => {
                !isProductExistInBundle(obj.id) &&
                  handleAddtoBundle(obj?.id, obj?.type, obj?.quantity);
              }}
              disabled={
                isProductExistInBundle(obj.id)
                  ? true
                  : false
              }
            >
              {bundleApicall ? (
                <CircularProgress size={20}/>) :
                isProductExistInBundle(obj.id)
                ? "Added to Bundle"
                :
                'Add to Bundle'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
