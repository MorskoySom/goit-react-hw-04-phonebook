import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Forma } from "./ContactForm.styled"

const FormSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        ),
    number: Yup.string()
        .matches(
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        )
        .required('Phone number is required'),
})

export const ContactForm = ({ toAdd }) => {

    return (
        <Formik
            initialValues={{
                name: '',
                number: ''
            }}
            validationSchema={FormSchema}
            onSubmit={(values, actions) => {
                toAdd(values);
                actions.resetForm();
            }}
        >
            <Form>
                <Forma>
                    <div>
                        <label>
                            Contact name
                            <Field id="firstName" name="name" />
                            <ErrorMessage name="name" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Number
                            <Field id="lastName" type="tel" name="number" />
                            <ErrorMessage name="number" />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Add contact</button>
                    </div>
                </Forma>
            </Form>
        </Formik>
    )
}