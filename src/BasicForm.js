import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema=yup.object({
    email:yup.string().required("Mandatory feild").min(5),
    password:yup.string().min(8,"Need a bigger password 😁").required("Mandatory feild").max(12,"too much password")
})

const BasicForm = () => {
    const formik=useFormik({
        initialValues:{email:"",password:""},
        validationSchema:formValidationSchema,
        onSubmit:(values)=>{
            console.log("onSubmit",values);
        }
    });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="email" 
      placeholder="Enter email"
      value={formik.values.email} 
      name="email"
      onChange={formik.handleChange}
      onBlur={formik.handleChange}/>
      {formik.errors.email && formik.touched.email?formik.errors.email :""}
      
      <input type="password" 
      placeholder="Enter password"
      value={formik.values.password}
      name="password" 
      onChange={formik.handleChange} 
      onBlur={formik.handleChange}/>
      {formik.errors.password && formik.touched.email?formik.errors.password :""}

      <button type="submit">Submit</button>
      {/* {JSON.stringify(formik.values)}
      {JSON.stringify(formik.touched)} */}
    </form>
  );
};
export default BasicForm;
