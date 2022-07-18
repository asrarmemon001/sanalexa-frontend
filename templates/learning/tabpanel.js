import { CircularProgress } from "@mui/material"
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import AppContext from "../../appContext";
import { NoDataFound } from "../../components/NoDataFound/NoDataFound"
import { AddtoCart } from "../../utils/api-Request";
import { ImageBaseUrl } from "../../utils/Baseurl"
import { getSession } from "../../utils/constants";

const TabPanel = ({ projects, percentageData, favorites, packages }) => {
    const apiContext = useContext(AppContext);
    const [apicall, setapicall] = useState(false);
    const {
        playTypeModal
    } = apiContext;
    const isCompleted = (id) => {
        let p = Number(percentageData?.find(el => el.projectId == id)?.precentage)
        const f = p >= 100
        if (isNaN(p)) {
            p = 0;
        }
        return { f, p }
    }

    const isProductExistInCart = (id) => {
        return Boolean(
            apiContext.state.cartProduct?.find(
                (el) => el.id == id && el.type == "project"
            )
        );
    };

    const isPackageExistInCart = (id) => {
        return Boolean(
            apiContext.state.cartProduct?.find(
                (el) => el.id == id && el.type == "package"
            )
        );
    };

    const handleAddtoCart = async (id, type, quantity) => {
        setapicall(id);
        const data = {
            sessionId: getSession(),
            cart: { id: String(id), type, quantity },
        };
        await AddtoCart(data)
            .then((res) => {
                if (res?.status == 200) {
                    // toast.success("Product added to cart");
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

    return (<div className="tabpaneal">
        {projects?.length
            ?
            projects.map((el, i) => {
                return (
                    <div className="learning-historytab" index={i}>
                        <div className="historytablist">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={ImageBaseUrl + (!favorites ? el?.bannerImage : el?.project?.bannerImage)} />
                                </div>
                                <div className="col-md-5">
                                    <div className="historytabcontent">
                                        <p>{!favorites ? el?.projectTitle : el?.project?.projectTitle}</p>
                                        <h4>{!favorites ? el?.projectDesc : el?.project?.projectDesc}</h4>
                                        {favorites ? <h4 className="text-danger">₹ {el?.project.price}</h4> : null}
                                        {favorites
                                            ?
                                            ""
                                            :
                                            <>
                                                <span>Month Year</span>
                                                {/* <h6> <img src="/static/images/feather-ch.png" /> Completed DD/MM/YYYY</h6> */}
                                                <div className="percentage-meter">
                                                    <div className="-meter" style={{ width: `${isCompleted(el?.id).p}%` }} />
                                                </div> {isCompleted(el?.id).p} percent
                                            </>
                                        }

                                    </div>
                                </div>
                                <div className="col-md-4 layers">
                                    <a href="javascript:void(0);" className="downloadcertificate" onClick={(e) => playTypeModal('play', el)}>Play</a>
                                    <div>
                                        {isCompleted(!favorites ? el?.id : el?.project?.id).f && !favorites ? <a href="#" className="downloadcertificate">Download Certificate</a> : null}
                                        {favorites ?
                                            <button
                                                className={
                                                    "btn add-cart"
                                                }
                                                onClick={() => {
                                                    !isProductExistInCart(el?.project?.id) &&
                                                        handleAddtoCart(el?.project?.id, 'project', 1);
                                                }}
                                                disabled={isProductExistInCart(el?.project?.id) ? true : false}
                                            >
                                                {apicall == el?.project?.id ? (
                                                    <CircularProgress size={20} />
                                                ) : (
                                                    <>
                                                        <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i> <span>Add to Cart</span>{""}
                                                    </>
                                                )}
                                            </button>
                                            :
                                            null}
                                        {favorites 
                                        ?
                                        null
                                        : 
                                        <Link href={`/user-project-analytics/${el?.id}`}>
                                        <a className="share">Analytics</a>
                                        </Link>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            :
            packages.length ? null : <NoDataFound />}

        <PackagesView apicall={apicall} packages={packages} favorites={favorites} isCompleted={isCompleted} playTypeModal={playTypeModal} isPackageExistInCart={isPackageExistInCart} handleAddtoCart={handleAddtoCart} />



    </div>)
}

export default TabPanel


const PackagesView = ({ packages, favorites, isCompleted, playTypeModal, isPackageExistInCart, handleAddtoCart, apicall }) => {

    const [showDetails, setShowDetails] = useState(false) 
    return (
        <>
            {packages?.length
                ?
                packages.map((el, i) => {
                    const pp = el?.projects || el?.package?.projects;
                    return (
                        <div className="learning-historytab border p-4" index={`p${i}`}>
                            <div className="historytablist">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={ImageBaseUrl + (!favorites ? el?.bannerImage : el?.package.bannerImage)} />
                                    </div>
                                    <div className="col-md-5">
                                        <div className="historytabcontent">
                                            <p>{!favorites ? el?.packagesName : el?.package?.packagesName}</p>
                                            <h4>{!favorites ? el?.packagesDesc : el?.package?.packagesDesc}</h4>
                                            {favorites ? <h4 className="text-danger">₹ {el?.package.price}</h4> : null}
                                            {/* {favorites
                                            ?
                                            ""
                                            :
                                            <>
                                                <span>Month Year</span> 
                                                <div className="percentage-meter">
                                                    <div className="-meter" style={{ width: `${isCompleted(el?.id || el?.project?.id).p}%` }} />
                                                </div> {isCompleted(el?.id || el?.project?.id).p} percent
                                            </>
                                        } */}

                                        </div>
                                    </div>
                                    <div className="col-md-4 layers">
                                        <div>
                                            {favorites ?
                                        <button
                                            className={
                                                "btn add-cart"
                                            }
                                            onClick={() => {
                                                !isPackageExistInCart(el?.package?.id) &&
                                                    handleAddtoCart(el?.package?.id, 'package', 1);
                                            }}
                                            disabled={isPackageExistInCart(el?.package?.id) ? true : false}
                                        >
                                            {apicall == el?.package?.id ? (
                                                <CircularProgress size={20} />
                                            ) : (
                                                <>
                                                    <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i> <span>Add to Cart</span>{""}
                                                </>
                                            )}
                                        </button>
                                        :
                                        null}

                                            <a href="#" className="share">Share</a>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between px-4 w-100 my-4 align-items-center bg-info text-white cursor-pointer" onClick={() => setShowDetails(Boolean(showDetails) && (showDetails == i+1)? false : i + 1)}>
                                        <p className="m-0">Details</p>
                                        <button className="btn text-white" >{Boolean(showDetails) && (showDetails == i+1) ? `Hide project details` : `See project details`}</button>
                                    </div>
                                    {showDetails && showDetails == i+1 && <div className="col-md-12 p-4 bg-light">

                                        {pp?.length
                                            ?
                                            pp.map((el, i) => {
                                                return (
                                                    <div className="learning-historytab" index={i}>
                                                        <div className="historytablist">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <img src={ImageBaseUrl + (el?.bannerImage)} />
                                                                </div>
                                                                <div className="col-md-5">
                                                                    <div className="historytabcontent">
                                                                        <p>{ el?.projectTitle }</p>
                                                                        <h4>{ el?.projectDesc }</h4>
                                                                        {favorites
                                                                            ?
                                                                            ""
                                                                            :
                                                                            <>
                                                                                <span>Month Year</span>
                                                                                {/* <h6> <img src="/static/images/feather-ch.png" /> Completed DD/MM/YYYY</h6> */}
                                                                                <div className="percentage-meter">
                                                                                    <div className="-meter" style={{ width: `${isCompleted(el?.id).p}%` }} />
                                                                                </div> {isCompleted(el?.id).p} percent
                                                                            </>
                                                                        }

                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 layers">
                                                                    <a href="javascript:void(0);" className="downloadcertificate" onClick={(e) => playTypeModal('play', el)}>Play</a>
                                            
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
                            </div>
                        </div>
                    )
                }) : null}
        </>
    )
}