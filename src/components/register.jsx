import React, { useState } from "react";
import { useFormik } from "formik";
import { registerSchema } from "./schema";
import Navbar from "./navbar";
import app from "../firebaseconfig";
import { getDatabase, ref, set, push,get } from "firebase/database";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate()
    const userExists = async (username)=>{
    const db=getDatabase(app)
       const dbRef=ref(db,`patanyumba/users/${username}`)
       const snapshot= await get(dbRef)
       return snapshot.exists()
    }
    const onSubmit = async () => {
        let userIsPresent=await userExists(values.username)
        if (userIsPresent){
            alert("Username already exists")
            setSubmitting(false)
            return;
        }
        const db = getDatabase(app)
        const newDocRef = push(ref(db, `patanyumba/users/${values.username}`))
        set(newDocRef, {
            username: values.username,
            password: values.password,
        }).then((resp) => {
            console.log(resp);
            alert("Registration successful")
            setSubmitting(false)
            navigate("/login")
            setSubmitting(false)
        }).catch((err) => {
            console.log(err);
            alert("Error")
        })
    }
    const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched } = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: registerSchema,
        onSubmit
    })
    return (
        <>
            <Navbar />
            <div className="container">
                <br />
                <br />
                <br />
                <div className="form-area col-md-7">
                    <h3>REGISTER</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="username">User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                placeholder="Username"
                                style={errors.username && touched.username ? { borderColor: "#FC8181" } : {}}
                            />
                            {errors.username && touched.username ? <p className="error-message">{errors.username}</p> : ""}
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                style={errors.password && touched.password ? { borderColor: "#FC8181" } : {}}
                                placeholder="Password" />
                            {errors.password && touched.password ? <p className="error-message">{errors.password}</p> : ""}
                        </div>
                        <div className="form-group">
                            <label for="confirmPassowrd">Confirm Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                style={errors.confirmPassword && touched.confirmPassword ? { borderColor: "#FC8181" } : {}}
                                placeholder="Confirm Password" />
                            {errors.confirmPassword && touched.confirmPassword ? <p className="error-message">{errors.confirmPassword}</p> : ""}
                        </div>
                        <br />
                        <button disabled={isSubmitting} className="btn btn-info" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;