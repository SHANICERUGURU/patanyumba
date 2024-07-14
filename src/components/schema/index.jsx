import * as yup from "yup"

export const homeFormSchema=yup.object().shape({
    housesize:yup.string("must be letters").required("Do not leave field empty") ,
    prize:yup.number("enter numbers").positive("Invalid amount").required("Required"),
})