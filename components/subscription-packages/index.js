import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { AddtoCart, packageList } from "../../utils/api-Request";
import { ImageBaseUrl } from "../../utils/Baseurl";
import { Loader } from "../Loader/Loader";
import { NoDataFound } from "..//NoDataFound/NoDataFound";
import { getSession } from "../../utils/constants";
import { toast } from "react-toastify";
import AppContext from "../../appContext";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import { isPackagesWishListed, packagesfavList  } from "../../utils/helper-functions";
import { addToFav, removeToFav } from "../../utils/api-Request";

export default function SubscriptionPackages({ heading }) {
  const apiContext = useContext(AppContext);
  const { sectors, isLoggedin } = apiContext.state;
  const [packListIs, setPackList] = useState([]);
  const [loadingIs, setLoading] = useState(false);
  const router = useRouter();
  const [apicall, setapicall] = useState(false);
  const [ favProjects, setFavProjects ] = useState([])

    const getFavData = async () => {
        const wishedPackages = await packagesfavList()
        setFavProjects(wishedPackages)
    }

  const getPackageList = async () => {
    setLoading(true);
    const list = await packageList();
    const response = list?.data?.data;
    if (response) {
      setLoading(false);
      const r = response.filter((el) => el.project?.length > 1);
      if (r.length && r.length < 3) {
        const arr = [...r, ...r, ...r, ...r];
        const arn = arr;
        setPackList([...arn]);
      } else {
        setPackList(r);
      }
    }
  };

  useEffect(() => {
    getPackageList();
    getFavData()
  }, []);

  useEffect(() => {
    for (let obj of packListIs) {
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
    setPackList(packListIs);
  }, [packListIs]);

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        role="presentation"
        className="slider-button owl-next"
      >
        <span aria-label="Next">›</span>
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        type="button"
        role="presentation"
        onClick={onClick}
        className="slider-button owl-prev"
      >
        <span aria-label="Previous">‹</span>
      </button>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const handleAddtoCart = async (id) => {
    setapicall(true);
    const data = {
      sessionId: getSession(),
      cart: { id: String(id), type: "package", quantity: 1 },
    };
    await AddtoCart(data)
      .then((res) => {
        if (res?.status == 200) {
          toast.success("Package added to cart");
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

  const getSectorName = (id) => {
    return sectors?.find((el) => el.id == id)?.name;
  };

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
    <section
      className="what-you-get"
      style={{ backgroundImage: "url(/static/images/slider-bg.png)" }}
    >
      <div className="container">
        <div className="title" data-aos="fade-down">
          <h3>{heading}</h3>
          <h6>
            Find the exact right 3D content for your needs, including AR/VR,
            gaming,{" "}
          </h6>
        </div>
        <div className="rowCantainer">
          <Slider {...settings} className="packegeSlider">
            {loadingIs ? (
              <Loader />
            ) : packListIs?.length > 0 ? (
              packListIs?.map((obj, index) => {
                return obj.project?.length ? (
                  <div className="packageItem px-3 mb-2" key={index}>
                    <figure
                      className="package-img"
                      style={{
                        backgroundImage: `url('${
                          ImageBaseUrl + obj?.bannerImage
                        }')`,
                      }}
                    >
                      <p>{getSectorName(obj.sector)}</p>
                      {isLoggedin ?
                      <li onClick={()=>handlePackageFav(isPackagesWishListed(obj?.id, favProjects) ? "remove" : "add", obj?.id)}>
                        {isPackagesWishListed(obj?.id, favProjects)?
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-danger css-i4bv87-MuiSvgIcon-root"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="FavoriteIcon"
                        >
                        <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                        </svg> : 
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderIcon">
                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                        </svg>
                        }
                      </li> : ""}
                    </figure>
                    <div className="content-area">
                      <h3>{obj?.packagesName}</h3>
                      <div className="discriptions-c">
                        <p>{obj?.packagesDesc}</p>
                        <p>
                          {obj.project?.length}{" "}
                          {obj.project?.length > 1 ? `Courses` : `Course`}
                        </p>
                      </div>
                      <div className="review-item">
                        <div className="review-icon">
                          <ul>
                            <li>
                              <i className="fa fa-user" aria-hidden="true"></i>{" "}
                              45,896
                            </li>
                          </ul>
                        </div>

                        {obj.plateform && obj.plateform.length > 0 && (
                          <div className="prodwerp">
                            <ul>
                              {obj.plateform.indexOf("desktop") > -1 && (
                                <li>
                                  <a href="#" className="girditemea">
                                    <i
                                      className="fa fa-desktop"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </li>
                              )}
                              {obj.plateform.indexOf("webgl") > -1 && (
                                <li>
                                  <a href="#" className="girditemea">
                                    <i
                                      className="fa fa-laptop"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </li>
                              )}
                              {obj.plateform.indexOf("mobile_application") >
                                -1 && (
                                <li>
                                  <a href="#" className="girditemea">
                                    <i
                                      className="fa fa-mobile"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </li>
                              )}
                              {obj.plateform.indexOf("vr") > -1 && (
                                <li>
                                  <a href="#" className="girditemea">
                                    <i
                                      className="fa fa-gamepad"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </li>
                              )}
                              {obj.plateform.indexOf("hololens") > -1 && (
                                <li>
                                  <a href="#" className="girditemea">
                                    <i
                                      className="customicon"
                                      style={{
                                        backgroundImage:
                                          "url('../../static/images/hololens.png')",
                                      }}
                                    ></i>
                                  </a>
                                </li>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                      <h6 className="mb-2">₹ {obj?.price}</h6>

                      {!obj.isBuyed && (
                        <button
                          className="btn btn-danger w-100 p-3"
                          onClick={() => {
                            !isPackageExistInCart(obj.id) &&
                              handleAddtoCart(obj?.id);
                          }}
                          disabled={isPackageExistInCart(obj.id) ? true : false}
                          style={{ borderRadius: 6 }}
                        >
                          <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                          ></i>
                          {apicall ? (
                            <CircularProgress size={20} />
                          ) : isPackageExistInCart(obj.id) ? (
                            "Added in Cart"
                          ) : (
                            "Pay & Subscription"
                          )}
                        </button>
                      )}
                      {obj.isBuyed && (
                        <button
                          className="btn btn-danger w-100 p-3"
                          onClick={() => {
                            !isPackageExistInCart(obj.id) &&
                              handleAddtoCart(obj?.id);
                          }}
                          disabled={isPackageExistInCart(obj.id) ? true : false}
                          style={{ borderRadius: 6 }}
                        >
                          {apicall ? (
                            <CircularProgress size={20} />
                          ) : isPackageExistInCart(obj.id) ? (
                            "Added in Cart"
                          ) : (
                            "Re Subscripe"
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ) : null;
              })
            ) : (
              <NoDataFound />
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
}
