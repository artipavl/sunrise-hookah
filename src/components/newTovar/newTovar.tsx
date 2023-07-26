import React, { FC } from 'react';
// import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

// Shape of form values
interface FormValues {
    name: string;
    cost: number;
    description: string;
    parameters: string;
    completeSet: string;
    quantity: number;
    popularity: number;
    type: string;
    fotos: string[];
}

interface OtherProps {
    message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, message } = props;
    return (
        <Form>
            <h1>{message}</h1>
            <div>
                <label htmlFor="">
                    <Field type='text' name="name" />
                    <Field type='text' name="name" />
                </label>
                <label htmlFor="">
                    <Field type='text' name="description" />
                    <Field type='text' name="description" />
                </label>
                <label htmlFor="">
                    <Field type='text' name="parameters" />
                    <Field type='text' name="parameters" />
                </label>
                <label htmlFor="">
                    <Field type='text' name="completeSet" />
                    <Field type='text' name="completeSet" />
                </label>
                <label htmlFor="">
                    <Field type='text' name="type" />
                    <Field type='text' name="type" />
                </label>

                <label htmlFor="">
                    <Field type='number' name="cost" /></label>
                <label htmlFor="">
                    <Field type='number' name="quantity" />
                </label>
                <label htmlFor="">
                    <Field type='number' name="popularity" />
                </label>

            </div>




            {/* {touched.email && errors.email && <div>{errors.email}</div>} */}

            <Field type="password" name="password" />
            {/* {touched.password && errors.password && <div>{errors.password}</div>} */}

            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
    );
};

// The type of props MyForm receives
interface MyFormProps {
    initialEmail?: string;
    message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
        return {
            name: '',
            cost: 0,
            description: '',
            parameters: '',
            completeSet: '',
            quantity: 0,
            popularity: 0,
            type: '',
            fotos: [],
        };
    },

    validate: (values: FormValues) => {
        let errors: FormikErrors<FormValues> = {};
        // if (!values.email) {
        //     errors.email = 'Required';
        // } else if (!isValidEmail(values.email)) {
        //     errors.email = 'Invalid email address';
        // }
        return errors;
    },

    handleSubmit: values => {
        // do submitting things
        console.log(values)
    },
})(InnerForm);
type NewTovarProps = {};

const NewTovar: FC<NewTovarProps> = (props) => {
    return (
        <div>
            <MyForm message='add tovarchik' />
        </div>
    )
}

export default NewTovar;