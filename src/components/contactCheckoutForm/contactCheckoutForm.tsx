import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Field } from 'formik';

import {
  Button,
  Errors,
  FormHorizontalBox,
  Input,
  Label,
  RegForm,
  Textarea,
} from './contactCheckoutForm.style';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      'Invalid phone number'
    )
    .required('Required'),
  email: Yup.string().email('Invalid email'),
  message: Yup.string(),
});

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

interface OtherProps {}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <RegForm>
      <FormHorizontalBox>
        <Label>
          <Input
            type="text"
            name="firstName"
            placeholder="Ім’я"
            errors={touched.firstName && errors.firstName && errors.firstName}
          />
          {touched.firstName && errors.firstName && (
            <Errors>{errors.firstName}</Errors>
          )}
        </Label>
        <Label>
          <Input
            name="lastName"
            placeholder="Прізвище"
            errors={touched.lastName && errors.lastName && errors.lastName}
          />
          {touched.lastName && errors.lastName && (
            <Errors>{errors.lastName}</Errors>
          )}
        </Label>
      </FormHorizontalBox>

      <FormHorizontalBox>
        <Label>
          <Input
            type="tel"
            name="phone"
            placeholder="Телефон"
            errors={touched.phone && errors.phone && errors.phone}
          />
          {touched.phone && errors.phone && <Errors>{errors.phone}</Errors>}
        </Label>
        <Label>
          <Input
            type="email"
            name="email"
            placeholder="Ел. пошта"
            errors={touched.email && errors.email && errors.email}
          />
          {touched.email && errors.email && <Errors>{errors.email}</Errors>}
        </Label>
      </FormHorizontalBox>
      <Label>
        <Field
          name="message"
          as={Textarea}
          placeholder="Ваше повідомлення"
          errors={touched.message && errors.message && errors.message}
        />
        {touched.message && errors.message && <Errors>{errors.message}</Errors>}
      </Label>
      <Button type="submit" disabled={isSubmitting}>
        Зберегти
      </Button>
    </RegForm>
  );
};

interface MyFormProps {
  submit: (values: FormValues) => void;
}

const ContactCheckoutForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    };
  },

  validationSchema: SignupSchema,

  handleSubmit: (values, formikBag) => {
    console.log(values);
    formikBag.props.submit(values);
  },
})(InnerForm);

export default ContactCheckoutForm;
