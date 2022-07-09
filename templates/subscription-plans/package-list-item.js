import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { NoDataFound } from "../../components/NoDataFound/NoDataFound";
import { ImageBaseUrl } from "../../utils/Baseurl";

export default function PackageListItem({ el, isPackageExistInCart, handleAddtoCart, handlePackageFav, isPackagesWishListed, favProjects, i, apicall, isLoggedin }) {
    return (

        <div
            className={`row bord ${i % 2 != 0 ? `flex-row-reverse` : ``}`}
            key={`package-${el.id}`}
        >
            <div className="col-md-6  image-p-s">
                <Image
                    src={`${ImageBaseUrl}${el.bannerImage}`}
                    layout="fill"
                />
            </div>
            <div className="col-md-6 rightColmn rightt">
                <div className="bordprice">
                    <div className="bordprice_rupis_ican">
                        <h3>
                            <span>
                                <span class="rupes">₹ </span> 200
                            </span>{" "}
                            <span className="discouns">899 16% discount</span>
                        </h3>
                    </div>
                    <div className="bordprice_soal">
                        {el.plateform && el.plateform.length > 0 && (
                            <div className="prodwerp">
                                <ul>
                                    {el.plateform.indexOf("desktop") > -1 && (
                                        <li>
                                            <a href="#" className="girditemea">
                                                <i
                                                    className="fa fa-desktop"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </li>
                                    )}
                                    {el.plateform.indexOf("webgl") > -1 && (
                                        <li>
                                            <a href="#" className="girditemea">
                                                <i
                                                    className="fa fa-laptop"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </li>
                                    )}
                                    {el.plateform.indexOf("mobile_application") >
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
                                    {el.plateform.indexOf("vr") > -1 && (
                                        <li>
                                            <a href="#" className="girditemea">
                                                <i
                                                    className="fa fa-gamepad"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </li>
                                    )}
                                    {el.plateform.indexOf("hololens") > -1 && (
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
                </div>
                <h1>{el.packagesName}</h1>
                <p className="safetyope">Safety Operations </p>
                {/* {Boolean(el?.noOfDayMonthYear) && Boolean(el?.dayMonthYear)
                            ?
                            <h4>₹ {el.price} / {el?.noOfDayMonthYear} {el?.dayMonthYear}</h4>
                            :
                            <h4>₹ {el.price}</h4>
                        } */}

                <p>{el.packagesDesc}</p>
                {/* <div className="customddrowpdowncontainer">
                    <div className="customdp" style={{ fontWeight: 600 }}>
                        {el.project?.length || 0} Training Modules{" "}
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                    <div className="customdrowpdownContent"></div>
                </div> */}
                <PackagesView pp={el.project} el={el} />

                {!el.isBuyed && (
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            !isPackageExistInCart(el.id) && handleAddtoCart(el);
                        }}
                        disabled={isPackageExistInCart(el.id) ? true : false}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32.551"
                            height="32.551"
                            viewBox="162.676 25.102 32.551 32.551"
                        >
                            <path
                                d="M191.973 34.868h-26.041v-3.255h26.04v3.255Zm-3.256-9.766h-19.53v3.255h19.53v-3.255Zm6.51 16.276v13.02a3.265 3.265 0 0 1-3.254 3.256h-26.041a3.265 3.265 0 0 1-3.256-3.256v-13.02a3.265 3.265 0 0 1 3.256-3.255h26.04a3.265 3.265 0 0 1 3.256 3.255Zm-9.765 6.51-9.765-5.322v10.628l9.765-5.306Z"
                                fill-rule="evenodd"
                                data-name="Icon material-subscriptions"
                            />
                        </svg>{" "}
                        {apicall ? (
                            <CircularProgress size={20} />
                        ) : isPackageExistInCart(el.id) ? (
                            " Added in Cart"
                        ) : (
                            "Buy Subscription"
                        )}{" "}
                    </button>
                )}
                {el.isBuyed && (
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            !isPackageExistInCart(el.id) && handleAddtoCart(el);
                        }}
                        disabled={isPackageExistInCart(el.id) ? true : false}
                    >
                        {apicall ? (
                            <CircularProgress size={20} />
                        ) : isPackageExistInCart(el.id) ? (
                            "Added in Cart"
                        ) : (
                            "Resubscribe"
                        )}
                    </button>
                )}
                {isLoggedin ?
                    <button className="btn btn-danger"
                        onClick={() => handlePackageFav(isPackagesWishListed(el?.id, favProjects) ? "remove" : "add", el?.id)}
                    >
                        {" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32.551"
                            height="32.551"
                            viewBox="162.676 25.102 32.551 32.551"
                        >
                            <path
                                d="M191.973 34.868h-26.041v-3.255h26.04v3.255Zm-3.256-9.766h-19.53v3.255h19.53v-3.255Zm6.51 16.276v13.02a3.265 3.265 0 0 1-3.254 3.256h-26.041a3.265 3.265 0 0 1-3.256-3.256v-13.02a3.265 3.265 0 0 1 3.256-3.255h26.04a3.265 3.265 0 0 1 3.256 3.255Zm-9.765 6.51-9.765-5.322v10.628l9.765-5.306Z"
                                fill-rule="evenodd"
                                data-name="Icon material-subscriptions"
                            />
                        </svg>{" "}
                        {isPackagesWishListed(el?.id, favProjects) ? "ADDED TO WISHLIST" : "ADD TO WISHLIST"}
                    </button> : ""}
            </div>

        </div>
    )
}


const PackagesView = ({ pp, el }) => {

    const [showDetails, setShowDetails] = useState(false)
    return (
        <>
            <div className="customddrowpdowncontainer">
                <div className="customdp" style={{ fontWeight: 600 }}>
                    {el.project?.length || 0} Training Modules{" "}
                    <i className={!showDetails ? "fa fa-angle-down" : "fa fa-angle-up"} aria-hidden="true" onClick={() => setShowDetails(!showDetails)}></i>
                </div>
                <div className="customdrowpdownContent"></div>
            </div>
            <div className="col-12 p-4">

                {showDetails && <div className="col-md-12 p-4 bg-light">

                    {pp?.length
                        ?
                        pp.map((el, i) => {
                            return (
                                <div className="learning-historytab" index={i}>
                                    <div className="historytablist">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src={ImageBaseUrl + (el?.bannerImage)} />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="historytabcontent">
                                                    <p>{el?.projectTitle}</p>
                                                    <h4>{el?.projectDesc}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <NoDataFound />}

                </div>
                }
            </div>
        </>
    )
}