const AccountDetails = () => {
    return (
        <div className="accountmain">
            <div className="accordion-item">
                <div className="accountdetails">
                    <li><h4><span>1</span>Account details</h4> </li>
                    <li><p>Already have an aaount? <a href="#">Sing in </a></p></li>
                </div>
            </div>
            <div id="collapseOne" className="accordion-collapse">
                <div className="interacordian">
                    <form>
                        <div className="row">
                            <div className="col-md-6 formgrup">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="col-md-6 formgrup">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="col-md-6 formgrup">
                                <label>Email* </label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>

                            <div className="col-md-6 formgrup">
                                <label>Confirm Email*</label>
                                <input type="text" className="form-control" placeholder="Confirm Emai" />
                            </div>

                            <div className="col-md-6 formgrup">
                                <label>Country of residence*</label>
                                <input type="text" className="form-control" placeholder="Country of residence" />
                            </div>

                            <div className="col-md-6 formgrup">
                                <label>Compnany Name</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="" />
                            </div>

                            <div className="col-md-6 formgrup">
                                <label>Tax ID (optional)</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="" />
                            </div>
                        </div>

                        <div className="check-button">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" for="gridCheck1">Example checkbox</label>
                            </div>
                            <button type="submit" className="carts">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AccountDetails