import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact(){

    const schema = Yup.object().shape({
      email: Yup.string().email()
    });

          const form = useFormik({
            initialValues: {
              reg_number: "",
              dob: "",
            },
            onSubmit: (values) => {
              console.log(values);
            },
            validationSchema: schema
          });

          const {values,handleChange, handleSubmit,errors}=form;

          return(
            <div className="App">
                <form onChange={handleSubmit}>
                <label>Name</label>
                <input name="Name"
                value={values.Name}
                onChange={handleChange}/><br/>

                <label>Email</label>
                <input name="email"
                value={values.email}
                onChange={handleChange}/>
                {errors.email ? errors.email : null}
                <br/>

                <label>Message</label>
                <input name="Messasge"
                value={values.Message}
                onChange={handleChange}/><br/>
                <button type="submit">Submit</button>
                </form>
            </div>
            
          )
       
}
