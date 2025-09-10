import React from "react";
import {Formik, Field, Form} from "formik"
import validationSchema from "./validations";
import { useTodo } from "../../context/TodoContext";

function NewTodoForm () {
    const {addTodo} = useTodo();
    return (
        <Formik
        initialValues={{
            text:""
        }}
         onSubmit={ (values,bag) =>{
            console.log(values)
            bag.resetForm();
            addTodo(values.text);
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