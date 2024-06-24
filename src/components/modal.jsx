import React from "react";
const Modal=()=>{
    return(
        <>
     <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  build a house!!
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Build your house with us!!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="form">
            <form action="">
                   <div><input type="text"name="sizeofhouse"placeholder="sizeofhouse"/></div>
                   <div><input type="number"name="price"placeholder="budgetedprice"/></div>
            </form>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">submit</button>
      </div>
    </div>
  </div>
</div>
         </>
    )
}
export default Modal