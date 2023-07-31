import React, { FC } from 'react';
// import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form } from 'formik';
import { BoxBtn, BoxFields, BoxInputNum, ButtonSubmit, FormLabel, FormLabelFile, FormLabelNum, H1, InputFileStyled, InputStyled, Signature, SignatureEn } from './newTovar.style';
import { TextEditor } from '../utils/textEditor';

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
            <H1>{message.toUpperCase()}</H1>
            <BoxFields>
                <FormLabel>
                    < Signature >Ім'я</Signature >
                    <InputStyled type='text' name="nameUA" />
                    {touched.nameUA && errors.nameUA && <div>{errors.nameUA}</div>}

                    < SignatureEn >Name</SignatureEn >
                    <InputStyled type='text' name="name" />
                    {touched.name && errors.name && <div>{errors.name}</div>}
                </FormLabel>

                <FormLabel>
                    < Signature >Опис</Signature >
                    <InputStyled type='text' name="descriptionUA" />
                    {touched.descriptionUA && errors.descriptionUA && <div>{errors.descriptionUA}</div>}

                    < SignatureEn >Description</SignatureEn >
                    {/* <InputStyled type='text' name="description" /> */}
                    {touched.description && errors.description && <div>{errors.description}</div>}

                    <TextEditor
                        setFieldValue={(val) => props.setFieldValue('description', val)}
                        // setFieldValue={(val) => formik.setFieldValue("message", val)}
                        value={props.values.description}
                    // name='description'
                    />
                </FormLabel>

                <FormLabel >
                    < Signature >Параметри</Signature >
                    <InputStyled type='text' name="parametersUA" />
                    < SignatureEn >Parameters</SignatureEn >
                    <InputStyled type='text' name="parameters" />
                </FormLabel>
                <FormLabel >
                    < Signature >Комплект</Signature >
                    <InputStyled type='text' name="completeSetUA" />
                    < SignatureEn >Complete set</SignatureEn >
                    <InputStyled type='text' name="completeSet" />
                </FormLabel>



                <BoxInputNum>
                    <FormLabelNum>
                        <Signature>Type </Signature>
                        <InputStyled type='text' name="type" />
                    </FormLabelNum>

                    <FormLabelNum>
                        <Signature>Cost</Signature>
                        <InputStyled type='number' name="cost" />
                    </FormLabelNum>

                    <FormLabelNum>
                        <Signature>Quantity</Signature>
                        <InputStyled type='number' name="quantity" />
                    </FormLabelNum>

                    <FormLabelNum>
                        <Signature>Popularity</Signature>
                        <InputStyled type='number' name="popularity" />
                    </FormLabelNum>
                </BoxInputNum>

                <FormLabelFile  >
                    <Signature>Завантажити файл</Signature>
                    <InputFileStyled type="file" name='fotos' accept='image/*,.pdf,.png' />
                </FormLabelFile>
            </BoxFields>

            {/* {touched.email && errors.email && <div>{errors.email}</div>} */}
            {/* {touched.password && errors.password && <div>{errors.password}</div>} */}

            <BoxBtn>
                <ButtonSubmit type="submit" disabled={isSubmitting}>
                    Submit
                </ButtonSubmit>
            </BoxBtn>

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