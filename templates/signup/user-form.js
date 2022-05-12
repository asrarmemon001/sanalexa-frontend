import React, { useEffect, useState } from "react";
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
    FormControlLabel,
    CircularProgress
} from "@mui/material";
import { userValidationSchema } from "./validation"
import { useFormik } from "formik";
import { locationList } from "../../utils/constants/locationList"
import { registerUser } from "../../utils/api-Request";
import { setToken } from "../../utils/constants";
import { toast } from "react-toastify";
const UserRegistration = ({setIsLoggedin, handleModal}) => {
    const [_userData, setUserData] = useState({
        loading: false,
        data: null,
        message: "",
        status: 0
    })

    const formik = useFormik({
        initialValues: {
            organizationID: "",
            departmentId: "",
            teamId: "",
            name: "",
            email: "",
            password: "",
            phone: "",
            gender: '0', // 0 for male and 1 for female
            age: "",
            address: "",
            location: "",
            status: true,
            userRole: "user",
            //   projectAllow: [],
            //   packagesAllow: []
        },
        validationSchema: userValidationSchema,
        onSubmit: async(values) => {
            try {
                setUserData((v)=>({
                  ...v,
                  loading:true
                }))
                const res = await registerUser(values) 
                if (res.status == 200) {
                  setToken(res.data.data.token)
                  toast.success(res.data.message);
                  handleModal(false)
                  setIsLoggedin(true)
                  setUserData((v)=>({
                    ...v,
                    loading:false
                  }))
                }
              } catch (error) {
                toast.error(error.response.data.message || error.response.statusText);
                setUserData((v)=>({
                  ...v,
                  loading:false
                }))
              }
        
            }
        
    });



    const handleChangeInput = (event) => {
        formik.setFieldValue(event.target.name, event.target.value)
    }


    return (<form onSubmit={formik.handleSubmit}>
        <div className="card-bordered px-3 pb-3 registerForm">
            <div class="fieldList">
            <TextField
                id="name"
                className="mb-3"
                name="name"
                error={formik.errors.name && formik.touched.name}
                onChange={handleChangeInput}
                value={formik.values.name}
                size=""
                label="Name"
                fullWidth
                variant="outlined" />
            {formik.errors.name && formik.touched.name && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.name}</p>}
            </div>
            <div class="fieldList">
            <TextField
                id="email"
                className="mb-3"
                name="email"
                error={formik.errors.email && formik.touched.email}
                onChange={handleChangeInput}
                value={formik.values.email}
                size=""
                label="Email"
                type="email"
                fullWidth
                variant="outlined" />
            {formik.errors.email && formik.touched.email && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.email}</p>}
            </div>
            <div class="fieldList">
            <TextField
                id="password"
                className="mb-3"
                name="password"
                error={formik.errors.password && formik.touched.password}
                onChange={handleChangeInput}
                value={formik.values.password}
                size=""
                label="Password"
                type="password"
                fullWidth
                variant="outlined" />
            {formik.errors.password && formik.touched.password && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.password}</p>}
            </div>
            <div class="fieldList">
           <TextField
                id="phone"
                className="mb-3"
                name="phone"
                error={formik.errors.phone && formik.touched.phone}
                onChange={handleChangeInput}
                value={formik.values.phone}
                size=""
                label="Phone"
                fullWidth
                variant="outlined" />
            {formik.errors.phone && formik.touched.phone && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.phone}</p>}
            </div>
            <div class="fieldList">
            <FormControl>
                <FormLabel id="gender-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="gender-label"
                    name="gender"
                    value={formik.values.gender}
                    onChange={handleChangeInput}
                >
                    <FormControlLabel value="0" control={<Radio />} label="Male" />
                    <FormControlLabel value="1" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>
            {formik.errors.gender && formik.touched.gender && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.gender}</p>}
            </div>
            <div class="fieldList">
            <TextField
                id="age"
                className="mb-3"
                name="age"
                error={formik.errors.age && formik.touched.age}
                onChange={handleChangeInput}
                value={formik.values.age}
                size=""
                label="Age"
                fullWidth
                variant="outlined" />
            {formik.errors.age && formik.touched.age && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.age}</p>}
            </div>
            <div class="fieldList"> 
            <TextField
                id="address"
                className="mb-3"
                value={formik.values.address}
                name="address"
                error={formik.errors.address && formik.touched.address}
                onChange={handleChangeInput}
                size=""
                label="Address"
                fullWidth
                InputProps={{
                    inputComponent: TextareaAutosize,
                    minRows: 4
                }}
            />
            {formik.errors.address && formik.touched.address && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.address}</p>}
            </div>
            <div class="fieldList"> 
            <FormControl fullWidth className="mb-3" size="">
                <InputLabel id="select-location-label">Select Location</InputLabel>
                <Select
                    labelId="select-location-label"
                    id="select-location-label"
                    label="Sector Location"
                    value={formik.values.location}
                    name="location"
                    onChange={handleChangeInput}
                    error={formik.errors.location && formik.touched.location}
                >
                    {locationList.map((el) => {
                        return (<MenuItem key={el.id} value={el.id} disabled={!el.active}>{el.name}</MenuItem>)
                    })}
                </Select>
            </FormControl>
            {formik.errors.location && formik.touched.location && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.location}</p>}
            </div>
            <div class="fieldList fullwidth">

            <div className="mb-3 text-end">
                {_userData.loading
                    ?
                    <button className="btn w-100 btn-primary mb-0" disabled={true}><span className="me-2 d-none">Signup </span><CircularProgress style={{ width: 14, height: 14, color: "#ffffff" }} /></button>
                    :
                    <button className="btn w-100 btn-primary mb-0" type="submit">Signup</button>}
            </div>
            </div>
        </div>
    </form>)
}
export default UserRegistration