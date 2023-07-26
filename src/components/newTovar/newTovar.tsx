import React, { FC } from 'react';
// import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import { FormLabel, Signature } from './newTovar.style';

// Shape of form values
interface FormValues {
    nameUA: string;
    descriptionUA: string;
    parametersUA: string;
    completeSetUA: string;
    name: string;
    description: string;
    parameters: string;
    completeSet: string;

    type: string;
    cost: number;
    quantity: number;
    popularity: number;
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
                <FormLabel>
                    < Signature >Name</Signature >
                    <Field type='text' name="nameUA" />
                    {touched.nameUA && errors.nameUA && <div>{errors.nameUA}</div>}

                    <Field type='text' name="name" />
                    {touched.name && errors.name && <div>{errors.name}</div>}

                </FormLabel>
                <FormLabel>
                    < Signature >Name</Signature >
                    <Field type='text' name="descriptionUA" />
                    {touched.descriptionUA && errors.descriptionUA && <div>{errors.descriptionUA}</div>}
                    <Field type='text' name="description" />
                    {touched.description && errors.description && <div>{errors.description}</div>}

                </FormLabel>
                <FormLabel >
                    < Signature >parameters</Signature >
                    <Field type='text' name="parametersUA" />
                    <Field type='text' name="parameters" />
                </FormLabel>
                <FormLabel >
                    < Signature >completeSet</Signature >
                    <Field type='text' name="completeSetUA" />
                    <Field type='text' name="completeSet" />
                </FormLabel>


                 
                <div>
                    <Field type='text' name="type" />

                    <Field type='number' name="cost" /> 
                    <Field type='number' name="quantity" />
                    <Field type='number' name="popularity" />
                </div>
                

            </div>




            {/* {touched.email && errors.email && <div>{errors.email}</div>} */}
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
            nameUA: '',
            descriptionUA: '',
            parametersUA: '',
            completeSetUA: '',
            name: '',
            description: '',
            parameters: '',
            completeSet: '',

            type: '',
            cost: 0,
            quantity: 0,
            popularity: 0,
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