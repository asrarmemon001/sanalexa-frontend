import { CircularProgress } from "@mui/material";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AppContext from "../../appContext";
import BannerSection from "../../components/banner-section";
import { AddtoCart, addToFav, removeToFav } from "../../utils/api-Request";
import { ImageBaseUrl } from "../../utils/Baseurl";
import { getSession, getToken } from "../../utils/constants";
import { isPackagesWishListed, packagesfavList  } from "../../utils/helper-functions"
import PackageListItem from "./package-list-item";

const SubscriptionPlansListTemplates = ({ subsciptionList }) => {
  const apiContext = useContext(AppContext);
  const { isLoggedin } = apiContext.state;
  const router = useRouter();
  const [apicall, setapicall] = useState(false);
  const [visible, setVisible] = useState(false);
  const [ favProjects, setFavProjects ] = useState([])

    const getFavData = async () => {
        const wishedPackages = await packagesfavList()
        setFavProjects(wishedPackages)
    }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
   if(Boolean(getToken())){
    getFavData()
   }
  }, []);

  const handleAddtoCart = async (el) => {
    setapicall(true);
    let data = {
      sessionId: getSession(),
      cart: { id: String(el.id), type: "package", quantity: 1 },
    };

    if (Boolean(el?.noOfDayMonthYear) && Boolean(el?.dayMonthYear)) {
      data.cart.noOfDayMonthYear = el.noOfDayMonthYear;
      data.cart.dayMonthYear = el.dayMonthYear;
    }

    await AddtoCart(data)
      .then((res) => {
        if (res?.status == 200) {
          //  toast.success("Package added to cart")
        } else {
          toast.error("somethingwent wrong");
        }
        apiContext.fetchCartList();
        router.push("/checkout");
        setapicall(false);
      })
      .catch((error) => {
        setapicall(false);
        console.log(error);
      });
  };

  const isPackageExistInCart = (id) => {
    return Boolean(
      apiContext.state.cartProduct?.find(
        (el) => el.id == id && el.type == "package"
      )
    );
  };
  let listOfSubscriptions = subsciptionList.filter((el) => el.project?.length);
  useEffect(() => {
    for (let obj of listOfSubscriptions) {
      if (!obj.plateform) {
        let plateform = [];
        if (obj.project && obj.project.length > 0) {
          for (let pro of obj.project) {
            if (typeof pro.plateform === "string") {
              pro.plateform = JSON.parse(pro.plateform);
            }
            plateform = plateform.concat(
              pro.plateform.filter((item) => plateform.indexOf(item) < 0)
            );
          }
        }
        obj.plateform = plateform;
      }
    }
  }, [listOfSubscriptions]);


const handlePackageFav = async (status, id) => {
    const payloadIs = { itemId: id, itemType: "package", isActive: true }
    let wishlisted;
    if (status === "add") {
      wishlisted = await addToFav(payloadIs)
    } else {
      wishlisted = await removeToFav(payloadIs)
    }
    const resIs = wishlisted?.data
    if (wishlisted.status == 200) {
      toast.success(resIs?.message);
      getFavData()
    }
}

  return (
    <>
      <section
        className="banner palneandbundel"
        style={{ backgroundImage: "url(/static/images/banner.jpeg)" }}
      >
        <div className="container">
          <div className="main-banner">
            <div className="banner-content">
              <h1>
                PLANS & <br />
                SUBSCRIPTIONS
              </h1>
              <p>
                Simulator is an impactful alternative #training method to <br />
                traditional coating and spray-painting techniques
              </p>
              <a className="button-download-launcher" href="/#">
                {" "}
                <i className="fa fa-download" aria-hidden="true"></i>Download
                Launcher
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="subscription-plans">
        <div className="col-12 serction">
          {listOfSubscriptions.map((el, i) => {
            return (
              <PackageListItem key={`package-${i}`} el={el} apicall={apicall} isLoggedin={isLoggedin} isPackageExistInCart={isPackageExistInCart} handleAddtoCart={handleAddtoCart} handlePackageFav={handlePackageFav} isPackagesWishListed={isPackagesWishListed} favProjects={favProjects} i={i}/>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default SubscriptionPlansListTemplates;



