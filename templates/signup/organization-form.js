import {
    TextField,
    TextareaAutosize,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
    Input,
    Button,
    CircularProgress
} from "@mui/material";
import { useFormik } from "formik";
import { validationSchema_org } from "./validation";
import { organizationLicenceType, organizationType } from "../../utils/constants/organization-constants"
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { setToken } from "../../utils/constants";
import { registerUser } from "../../utils/api-Request";

const RegisterOrganization = ({ handleModal, setIsLoggedin }) => {

    const [_organizationData, setOrganizationData] = useState({
        loading: false,
        data: null,
        message: "",
        status: 0
    })


    const formik = useFormik({
        initialValues: {
            organizationName: "",
            email: "",
            password: "",
            phone: "",
            location: "",
            address: "",
            licenceType: "",
            hardwaresType: "",
            hardwaresAllowed: "",
            loginsType: "",
            loginsAllowed: "",
            brainWave: false,
            heartRate: false,
            heatMap: false,
            status: true,
            userRole: "organization"
            //   assignedProject: [],
            //   assignedPackages: []
        },
        validationSchema: validationSchema_org,

        onSubmit: async (values) => {
            try {
                setOrganizationData((v) => ({
                    ...v,
                    loading: true
                }))
                const res = await registerUser(values)
                if (res.status == 200) {
                    setToken(res.data.data.token)
                    toast.success(res.data.message);
                    handleModal(false)
                    setIsLoggedin(true)
                    setOrganizationData((v) => ({
                        ...v,
                        loading: false
                    }))
                }
            } catch (error) {
                toast.error(error.response.data.message || error.response.statusText);
                setOrganizationData((v) => ({
                    ...v,
                    loading: false
                }))
            }

        }

    });


    const handleChangeInput = (event) => {
        formik.setFieldValue(event.target.name, event.target.value)
    }
    const handleChangeInputCheckbox = (event) => {
        formik.setFieldValue(event.target.name, event.target.checked)
    }
    return (<form onSubmit={formik.handleSubmit}>
        <div className="card-bordered px-3 pb-3 registerForm">
            <div className="fieldList">
                <TextField id="organization-name" className="mb-3" error={formik.errors.organizationName && formik.touched.organizationName} value={formik.values.organizationName} name="organizationName" onChange={handleChangeInput} label="Organization Name" type="text" fullWidth variant="outlined" />
                {formik.errors.organizationName && formik.touched.organizationName && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.organizationName}</p>}
            </div>
            <div className="fieldList">
                <TextField id="organization-email" className="mb-3" error={formik.errors.email && formik.touched.email} value={formik.values.email} name="email" onChange={handleChangeInput} label="Email" type="email" fullWidth variant="outlined" />
                {formik.errors.email && formik.touched.email && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.email}</p>}
            </div>
            <div className="fieldList">
                <TextField id="organization-password" className="mb-3" error={formik.errors.password && formik.touched.password} value={formik.values.password} name="password" onChange={handleChangeInput} label="Password" type="password" fullWidth variant="outlined" />
                {formik.errors.password && formik.touched.password && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.password}</p>}
            </div>
            <div className="fieldList">
                <TextField id="organization-phone" className="mb-3" error={formik.errors.phone && formik.touched.phone} value={formik.values.phone} name="phone" onChange={handleChangeInput} label="Phone" type="text" fullWidth variant="outlined" />
                {formik.errors.phone && formik.touched.phone && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.phone}</p>}
            </div>
            <div className="fieldList">
                <TextField id="organization-location" className="mb-3" error={formik.errors.location && formik.touched.location} value={formik.values.location} name="location" onChange={handleChangeInput} label="Location" type="text" fullWidth variant="outlined" />
                {formik.errors.location && formik.touched.location && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.location}</p>}
            </div>
            <div className="fieldList">
                <TextField id="supporting-address" className="mb-3" error={formik.errors.address && formik.touched.address} value={formik.values.address} name="address" onChange={handleChangeInput} label="Address" fullWidth
                    InputProps={{
                        inputComponent: TextareaAutosize,
                        minRows: 4,
                        maxRows:4
                    }}
                />
                {formik.errors.address && formik.touched.address && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.address}</p>}
            </div>
        </div>
        <h5 className="text-capitalize px-4 mb-3"> Enter Organization Licence Details</h5>
        <div className="card-bordered px-3 pb-3">
            <FormControl fullWidth className="mb-3" size="">
                <InputLabel id="select-license-type-label">Licence Type</InputLabel>
                <Select
                    labelId="select-license-type-label"
                    id="select-license-type-label"
                    label="Licence Type"
                    name="licenceType"
                    error={formik.errors.licenceType && formik.touched.licenceType}
                    onChange={handleChangeInput}
                    value={formik.values.licenceType}
                >
                    {organizationLicenceType.map(el => {
                        return <MenuItem value={el.id} key={el.id}>{el.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
            {formik.errors.licenceType && formik.touched.licenceType && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.licenceType}</p>}

            {formik.values.licenceType === "Hardwares" || formik.values.licenceType === "Hardwares & Logins"
                ?
                <>
                    <FormControl fullWidth className="mb-3" size="">
                        <InputLabel id="select-hardware-type-label">Hardware Type</InputLabel>
                        <Select
                            labelId="select-hardware-type-label"
                            id="select-hardware-type-label"
                            label="Hardware Type"
                            error={formik.errors.hardwaresType && formik.touched.hardwaresType}
                            value={formik.values.hardwaresType}
                            name="hardwaresType"
                            onChange={handleChangeInput}
                        >
                            {organizationType.map(el => {
                                return <MenuItem value={el.id} key={el.id}>{el.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    {formik.errors.hardwaresType && formik.touched.hardwaresType && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.hardwaresType}</p>}

                    {formik.values.hardwaresType === "Limited"
                        ?
                        <>
                            <TextField id="hardware-allowed" className="mb-3" size="" error={formik.errors.hardwaresAllowed && formik.touched.hardwaresAllowed} label="Number of Hardwares Allowed" type="text" fullWidth variant="outlined" value={formik.values.hardwaresAllowed} name="hardwaresAllowed" onChange={handleChangeInput} />
                            {formik.errors.hardwaresAllowed && formik.touched.hardwaresAllowed && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.hardwaresAllowed}</p>}

                        </>
                        :
                        null}
                </> : null}
            {formik.values.licenceType === "Logins" || formik.values.licenceType === "Hardwares & Logins"
                ?
                <>
                    <FormControl fullWidth className="mb-3" size=""> 
                        <InputLabel id="select-login-type-label">Login Type</InputLabel>
                        <Select
                            labelId="select-login-type-label"
                            id="select-login-type-label"
                            label="Login Type"
                            error={formik.errors.loginsType && formik.touched.loginsType}
                            value={formik.values.loginsType}
                            name="loginsType"
                            onChange={handleChangeInput}
                        >
                            {organizationType.map(el => {
                                return <MenuItem value={el.id} key={el.id}>{el.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    {formik.errors.loginsType && formik.touched.loginsType && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.loginsType}</p>}

                    {formik.values.loginsType === 'Limited'
                        ?
                        <>
                            <TextField id="login-allowed" className="mb-3" size="" label="Number of Logins Allowed" type="text" fullWidth variant="outlined" name="loginsAllowed"
                                value={formik.values.loginsAllowed}
                                error={formik.errors.loginsAllowed && formik.touched.loginsAllowed}
                                onChange={handleChangeInput} />
                            {formik.errors.loginsAllowed && formik.touched.loginsAllowed && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.loginsAllowed}</p>}

                        </>
                        : null}
                </>
                :
                null
            }
            <div className="row">
                <div className="col-md-3">
                    <div className="form-check form-switch d-flex align-items-center mb-3  is-filled">
                        <input className="form-check-input" type="checkbox" id="heartRate" name="heartRate" checked={formik.values.heartRate} onChange={handleChangeInputCheckbox} />
                        <label className="form-check-label mb-0 ms-2" htmlFor="heartRate">Heart Rate</label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-check form-switch d-flex align-items-center mb-3  is-filled">
                        <input className="form-check-input" type="checkbox" id="heatMap" name="heatMap" checked={formik.values.heatMap} onChange={handleChangeInputCheckbox} />
                        <label className="form-check-label mb-0 ms-2" htmlFor="heatMap">Heat Map</label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-check form-switch d-flex align-items-center mb-3  is-filled">
                        <input className="form-check-input" type="checkbox" id="brainWave" name="brainWave" checked={formik.values.brainWave} onChange={handleChangeInputCheckbox} />
                        <label className="form-check-label mb-0 ms-2" htmlFor="brainWave">Brain Wave</label>
                    </div>
                </div>
            </div>

        </div>
        <div className="fieldList fullwidth ml-0">
            <div className="mb-3 text-end px-3">
                {_organizationData.loading
                    ?
                    <button className="btn w-100 btn-primary mb-0" disabled={true}><span className="me-2 d-none">Signup </span><CircularProgress style={{ width: 14, height: 14, color: "#ffffff" }} /></button>
                    :
                    <button className="btn w-100 btn-primary mb-0" type="submit">Signup</button>}
            </div>
        </div>
    </form>)
}
export default RegisterOrganization