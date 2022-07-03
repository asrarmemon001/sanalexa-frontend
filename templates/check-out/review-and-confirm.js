const ReviewAndConfirm = () => {
    return (<div className="accountmain">
        <div className="accordion-item">
            <div className="accountdetails">
                <li><h4><span>3</span> Review and confirm  </h4> </li>
                <li> Secure checkout  </li>
            </div>
        </div>
        <div id="collapseOne" className="accordion-collapse">
            <div className="review-confirm interacordian">
                <table>
                <tbody>
                <tr>
                        <td>
                            <div className="reviewItem">
                                <figure><img src="/static/images/learning.jpeg" alt="" /></figure>
                                <h4>{`Course 2D - 3D Space layers, Cameras & Depth`} <small>Sector’s name</small></h4>
                            </div>
                        </td>
                        <td><strong className="accountdetails">₹ 499 </strong> <span><del> ₹ 899</del>16% Discount</span></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="reviewItem">
                                <figure><img src="/static/images/learning.jpeg" alt="" /></figure>
                                <h4>{`Course 2D - 3D Space layers, Cameras & Depth`} <small>Sector’s name</small></h4>
                            </div>
                        </td>
                        <td><strong className="accountdetails">₹ 499 </strong> <span><del> ₹ 899</del>16% Discount</span></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="reviewItem">
                                <figure><img src="/static/images/learning.jpeg" alt="" /></figure>
                                <h4>{`Course 2D - 3D Space layers, Cameras & Depth`} <small>Sector’s name</small></h4>
                            </div>
                        </td>
                        <td><strong className="accountdetails">₹ 499 </strong> <span><del> ₹ 899</del>16% Discount</span></td>
                    </tr>
                </tbody>
                </table>
                <button type="submit" className="carts">Purchase</button>
            </div>
        </div>
    </div>)
}
export default ReviewAndConfirm