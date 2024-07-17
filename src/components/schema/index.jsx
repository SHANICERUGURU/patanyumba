import * as yup from "yup"

export const homeFormSchema=yup.object().shape({
    housesize:yup.string("").required("Do not leave field empty") ,
    prize:yup.number("").positive("Invalid amount").required("Do not leave field empty"),
    location:yup.string("").required("Do not leave field empty") ,
    description:yup.string("").required("Do not leave field empty") ,
    imageUrl:yup.string("").required("Do not leave field empty") ,
})
let passwordRegEx = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[A-Z])(?=.*[a-z]).+$/;
export const registerSchema = yup.object().shape({
    username: yup.string().required("Required").min(3, "Minimum 3 characters"),
    password: yup.string().min(8).matches(passwordRegEx, {message: "Invalid Password"}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Must match Password").required("Required")
})
export const loginSchema = yup.object().shape({
    username: yup.string().required("Required").min(3, "Minimum 3 characters"),
    password: yup.string().min(8).matches(passwordRegEx, {message: "Invalid Password"}).required("Required"),
})