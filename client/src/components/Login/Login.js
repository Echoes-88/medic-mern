import React from "react";
import API from "../../utils/API";

  /* YUP */
  import { Formik } from 'formik';
  import * as Yup from 'yup';
  import Error from './Error';

  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email()
    .required("Veuillez indiquer votre email"),
    password: Yup.string()
    .required("Merci de rentrer votre mot de passe"),
  })


  export default function Login() {

  return (

    <Formik
        initialValues={{ email: "", password: ""}}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          const { data } = await API.login(values.email, values.password);

          localStorage.setItem("token", data.token);
          window.location = "/dashboard";
        }}>

        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>

            <div className="input-row">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="indiquez le nom du produit"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "has-error" : null}
                />
                <Error touched={touched.email} message={errors.email} /> 
            </div>

            <div className="input-row">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="indiquez le nom du produit"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={touched.password && errors.password ? "has-error" : null}
                />
                <Error touched={touched.password} message={errors.password} /> 
            </div>

            <div className="input-row">
              <button type="submit" disabled={isSubmitting}>
                Ajouter
              </button>
            </div>

          </form>
        )}
        </Formik>

    );
}