import React from "react";
const Forms=()=>{
    return(
        <>
        <div class="mb-3">
  <label for="house size" class="form-label">enter house size</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="enterhousesize"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">enter budgeted price</label>
  <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="enterbudgetedprice"/>
</div>
<button type="button" class="btn btn-primary">submit</button>
        </>
    )
}
export default Forms