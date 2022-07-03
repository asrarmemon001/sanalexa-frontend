const CheckoutSummary = () => {
    return (
        <>
            <div className="accountmain">
                <h4 className="order">Order summary</h4>
                <div className="orders plan-list">
                    <table>
                    <tbody>
                        <tr>
                            <th>PLAN</th>
                            <th>PRICE</th>
                        </tr>
                        <tr>
                            <td>individual Standard</td>
                            <td>₹1.499 </td>
                        </tr>
                        <tr>
                            <td>SUB TOTAL </td>
                            <td>₹1.499 </td>
                        </tr>
                        <tr>
                            <td>ESTIMATED TAX<sup>1</sup> </td>
                            <td>₹ 0 </td>
                        </tr>
                        </tbody>
                    </table>
                </div>



                <ul className="plan-list">
                    <li><p>Order summary</p> <p>1.499</p></li>
                </ul>
            </div>
            <p className="Order-text">In publishing and graphic design, Lorem ipsum is a placeholder text commonly   Lorem ipsum may be used as a placeholder before final copy is....</p>

        </>
    )
}
export default CheckoutSummary