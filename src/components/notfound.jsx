import React from "react";
import { Link } from "react-router-dom";
const NotFound=()=>{
    return(
        <>
       <div className="flex flex-col gap-2">
        404 Not Found 
       <link to="/"/>Home from link<link/>
       <a href="/">Home from A</a>
       </div>
        </>
    )
}
export default NotFound