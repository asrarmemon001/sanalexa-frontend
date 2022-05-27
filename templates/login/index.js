import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap-v5"
import { loginValidationSchema } from "./validation";
import { CircularProgress, TextField } from "@mui/material";
import { loginUser } from "../../utils/api-Request";
import { toast } from "react-toastify";
import { setToken } from "../../utils/constants";

const Login = ({ handleModal, show, setIsLoggedin }) => {
  const [_loginData, setLoginData] = useState({
    loading: false,
    data: null,
    message: "",
    status: 0
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        setLoginData((v) => ({
          ...v,
          loading: true
        }))
        const res = await loginUser(values)
        if (res.status == 200) {
          if (res.data.data.user.emailVerified) {
            setToken(res.data.data.token)
            toast.success(res.data.message);
            handleModal(false)
            setIsLoggedin(true)
            setLoginData((v) => ({
              ...v,
              loading: false
            }))
          } else {
            handleModal("otp", { email: values.email })
          }
        }
      } catch (error) {
        toast.error(error.response.data.message || error.response.statusText);
        setLoginData((v) => ({
          ...v,
          loading: false
        }))
      }

    }
  });

  const handleChange = (event) => {
    formik.setFieldValue(event.target.name, event.target.value)
  }
  useEffect(() => {
    setLoginData({
      loading: false,
      data: null,
      message: "",
      status: 0
    })
  }, [show])
  return (
    <Modal show={show} onHide={() => handleModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6 className="text-center mb-4">Welcome back!</h6>
        <form className="text-start" onSubmit={formik.handleSubmit}>
          <TextField id="form-email" disabled={_loginData.loading} className="mb-3" error={formik.errors.email && formik.touched.email} size="small" label="Email" fullWidth variant="outlined" name="email" type="text" onChange={handleChange} />
          {formik.errors.email && formik.touched.email && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.email}</p>}
          <TextField id="form-password" disabled={_loginData.loading} className="mb-3" error={formik.errors.password && formik.touched.password} size="small" label="Password" fullWidth variant="outlined" name="password" type="password" onChange={handleChange} />
          {formik.errors.password && formik.touched.password && <p className="text-danger px-2 text-sm fw-bold" style={{ marginTop: "-15px" }}>{formik.errors.password}</p>}
          <div className="text-center">
            {_loginData.loading
              ?
              <button className="btn btn-primary w-100 my-4 mb-2 d-flex justify-content-center align-items-center" disabled={true}><span className="me-2 d-none">Sign in </span><CircularProgress style={{ width: 20, height: 20, color: "#ffffff" }} /></button>
              : <button type="submit" className="btn btn-primary w-100 my-4 mb-2 d-flex justify-content-center align-items-center">Sign in</button>}
          </div>
          <p className="mt-4 text-sm text-center">
            Not Registered{' '}
            <span className="text-primary" style={{ cursor: 'pointer' }} onClick={() => handleModal("signup")}>Click here</span>
          </p>
        </form>

      </Modal.Body>
    </Modal>
  )
}
export default Login