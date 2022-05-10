import * as yup from 'yup';
export const loginValidationSchema = yup.object({
    email: yup
        .string('Enter your email address')
        .email('Enter valid email address')
        .required('Enter your email address'),
    password: yup
        .string('Enter your password')
        .min(4, 'Please enter valid password')
        .required('Enter your password'),
});
