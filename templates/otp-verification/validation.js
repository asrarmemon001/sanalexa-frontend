import * as yup from 'yup';
export const otpValidationSchema = yup.object({
    otp: yup
        .string('Enter your OTP').length(6,'Please enter valid OTP')
        .required('Enter your OTP'), 
});
