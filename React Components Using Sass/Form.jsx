
import React from "react";
import { useForm } from "react-hook-form";
  
function Form() {
  const {register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data);
    
  return (
    <>
      <h2 className="head">Registration Form</h2>
  
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="Enter Your Name" />
        <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" />
        {errors.email && <span style={{ color: "#000000" }}>
        *Email* is mandatory </span>}
        <input type="password" {...register("password")} placeholder="Enter your Password"/>
        <input type={"submit"} style={{ backgroundColor: "#a1eafb",cursor:"pointer" }} />
      </form>
    </>
  );
}
export default Form;