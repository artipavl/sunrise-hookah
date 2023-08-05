import React, { FC, useState } from 'react';
import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';
import {
  Box,
  CheckoutItem,
  CheckoutList,
  SubTitle,
  Title,
} from './checkout.style';
import Heder from '../../components/header/heder';
import ContactCheckoutForm from '../../components/contactCheckoutForm/contactCheckoutForm';
import ContactCheckoutInfo from '../../components/contactCheckoutInfo/contactCheckoutInfo';
import BasketTovars from '../../components/basketTovars/basketTovars';

type CheckoutProps = {};

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const Checkout: FC<CheckoutProps> = props => {
  const [cotact, setCotact] = useState<FormValues | null>(null);
  const [cotactCheck, setCotactCheck] = useState<boolean>(false);

  const cotactCheckSubmit = (values: FormValues) => {
    setCotact(values);
    setCotactCheck(true);
  };
  return (
    <>
      <Heder></Heder>
      <Section h={true}>
        <Container>
          <Title>Оформалення</Title>
          <Box>
            <CheckoutList>
              <CheckoutItem>
                <div>
                  <SubTitle>Ваші контактні дані</SubTitle>
                  {cotactCheck && cotact !== null ? (
                    <ContactCheckoutInfo values={cotact} />
                  ) : (
                    <ContactCheckoutForm submit={cotactCheckSubmit} />
                  )}
                </div>
              </CheckoutItem>
              <CheckoutItem>
                <div style={{ widows: '100%' }}>
                  <SubTitle>Замовлення</SubTitle>
                  <BasketTovars />
                </div>
              </CheckoutItem>
              <CheckoutItem>
                <div style={{ widows: '100%' }}>
                  <SubTitle>Доставка </SubTitle>
                  <div></div>
                </div>
              </CheckoutItem>
            </CheckoutList>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Checkout;
