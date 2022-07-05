import React, { useEffect, useState, useContext } from "react";
import AppContext from "../../appContext/index"
import { ImageBaseUrl } from "../../utils/Baseurl";
import { getSession } from "../../utils/constants";
import { RemoveCartItem } from "../../utils/api-Request";

const ReviewAndConfirm = ({ inProcess, setInProcess }) => {
    const appContext = useContext(AppContext);
    let { fetchCartList, state } = appContext;
    const cartListIs = state.cartProduct;
    const cartTotal = state.cartTotal;
    const [isCollapse, setIsCollapse] = useState('')

    const handleRemove = async (id, type) => {
        const data = {
            sessionId: getSession(),
            id: id,
            type,
        };
        await RemoveCartItem(data)
            .then((res) =>
                res?.status === 200
                    ? toast.success("successfully Removed")
                    : toast.error("something went wrong")
            )
            .catch((error) => console.error(error));
        await fetchCartList()
    };


    useEffect(() => {
        if (inProcess === 'confirm') {
            setIsCollapse('')
        } else {
            setIsCollapse('collapse')
        }
    }, [inProcess])

    const calculatedPrice = (p, d) => {
        if (d?.length) {
            let amt = Number(p);

            for (let i = 0; i < d.length; i++) {
                amt = amt + Number(d[i].price)
            }

            return amt

        } else {
            return p
        }
    }

    return (
        <div className="accountmain">
            <div className="accordion-item">
                <div className="accountdetails">
                    <li><h4><span>2</span> Review and confirm  </h4> </li>
                    <li> Secure checkout  </li>
                </div>
            </div>
            <div id="collapseOne" className={`accordion-collapse ${isCollapse}`}>
                <div className="review-confirm interacordian">
                    {cartListIs && cartListIs.length
                        ?
                        <>
                            <table>
                                <tbody>
                                    {cartListIs.map((el, index) => (
                                        el.type == "project"
                                            ? <tr>
                                                <td>
                                                    <div className="reviewItem mb-4">
                                                        <figure><img src={ImageBaseUrl + el.productInfo.bannerImage} alt="" /></figure>
                                                        <h4>{`${el.productInfo.projectTitle}`} <span className="fs-16 text-danger">₹ {el.productInfo.price}</span>
                                                            <span className="badge bg-danger text-white ml-4">{el.type}</span>
                                                            <small>
                                                                {el.productInfo.projectDesc}
                                                                {el?.selectServices?.length
                                                                    ? <>
                                                                        <h6 className="w-100 mt-3 text-bolder">Selected services</h6>
                                                                        {el?.selectServices.map(l => {
                                                                            return (<p>{`${l.name}`} <span className="fs-16 text-danger">₹ {l.price}</span></p>)
                                                                        })}

                                                                    </> : null}
                                                            </small>
                                                        </h4>


                                                    </div>
                                                </td>
                                                <td><strong className="accountdetails">₹ {calculatedPrice(el.productInfo.price, el?.selectServices)} </strong> <span><del> ₹ {calculatedPrice(el.productInfo.price, el?.selectServices)}</del> 0% Discount</span></td>
                                                <td><button type="submit" className="carts" onClick={() => handleRemove(el.id, el.type)}>Remove</button></td>
                                            </tr>
                                            :
                                            <PackageView el={el} />
                                    ))
                                    }
                                </tbody>
                            </table>
                            <button type="submit" className="carts" onClick={() => {
                                setIsCollapse('collapse')
                                setInProcess('payment')
                            }
                            } >Purchase</button>
                        </>
                        : <div>No Record available</div>
                    }

                </div>
            </div>
        </div>
    )
}
export default ReviewAndConfirm


const PackageView = ({ el }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <tr className="">
                <td>
                    <div className="reviewItem">
                        <figure><img src={ImageBaseUrl + el.productInfo.bannerImage} alt="" /></figure>
                        <h4>{`${el.productInfo.packagesName}`} <span className="badge bg-danger text-white ml-4">{el.type}</span><small>{el.productInfo.packagesDesc}</small></h4>
                        <div className="customddrowpdowncontainer mb-2">
                            <div className="customdp" style={{ fontSize: 22 }} onClick={() => setToggle(!toggle)}>{toggle ?`Hide project details` : `Show project details`}
                                {!toggle ? <i className="fa fa-angle-down" aria-hidden="true"></i> : <i className="fa fa-angle-up" aria-hidden="true"></i>}
                            </div>
                            <div className="customdrowpdownContent"></div>
                        </div>
                    </div>
                </td>
                <td><strong className="accountdetails">₹ {el.productInfo.price} </strong> <span><del> ₹ {el.productInfo.price}</del> 0% Discount</span></td>
                <td><button type="submit" className="carts" onClick={() => handleRemove(el.id, el.type)}>Remove</button></td>
            </tr>

            {el?.project?.length && toggle
                ?
                el.project.map((l, i) => {
                    return (<tr key={`w-${i}`}>
                        <td>
                            <div className="reviewItem mb-4">
                                <figure><img src={ImageBaseUrl + l.bannerImage} alt="" /></figure>
                                <h4>{`${l.projectTitle}`}
                                    <span className="badge bg-danger text-white ml-4">{l.type}</span>
                                    <small>
                                        {l.projectDesc}
                                        {l?.selectServices?.length
                                            ? <>
                                                <h6 className="w-100 mt-3 text-bolder">Selected services</h6>
                                                {l?.selectServices.map(ll => {
                                                    return (<p>{`${ll.name}`} <span className="fs-16 text-danger">₹ {ll.price}</span></p>)
                                                })}

                                            </> : null}
                                    </small>
                                </h4>
                            </div>
                        </td>
                    </tr>)
                })

                : null}
        </>
    )
}