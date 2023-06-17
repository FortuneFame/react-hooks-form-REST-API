import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from 'styled-components';
import * as yup from 'yup';

const initialValue = {
    login: '',
    password: ''
}

const schema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().min(6).max(16).required(),
})

const Input = styled(Field)`
  color: #2a2a2a;
`;


const LoginForm = () => {

    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValue}
            validationSchema={schema}
            onSubmit={handleSubmit}>
            <Form autoComplete='off'>
                <label htmlFor="login">
                    Login
                    <Input type="text" name="login" />
                    <ErrorMessage name="login" component="div" />
                </label>
                <br />
                <label htmlFor="password">
                    Password
                    <Input type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;

// const LoginForm = () => {
//  const handleSubmit = (e) => {
//     e.preventDefault();
//     const formElements = e.target.elements;
//     console.log(formElements.login.value)
//     console.log(formElements.password.value)
// }
//     return <form autoComplete='off' onSubmit={handleSubmit}>
//         <label htmlFor="login">
//             Login
//             <input type="text" name="login" />
//         </label>
//         <label htmlFor="password">
//             Password
//             <input type="password" name="password" />
//         </label>
//         <button type="submit">Submit</button>
//     </form>
// }
// export default LoginForm;
