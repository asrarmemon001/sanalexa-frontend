import * as yup from 'yup';

export const validationSchema_org = yup.object({
    organizationName: yup
        .string()
        .required('Enter organization name'),
    email: yup
        .string()
        .required("Enter email address")
        .email("Invalid email address"),
    password: yup
        .string()
        .required("Enter password")
        .min(5, "Minimum 5 Characters Needed"),
    phone: yup
        .string()
        .required("Enter Phone no")
        .matches(RegExp('^[0-9]+$'), "Enter valid phone no.")
        .length(10, "Enter valid phone no."),
    location: yup
        .string()
        .required("Enter Location"),
    address: yup
        .string()
        .required("Enter Address"),
    licenceType: yup.string().required("Select licence type"),
    hardwaresType: yup.string().when("licenceType", {
        is: (v) => { return (v === 'Hardwares & Logins') || (v === 'Hardwares') },
        then: yup.string().required("Select Hardware type"),
    }),
    hardwaresAllowed: yup.string().nullable().matches(RegExp('^[0-9]+$'), "Enter valid no.").when("hardwaresType", {
        is: 'Limited',
        then: yup.string().required("Select Hardware Allowed"),
    }),
    loginsType: yup.string().when("licenceType", {
        is: (v) => { return (v === 'Logins') || (v === 'Hardwares & Logins') },
        then: yup.string().required("Select Login type"),
    }),
    loginsAllowed: yup.string().nullable().matches(RegExp('^[0-9]+$'), "Enter valid no.").when("loginsType", {
        is: 'Limited',
        then: yup.string().required("Select Login Allowed"),
    })
});



export const userValidationSchema = yup.object({
    organizationID: yup
        .string(),
    departmentId: yup
        .string(),
    teamId: yup
        .string(),
    name: yup
        .string()
        .required('Enter name'),
    email: yup
        .string()
        .email("Enter valid email")
        .required('Enter email'),
    password: yup
        .string()
        .required('Enter password'),
    phone: yup
        .string()
        .matches(RegExp('^[0-9]+$'), "Enter valid phone no.")
        .length(10, "Enter valid phone no.")
        .required('Enter phone'),
    gender: yup
        .number().nullable()
        .required('Select gender'),
    age: yup
        .number()
        .required('Enter age'),
    address: yup
        .string(),
    location: yup
        .string(),
    status: yup
        .boolean()
        .required('Status is required')
});
