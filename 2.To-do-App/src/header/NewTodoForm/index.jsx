import React from "react";
import {Formik, Field, Form} from "formik"
import validationSchema from "./validations";

function NewTodoForm () {
    return (
        <Formik
        initialValues={{
            text:""
        }}
         onSubmit={async (values) =>{
            await new Promise ((r)=> setTimeout(r,500));
            console.log(values)
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