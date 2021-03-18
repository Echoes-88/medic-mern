import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './Error';

import API from "../../../utils/API";



  /* YUP */
  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .required("Veuillez indiquer le nom du produit"),
    quantity: Yup.number()
    .required("Merci d'indiquer la quantité")
    .positive()
    .integer()
  })


export default function AddProduct() {

    return (

        <Formik
        initialValues={{ name: "", description: "", quantity: ""}}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          API.addProduct(values.name, values.description, values.quantity);
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
              <label htmlFor="name">Nom du produit</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nom"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={touched.name && errors.name ? "has-error" : null}
                />
                <Error touched={touched.name} message={errors.name} /> 
            </div>

            <div className="input-row">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className={touched.description && errors.description ? "has-error" : null}
                />
                <Error touched={touched.description} message={errors.description} /> 
            </div>

            <div className="input-row">
              <label htmlFor="quantity">Quantité</label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Quantité"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
                className={touched.quantity && errors.quantity ? "has-error" : null}
                />
                <Error touched={touched.quantity} message={errors.quantity} /> 
            </div>

            <div className="input-row">
              <button type="submit" disabled={isSubmitting}>
                Ajouter
              </button>
            </div>
          </form>
        )}
        </Formik>
)
}