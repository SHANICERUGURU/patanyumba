import React from "react";
import { useFormik } from "formik";
import { homeFormSchema } from "./schema";
const Forms=()=>{
  const onSubmit = () => {
    alert("Congratulations!!!You have completed the application");
   setSubmitting(false)
  }


  const { values, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting,errors,touched } = useFormik({
    initialValues: {
      housesize:"",
      prize:"",
    },
    validationSchema:homeFormSchema,
    onSubmit
  }) 
  return(
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
     style={errors.housesize?{borderColor:"#fc8181"}: {}}/>
           {errors.housesize && touched.housesize?<p className="error-message">{errors.housesize}</p>:""}
    
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
    style={errors.prize?{borderColor:"#fc8181"}: {}}/>
           {errors.prize && touched.prize?<p className="error-message">{errors.prize}</p>:""}
    </div>
    <button type="submit" class="btn btn-primary" disabled={isSubmitting}>submit</button>
    </form>
          </>
  
    )
}
export default Forms