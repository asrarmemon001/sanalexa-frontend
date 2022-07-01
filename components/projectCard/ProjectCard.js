import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import AppContext from "../../appContext";
import {
  addtoBundleApi,
  AddtoCart,
  removeItemBundleList,
} from "../../utils/api-Request";
import { ImageBaseUrl } from "../../utils/Baseurl";
import { getSession } from "../../utils/constants";

function ProjectCard({ obj, index, classes }) {
  const router = useRouter();
  const [apicall, setapicall] = useState(false);
  const [bundleApicall, setBundleApicall] = useState(false);
  const apiContext = useContext(AppContext);
  let { fetchBundleList, playTypeModal } = apiContext;
  const handleAddtoCart = async (id) => {
    setapicall(true);
    const data = {
      sessionId: getSession(),
      cart: { id: String(id), type: "project", quantity: 1 },
    };
    await AddtoCart(data)
      .then((res) => {
        if (res?.status == 200) {
          toast.success("Product added to cart");
        } else {
          toast.error("somethingwent wrong");
        }
        apiContext.fetchCartList();
        setapicall(false);
      })
      .catch((error) => {
        setapicall(false);
        console.log(error);
      });
  };
  const handleAddtoBundle = async (id) => {
    setBundleApicall(true);
    const data = {
      sessionId: getSession(),
      bundle: { id: String(id), type: "project", quantity: 1 },
    };
    await addtoBundleApi(data)
      .then((res) => {
        if (res?.status == 200) {
          toast.success("Product added to bundle");
        } else {
          toast.error("something went wrong");
        }
        apiContext.fetchBundleList();
        setBundleApicall(false);
      })
      .catch((error) => {
        setBundleApicall(false);
        console.log(error);
      });
  };

  const isProductExistInCart = (id) => {
    return Boolean(
      apiContext.state.cartProduct?.find(
        (el) => el.id == id && el.type == "project"
      )
    );
  };

  const isProductExistInBundle = (id) => {
    return Boolean(
      apiContext.state.bundleProduct?.find(
        (el) => el.id == id && el.type == "project"
      )
    );
  };
  const handleRemove = async (id, type) => {
    try {
      const data = {
        sessionId: getSession(),
        id: id,
        type: "project",
      };
      const res = await removeItemBundleList(data);
      if (res.status == 200) {
        toast.success("successfully Removed");
        fetchBundleList();
      }
    } catch (error) {
      toast.error("something went wrong");
      console.log(error, "handleRemove bundle");
    }
  };
 
  return (
    <div className={classes}>
      <div className="pharmaceutical-box">
        <figure
          style={{ cursor: "pointer" }}
          onClick={() => router.push(`/product-details/${obj.id}`)}
        >
          <p
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/product-details/${obj.id}`)}
          >
            {obj?.projectTitle}
          </p>
          <img src={ImageBaseUrl + obj?.bannerImage} />
        </figure>
        <div className="pharmaceutical-contant">
          <h5>{obj?.sector?.name}</h5>
          <p>{obj?.projectDesc}</p>
          
          <div className="userswithicon">
          <div className="review-item">
            <div className="review-icon">
             <ul>
               <li><i className="fa fa-user" aria-hidden="true"></i> 45,896</li> 
             </ul>
            </div>
            { obj.plateform && obj.plateform.length > 0 && <div className="prodwerp">
              <ul>
                {obj.plateform.indexOf('desktop') > -1 &&  <li><a href="#" className="girditemea"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>}
                {obj.plateform.indexOf('webgl') > -1 && <li><a href="#" className="girditemea"><i className="fa fa-laptop" aria-hidden="true"></i></a></li>}
                {obj.plateform.indexOf('mobile_application') > -1 && <li><a href="#" className="girditemea"><i className="fa fa-mobile" aria-hidden="true"></i></a></li>}
                {obj.plateform.indexOf('vr') > -1 && <li><a href="#" className="girditemea"><i className="fa fa-gamepad" aria-hidden="true"></i></a></li> }
                {obj.plateform.indexOf('hololens') > -1 && <li><a href="#" className="girditemea"><i className="customicon" style={{"backgroundImage": "url('../../static/images/hololens.png')"}}></i></a></li> }
              </ul>
            </div>}

           </div>
          </div>
          <h3>
            <span><span className="rupes">₹</span>{obj?.price}</span>
          </h3>
          {!obj.isBuyed && <div className="buttons">
            <button
              className={
                isProductExistInCart(obj.id) ? "carts bg-danger" : "carts"
              }
              onClick={() => {
                !isProductExistInCart(obj.id) &&
                  handleAddtoCart(obj?.id, obj?.type, obj?.quantity);
              }}
              disabled={isProductExistInCart(obj.id) ? true : false}
            >
              {apicall ? (
                <CircularProgress size={20} />
              ) : (
                <>
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add to Cart</span>{""}
                </>
              )}
            </button>

            {/* <button  className="addtubul">
              Add to Bundle
            </button> */}

            <button
              className={
                isProductExistInBundle(obj.id) ? "btn btn-danger" : "btn"
              }
              onClick={() => {
                isProductExistInBundle(obj.id)
                  ? handleRemove(obj?.id, obj?.type)
                  : handleAddtoBundle(obj?.id, obj?.type, obj?.quantity);
              }}
              disabled={apiContext?.state?.bundleProduct?.length >= 4 && !isProductExistInBundle(obj.id)}
            >
              {bundleApicall ? (
                <CircularProgress size={20} />
              ) : isProductExistInBundle(obj.id) ? (
                <i className='fa fa-times' aria-hidden='true'></i>
              ) : (
                <i className='fa fa-database' aria-hidden='true'></i>
              )} <span>Add to Bundle</span>
            </button>
          </div>}
          {obj.isBuyed && 
          <div className="buttons">
            <button className="btn btn-danger w-100" target="_blank" rel="noreferrer" onClick={(e) => playTypeModal('play', obj)} data-toggle="tooltip" data-original-title="Play">
              Play
            </button>
          </div>
          }
 
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
