import React from "react";
import { useState, useEffect,useRef } from "react";

import useForm from "./useForm";

const [FormRef,handleSubmit,resetForm] = useForm((data)=>{
    console.log(data) // Write your submit function here
  })

return (
    <form ref={FormRef} onSubmit={handleSubmit}>
      <input name="FirstName" type="text"/>
       <input name="LastName" type="text"/>
      <button>Submit</button>
    </form>
    )

export default Page1;