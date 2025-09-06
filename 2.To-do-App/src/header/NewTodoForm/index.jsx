import React from "react";
import {Formik, Field, Form} from "formik"
import validationSchema from "./validations";

function NewTodoForm () {
    return (
        <Formik
        initialValues={{
            text:""
        }}
         onSubmit={ (values,bag) =>{
            console.log(values)
            bag.resetForm();
         }}
         validationSchema={validationSchema}
        >
            <Form>
            <Field id="text" name="text" className="new-todo" placeholder="Bugün neler yapacaksın?" autoFocus/>
        </Form>
        </Formik>
    )
}

export default NewTodoForm