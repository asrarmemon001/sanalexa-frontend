import React, { useEffect, useState, useContext } from "react";
import AppContext from "../../appContext/index"
import { ImageBaseUrl } from "../../utils/Baseurl";
import { getSession } from "../../utils/constants";
import { RemoveCartItem } from "../../utils/api-Request";

const ReviewAndConfirm = ({inProcess, setInProcess}) => {
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
        if(inProcess === 'confirm') {
            setIsCollapse('')
        } else {
            setIsCollapse('collapse')
        }
    }, [inProcess])

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
                                            <div className="reviewItem">
                                                <figure><img src={ImageBaseUrl + el.productInfo.bannerImage} alt="" /></figure>
                                                <h4>{`${el.productInfo.projectTitle}`} <small>{el.productInfo.projectDesc}</small></h4>
                                            </div>
                                        </td>
                                        <td><strong className="accountdetails">₹ {el.productInfo.price} </strong> <span><del> ₹ {el.productInfo.price}</del> 0% Discount</span></td>
                                        <td><button type="submit" className="carts" onClick={() => handleRemove(el.id, el.type)}>Remove</button></td>
                                    </tr>
                                    : <tr></tr>
                            ))
                            }
                        </tbody>
                    </table>
                    <button type="submit" className="carts" onClick={() =>
                    {
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