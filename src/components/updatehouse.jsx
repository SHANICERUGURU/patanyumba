import React from "react";
import Navbar from "./navbar";
import { useFormik } from "formik";
import { homeFormSchema } from "./schema";
import { useLocation } from "react-router-dom";
import { getDatabase,ref,set } from "firebase/database";
import app from "../firebaseconfig";
const UpdateHouse = () => {
    const location = useLocation()
    const house = location.state
    console.log(house);
    const onSubmit = async () => {
        const db = getDatabase(app)
        const newDocRef = ref(db, "patanyumba/houses/"+house.houseId);
        set(newDocRef, {
            housesize: values.housesize,
            location: values.location,
            prize: values.prize,
            description: values.description,
            imageUrl: values.imageUrl
        }).then((resp) => {
            console.log(resp)
            alert("Data Saved")
        }).catch((err) => {
            console.log(err)
            alert("Error")
        })
        //resetForm()
    }
    const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched, resetForm } = useFormik({
        initialValues: {
            housesize: house.housesize,
            prize: house.prize,
            location: house.location,
            description: house.description,
            imageUrl: house.imageUrl
        },
        validationSchema: homeFormSchema,
        onSubmit
    })
    return (
        <>
            <Navbar/>
            <div className="container">
                <br/>
                <br/>
                <form onSubmit={handleSubmit} className="form-area">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">housesize</label>
                        <input
                            type="text"
                            className="form-control"
                            id="housesizeInput"
                            name="housesize"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.housesize}
                            style={errors.housesize && touched.housesize ? { borderColor: "rgb(245, 98, 98)" } : {}}
                        />
                        {errors.housesize && touched.housesize ? <p className="error-message">{errors.housesize}</p> : ''}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">prize</label>
                        <input
                            type="number"
                            className="form-control"
                            id="prizeInput"
                            name="prize"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.prize}
                            style={errors.prize && touched.prize ? { borderColor: "rgb(245, 98, 98)" } : {}}
                        />
                        {errors.prize && touched.prize ? <p className="error-message">{errors.prize}</p> : ''}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="locationInput"
                            name="location"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.location}
                            style={errors.location && touched.location ? { borderColor: "rgb(245, 98, 98)" } : {}}
                        />
                        {errors.location && touched.location ? <p className="error-message">{errors.location}</p> : ''}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Image Url</label>
                        <input
                            type="text"
                            className="form-control"
                            id="imageUrlInput"
                            name="imageUrl"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.imageUrl}
                            style={errors.imageUrl && touched.imageUrl ? { borderColor: "rgb(245, 98, 98)" } : {}}
                        />
                        {errors.imageUrl && touched.imageUrl ? <p className="error-message">{errors.imageUrl}</p> : ''}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">House Description</label>
                        <textarea
                            className="form-control"
                            id="descriptionInput"
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            style={errors.description && touched.description ? { borderColor: "rgb(245, 98, 98)" } : {}}
                        ></textarea>
                        {errors.description && touched.description ? <p className="error-message">{errors.description}</p> : ''}
                    </div>
                    <button disabled={isSubmitting} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>)
}

export default UpdateHouse;