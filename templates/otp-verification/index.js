import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap-v5"
import { otpValidationSchema } from "./validation";
import { CircularProgress, TextField } from "@mui/material";
import { verifyOTPApi, resendOtp } from "../../utils/api-Request";
import { toast } from "react-toastify";
import { setToken } from "../../utils/constants";
import OtpInput from "react-otp-input";

const OTPVerification = ({ handleModal, show, setIsLoggedin, modalPayload }) => {
  const [_otpData, setOtpData] = useState({
    data: null,
    message: "",
    status: 0,
    loading: false
  })

  const formik = useFormik({
    initialValues: {
      otp: "",
      email: ""
    },
    validationSchema: otpValidationSchema,
    onSubmit: async (values) => {
      try {
        setOtpData((v) => ({
          ...v,
          loading: true
        }))
        const res = await verifyOTPApi(values)
        if (res.status == 200) {
          setToken(res.data.data.token)
          toast.success(res.data.message);
          handleModal(false)
          setIsLoggedin(true)
          setOtpData((v) => ({
            ...v,
            loading: false
          }))
        }
      } catch (error) {
        toast.error(error.response.data.message || error.response.statusText);
        setOtpData((v) => ({
          ...v,
          loading: false
        }))
      }

    }
  });

  const handleChange = (value) => {
    formik.setFieldValue('otp', value)
  }
  useEffect(() => {
    if (modalPayload?.email) {
      formik.setFieldValue('email', modalPayload.email)
    }
  }, [modalPayload])

  const handleResendOtp = async () => {
    const data = { email: modalPayload?.email }
    const resendOtpIs = await resendOtp(data);
    if (resendOtpIs) {
      const MsgIs = resendOtpIs?.data?.message
      toast.success(MsgIs);
    }
  }
  useEffect(() => {
    return () => {
      formik.resetForm()
    }

  }, [])
  return (
    <Modal show={show} onHide={() => { }} centered>

      <Modal.Header>
        <Modal.Title>Email Verification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6 className="text-center mb-4">Enter OTP received <span className="text-danger">{formik.values.email}</span>.</h6>
        <form className="text-start otp-form" onSubmit={formik.handleSubmit}>
          <OtpInput
            value={formik.values.otp}
            onChange={handleChange}
            hasErrored={Boolean(formik.touched.otp) && Boolean(formik.errors.otp)}
            errorStyle={{ borderColor: "#ff0000" }}
            isInputNum={true}
            className="text-center"
            numInputs={6}
            separator={<span>-</span>}
          />
          {formik.errors.otp && formik.touched.otp && <p className="text-danger px-2 text-sm fw-bold text-center" style={{ marginTop: "0" }}>{formik.errors.otp}</p>}

          <div className="text-center">
            {_otpData.loading
              ?
              <button className="btn btn-primary w-100 my-4 mb-2 d-flex justify-content-center align-items-center" disabled={true}><span className="me-2 d-none">Submit</span><CircularProgress style={{ width: 20, height: 20, color: "#ffffff" }} /></button>
              : <button type="submit" className="btn btn-primary w-100 my-4 mb-2 d-flex justify-content-center align-items-center">Submit</button>}
          </div>
          <p className="mt-4 text-sm text-center">
            Not received{' '}
            <span className="text-primary" style={{ cursor: 'pointer' }} onClick={() => handleResendOtp()}>Resend OTP</span>
          </p>
          <p className="mt-4 text-sm text-center">
            <span className="text-primary" style={{ cursor: 'pointer' }} onClick={() => handleModal("login")}>Back to login</span>
          </p>
        </form>

      </Modal.Body>
    </Modal>
  )
}
export default OTPVerification