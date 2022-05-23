import { useFormik } from "formik";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap-v5"
import { signupValidationSchema } from "./validation";
import RegisterOrganization from "./organization-form";
import UserRegistration from "./user-form";
import {
    TextField,
    TextareaAutosize,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    RadioGroup,
    Radio,
    ListItemIcon,
    Checkbox,
    ListItemText,
    FormLabel,
    FormControlLabel
} from "@mui/material";
const Signup = ({ handleModal, show, setIsLoggedin }) => {
    const _signupData = useState({
        loading: false,
        data: null,
        message: "",
        status: 0
    })
    const [registerusertype, setRegisterusertype] = useState('0')

    const handleChangeInput = (event) => {
        setRegisterusertype(event.target.value)
    }


    return (
        <Modal show={show} onHide={() => handleModal(false)} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Signup </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                    <RegisterOrganization handleModal={handleModal} setIsLoggedin={setIsLoggedin}/>
                    :
                    <UserRegistration handleModal={handleModal} setIsLoggedin={setIsLoggedin}/>}
                <p className="mt-2 text-sm text-center">
                    Allready Registered{' '}
                    <span className="text-primary" style={{ cursor: 'pointer' }} onClick={() => handleModal("login")}>Click here</span>
                </p>
            </Modal.Body>
        </Modal>
    )
}
export default Signup