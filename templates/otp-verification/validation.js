import * as yup from 'yup';
export const otpValidationSchema = yup.object({
    otp: yup
        .number('Enter your OTP')
        .required('Enter your OTP'), 
});
