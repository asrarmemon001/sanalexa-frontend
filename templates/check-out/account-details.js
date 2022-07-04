import AppContext from "../../appContext/index";
import { useState, useContext, useEffect } from "react";
import RegisterOrganization from "../signup/organization-form";
import UserRegistration from "../signup/user-form";
import {
    FormControl,
    RadioGroup,
    Radio,
    FormLabel,
    FormControlLabel
} from "@mui/material";

const AccountDetails = ({inProcess, setInProcess}) => {
    const appContext = useContext(AppContext);
    const {
        loginSignupModal,
        setIsLoggedin,
        handleModal
    } = appContext;
    const {
        user
      } = appContext.state;
    const [registerusertype, setRegisterusertype] = useState('0')
    const [loginUser, setLoginUser] = useState({});
    const [isCollapse, setIsCollapse] = useState('')
    const handleChangeInput = (event) => {
        setRegisterusertype(event.target.value)
    }

    useEffect(() => {
        if(user && user.data && user.data.data && user.data.data.id) {
            setLoginUser(user.data.data);
            setIsCollapse('collapse')
            setInProcess('confirm')
        }
    }, [user])

    useEffect(() => {
        if(inProcess === 'account') {
            setIsCollapse('')
        } else {
            setIsCollapse('collapse')
        }
    }, [inProcess])

    return (
        <div className="accountmain">
            <div className="accordion-item">
                <div className="accountdetails">
                    <li><h4><span>1</span>Account details</h4> </li>
                    {(!loginUser || !loginUser.id) && <li><p>Already have an account? <a href="javascript:void(0);" onClick={() => loginSignupModal("login")}>Sign in </a></p></li>}
                    {(loginUser && loginUser.id) && <li><p>You are Logged in <b style={{color: 'green'}}>{loginUser.name}</b></p></li>}
                </div>
            </div>
            <div id="collapseOne" className={`accordion-collapse ${isCollapse}`} >
                <div className="interacordian">
                    <div className="card-bordered px-3 pb-3 col-md-6">
                        <FormControl className="registers">
                            <FormLabel id="gender-label">Register as</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="gender-label"
                                name="gender"
                                value={registerusertype}
                                onChange={handleChangeInput}
                            >
                                <FormControlLabel value="0" control={<Radio />} label="User" />
                                <FormControlLabel value="1" control={<Radio />} label="Organization" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    {registerusertype == '1'
                        ?
                        <RegisterOrganization handleModal={handleModal} setIsLoggedin={setIsLoggedin} />
                        :
                        <UserRegistration handleModal={handleModal} setIsLoggedin={setIsLoggedin} />}
                </div>
            </div>
        </div>
    )
}
export default AccountDetails