import React, { FC } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Field } from 'formik';

import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';

import {
  Box,
  Button,
  Errors,
  FormHorizontalBox,
  Input,
  Label,
  RegForm,
  SubTitle,
  TelLink,
  Textarea,
  Title,
} from './contacts.style';
import axios from 'axios';

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
    ),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
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
        Надіслати
      </Button>
    </RegForm>
  );
};

interface MyFormProps {}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    };
  },

  // validate: values => {
  //   let errors: FormikErrors<FormValues> = {};
  //   if (values.password !== values.passwordConfirm) {
  //     errors.password = 'Паролі мають співпадати';
  //     errors.passwordConfirm = 'Паролі мають співпадати';
  //   }
  //   if (!values.agree) {
  //     errors.agree = 'Required';
  //   }
  //   return errors;
  // },

  validationSchema: SignupSchema,

  handleSubmit: (values, formikBag) => {
    // console.log(values);
    axios
      .post('/feedback', { ...values })
      .then(() => {
        formikBag.resetForm();
      })
      .catch(e => {
        console.log(e);
      });
  },
})(InnerForm);

type AboutProps = {};

const Contacts: FC<AboutProps> = props => {
  return (
    <Section id="contacts" bgc="#000">
      <Container flex={'center'}>
        <Box>
          <div>
            <Title>КОНТАКТИ</Title>
            <SubTitle>Напишіть нам</SubTitle>
            <SubTitle>Ми відповімо в найближчий час</SubTitle>
            <TelLink to="tel:+380666815149">
              Телефон: +38 (066) 681-51-49
            </TelLink>
          </div>
          <MyForm />
        </Box>
      </Container>
    </Section>
  );
};

export default Contacts;
