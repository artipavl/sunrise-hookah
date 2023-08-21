import React, { FC } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps } from 'formik';

import {
  Button,
  Container,
  Errors,
  Input,
  Label,
  RegForm,
} from './adminRegistrationForm.style';
import { useAppDispatch } from '../../hooks';
import { signUp } from '../../redux/adminList/adminsOperations';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Недійсна електронна адреса')
    .required('Обов’язковий'),
  password: Yup.string()
    .required('Обов’язковий')
    .min(8, 'Пароль надто короткий - має містити мінімум 8 символів.')
    .matches(/[a-zA-Z]/, 'Пароль може містити лише латинські літери.'),
});

interface FormValues {
  email: string;
  password: string;
  name: string;
}

interface OtherProps {}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <RegForm>
      <Label>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          errors={touched.name && errors.name && errors.name}
        />
        {touched.name && errors.name && <Errors>{errors.name}</Errors>}
      </Label>
      <Label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          errors={touched.email && errors.email && errors.email}
        />
        {touched.email && errors.email && <Errors>{errors.email}</Errors>}
      </Label>
      <Label>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          errors={touched.password && errors.password && errors.password}
        />
        {touched.password && errors.password && (
          <Errors>{errors.password}</Errors>
        )}
      </Label>
      <Button type="submit" disabled={isSubmitting}>
        Створити
      </Button>
    </RegForm>
  );
};

interface MyFormProps {
  onSubmit: Function;
}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      email: '',
      password: '',
      name: '',
    };
  },

  validationSchema: SignupSchema,

  handleSubmit: (values, formikBag) => {
    formikBag.props.onSubmit(values);
    formikBag.resetForm();
  },
})(InnerForm);

type AdminRegistrationFormProps = {};

const AdminRegistrationForm: FC<AdminRegistrationFormProps> = props => {
  const dispatch = useAppDispatch();
  function isLoggedin(params: FormValues) {
    dispatch(signUp(params));
  }
  return (
    <Container>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
        Створити нового адміністратора
      </h2>
      <MyForm onSubmit={isLoggedin} />
    </Container>
  );
};

export default AdminRegistrationForm;
