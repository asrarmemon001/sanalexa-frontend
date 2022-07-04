import { CircularProgress } from "@mui/material"
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import AppContext from "../../appContext";
import { NoDataFound } from "../../components/NoDataFound/NoDataFound"
import { AddtoCart } from "../../utils/api-Request";
import { ImageBaseUrl } from "../../utils/Baseurl"
import { getSession } from "../../utils/constants";

const TabPanel = ({ projects, percentageData, favorites }) => {
    const apiContext = useContext(AppContext);
    const [apicall, setapicall] = useState(false);
    const {
        playTypeModal
    } = apiContext;
    const isCompleted = (id) => {
        let p = Number(percentageData?.find(el => el.projectId == id)?.precentage)
        const f = p >= 100
        if(isNaN(p)) {
            p  = 0;
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

    const handleAddtoCart = async (id) => {
        setapicall(id);
        const data = {
          sessionId: getSession(),
          cart: { id: String(id), type: "project", quantity: 1 },
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
                                    <img src={ImageBaseUrl + (el?.bannerImage || el?.project?.bannerImage)} />
                                </div>
                                <div className="col-md-5">
                                    <div className="historytabcontent">
                                        <p>{el?.projectTitle || el?.project?.projectTitle}</p>
                                        <h4>{el?.projectDesc || el?.project?.projectDesc}</h4>
                                        {favorites
                                            ?
                                            ""
                                            :
                                            <>
                                                <span>Month Year</span>
                                                {/* <h6> <img src="/static/images/feather-ch.png" /> Completed DD/MM/YYYY</h6> */}
                                                <div className="percentage-meter">
                                                    <div className="-meter" style={{ width: `${isCompleted(el?.id || el?.project?.id).p}%` }} />
                                                </div> {isCompleted(el?.id || el?.project?.id).p} percent
                                            </>
                                        }

                                    </div>
                                </div>
                                <div className="col-md-4 layers">
                                    <a href="javascript:void(0);" className="downloadcertificate" onClick={(e) => playTypeModal('play', el)}>Play</a>
                                    <div>
                                    {isCompleted(el?.id || el?.project?.id).f && !favorites ? <a href="#" className="downloadcertificate">Download Certificate</a> : null}
                                    {favorites ?
                                        <button
                                            className={
                                                "btn add-cart"
                                            }
                                            onClick={() => {
                                                !isProductExistInCart(el.id) &&
                                                    handleAddtoCart(el?.id, 'project', 1);
                                            }}
                                            disabled={isProductExistInCart(el.id) ? true : false}
                                        >
                                            {apicall == el.id ? (
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
                            </div>
                        </div>
                    </div>
                )
            })
            :
            <NoDataFound />}
    </div>)
}

export default TabPanel