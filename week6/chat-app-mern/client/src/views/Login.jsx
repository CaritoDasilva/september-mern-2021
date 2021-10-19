import React from "react";
import styles from './Login.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2'


const Login = () => {
    const SignupSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(2, 'Nombre debe tener un mínimo de dos caracteres')
            .max(50, 'Nombre debe tener un máximo de 50 caracteres')
            .required('Este campo es requerido'),
        email: Yup.string()
            .email('Debe ingresar un correo electrónico válido')
            .required('Este campo es requerido'),
        age: Yup.number()
            .min(18, "Necesita tener mínimo 18 años para registrarse")
            .required('Este campo es requerido'),
        password: Yup.string()
            .min(4, 'Contraseña debe tener 4 caracteres')
            .equals([Yup.ref('confirmPass'), null], 'Contraseñas deben coincidir')
            .required('Este campo es requerido'),

        confirmPass: Yup.string()
            .min(4, 'Contraseña debe tener 4 caracteres')
            .equals([Yup.ref('password'), null], 'Contraseñas deben coincidir')
            .required('Este campo es requerido'),
        
    });

    const createUser = async (values) => {
        console.log("🚀 ~ file: Login.jsx ~ line 33 ~ createUser ~ values", values)
        try {
            const response = await axios.post('http://localhost:8080/api/users', values);
            console.log("🚀 ~ file: Login.jsx ~ line 35 ~ createUser ~ response", response)
            Swal.fire({
                title: 'Te has registrado exitosamente!',
                text: 'Bienvenido a nuestra app fantástica',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        } catch(err) {
            console.log("🚀 ~ file: Login.jsx ~ line 38 ~ createUser ~ err", err.response.data.errors)
            Swal.fire({
                title: 'Error!',
                html: `<ul>${err.response.data.errors.map(error => (`<li>${error}</li>`))}</ul>`,
                icon: 'error',
                confirmButtonText: 'Not Cool'
            })
        }

    }

    return (
        <div>
            <h1>Registro</h1>
            <div className={styles.card}>
                <Formik
                    initialValues={{
                        fullName: '',
                        email: '',
                        age: '',
                        password: '',
                        confirmPass: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={createUser}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="fullName">Nombre completo:</label>
                            <Field name="fullName" />
                            {errors.fullName && touched.fullName ? (
                                <div className={styles.errors}>{errors.fullName}</div>
                            ) : null}
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />
                            {errors.email && touched.email ? <div className={styles.errors}>{errors.email}</div> : null}
                            <label htmlFor="age">Edad</label>
                            <Field name="age" type="number" />
                            {errors.age && touched.age && <div className={styles.errors}>{errors.age}</div>}
                            <label htmlFor="password">Contraseña</label>
                            <Field name="password" type="password" />
                            {errors.password && touched.password && <div className={styles.errors}>{errors.password}</div>}
                            <label htmlFor="confirmPass">Confirmar Contraseña</label>
                            <Field name="confirmPass" type="password" />
                            {errors.confirmPass && touched.confirmPass && <div className={styles.errors}>{errors.confirmPass}</div>}

                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login;