import React, { FC } from 'react';
interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

type ContactCheckoutInfoProps = {
  values: FormValues;
};

const ContactCheckoutInfo: FC<ContactCheckoutInfoProps> = ({ values }) => {
  return (
    <>
      <p style={{ color: '#fff' }}>
        {values.firstName}
        {' ' + values.lastName}
        {values.email && ', ' + values.email}
        {values.phone && ', ' + values.phone}
      </p>
      {values.message && <p style={{ color: '#fff' }}>{values.message}</p>}
    </>
  );
};

export default ContactCheckoutInfo;
