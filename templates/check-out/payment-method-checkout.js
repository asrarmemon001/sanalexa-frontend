import React, { useEffect, useState, useContext } from "react";
import AppContext from "../../appContext/index"
import Paymentgateway from "../../components/paymentgateway/Paymentgateway";
const PaymentMethodCheckout = ({inProcess, setInProcess}) => {
    const appContext = useContext(AppContext);
    let { fetchCartList, state } = appContext;
    const cartListIs = state.cartProduct;
    const cartTotal = state.cartTotal;
    const [isCollapse, setIsCollapse] = useState('')

    useEffect(() => {
        if(inProcess === 'payment') {
            setIsCollapse('')
        } else {
            setIsCollapse('collapse')
        }
    }, [inProcess])

    return (<div className="accountmain">
        <div className="accordion-item">
            <div className="accountdetails">
                <li><h4><span>2</span> Payment </h4>
                    <p>Select a Payment method <strong>${cartTotal}</strong></p>
                </li>
            </div>
        </div>
        <div id="collapseOne" className={`accordion-collapse ${isCollapse}`}>
            <div className="interacordian">
                <h3>Pay Now</h3>
                <p>Don't see your preferred Payment method ? Let us know..</p>
                <Paymentgateway cartListIs={cartListIs} cartTotal={cartTotal} type={'cart'} />
            </div>
        </div>
    </div>)
}
export default PaymentMethodCheckout