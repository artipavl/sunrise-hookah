import React, { FC } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps } from 'formik';

import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';

import { Button, Errors, Input, Label, RegForm } from './admin.style';
import { useAppDispatch } from '../../hooks';
import { signIn } from '../../redux/auth/authOperations';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps { }

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <RegForm>
      <Label>
        <Input
          type="email"
          name="email"
          placeholder="Ел. пошта"
          errors={touched.email && errors.email && errors.email}
        />
        {touched.email && errors.email && <Errors>{errors.email}</Errors>}
      </Label>
      <Label>
        <Input
          type="password"
          name="password"
          placeholder="password"
          errors={touched.password && errors.password && errors.password}
        />
        {touched.password && errors.password && (
          <Errors>{errors.password}</Errors>
        )}
      </Label>
      <Button type="submit" disabled={isSubmitting}>
        Надіслати
      </Button>
    </RegForm>
  );
};

interface MyFormProps {
  onSubmit: Function,
}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      email: '',
      password: '',
    };
  },

  validationSchema: SignupSchema,
  
  handleSubmit: (values, formikBag) => {
    console.log(values);
    formikBag.props.onSubmit(values);
    formikBag.resetForm();
  },
})(InnerForm);

type AdminProps = {};

const Admin: FC<AdminProps> = props => {
  const dispatch = useAppDispatch()
  function isLoggedin(params: FormValues) {
    dispatch(signIn(params))
  }
  return (
    <Section>
      <Container flex="center">
        <MyForm

          onSubmit={isLoggedin} />
      </Container>
    </Section>
  );
};

export default Admin;
