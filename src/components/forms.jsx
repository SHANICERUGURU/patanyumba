import React from "react";
import { useFormik } from "formik";
import { homeFormSchema } from "./schema";
import app from "../firebaseconfig";
import { getDatabase, ref, set, push } from "firebase/database";
const Forms = () => {
  const onSubmit = () => {
   const db = getDatabase(app)
    const newDocRef = push(ref(db, "patanyumba/houses"))
    set(newDocRef, {
      housesize: values.housesize,
      prize: values.prize,
      location: values.location,
      description: values.description,
      imageUrl: values.imageUrl
    }).then((resp) => {
      console.log(resp);
      alert("Data saved")
    }).catch((err) => {
      console.log(err);
      alert("Error")
    })
  }


  const { values, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, errors, touched } = useFormik({
    initialValues: {
      housesize: "",
      prize: "",
      location: "",
      description: "",
      imageUrl: "",
    },
    validationSchema: homeFormSchema,
    onSubmit
  })
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="house size" class="form-label">enter house size</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            name="housesize"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.housesize}
            placeholder="enterhousesize"
            style={errors.housesize ? { borderColor: "#fc8181" } : {}} />
          {errors.housesize && touched.housesize ? <p className="error-message">{errors.housesize}</p> : ""}

        </div>

        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">enter budgeted price</label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            name="prize"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.prize}
            placeholder="enterbudgetedprice"
            style={errors.prize ? { borderColor: "#fc8181" } : {}} />
          {errors.prize && touched.prize ? <p className="error-message">{errors.prize}</p> : ""}
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">enter desired location</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            name="location"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.location}
            placeholder="enterdesiredlocation"
            style={errors.location ? { borderColor: "#fc8181" } : {}} />
          {errors.location && touched.location ? <p className="error-message">{errors.location}</p> : ""}
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">enter description</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            placeholder="enter description"
            style={errors.description ? { borderColor: "#fc8181" } : {}} />
          {errors.description && touched.description ? <p className="error-message">{errors.description}</p> : ""}
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
            style={errors.imageUrl && touched.location ? { borderColor: "rgb(245, 98, 98)" } : {}}
          />
          {errors.imageUrl && touched.imageUrl ? <p className="error-message">{errors.imageUrl}</p> : ''}
        </div>
        <button type="submit" class="btn btn-primary" disabled={isSubmitting}>submit</button>
      </form>
    </>

  )
}
export default Forms