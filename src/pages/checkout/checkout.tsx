import React, { FC, useState } from 'react';
import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';
import {
  Box,
  CheckoutItem,
  CheckoutList,
  DeliveryInform,
  PayItem,
  Paylist,
  SubTitle,
  Title,
} from './checkout.style';
import Heder from '../../components/header/heder';
import ContactCheckoutForm from '../../components/contactCheckoutForm/contactCheckoutForm';
import ContactCheckoutInfo from '../../components/contactCheckoutInfo/contactCheckoutInfo';
import BasketTovars from '../../components/basketTovars/basketTovars';
import Delivery from '../../components/delivery/delivery';
import { Warehous } from '../../Types/novaposhta';
import { AiFillDelete } from 'react-icons/ai';
import Payment from '../../components/payment/payment';

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

  const [warehouses, setWarehouses] = useState<Warehous | null>(null);
  const [warehousesCheck, setWarehousesCheck] = useState<boolean>(false);

  const [pay, setPay] = useState<number>(1);

  const cotactCheckSubmit = (values: FormValues) => {
    setCotact(values);
    setCotactCheck(true);
  };
  const WarehousesSubmit = (values: Warehous) => {
    setWarehouses(values);
    setWarehousesCheck(true);
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
                    <DeliveryInform>
                      <ContactCheckoutInfo values={cotact} />
                      <button
                        style={{ color: '#fff' }}
                        onClick={() => {
                          setCotact(null);
                          setCotactCheck(false);
                        }}
                      >
                        <AiFillDelete />
                      </button>
                    </DeliveryInform>
                  ) : (
                    <ContactCheckoutForm submit={cotactCheckSubmit} />
                  )}
                </div>
              </CheckoutItem>
              <CheckoutItem>
                <div>
                  <SubTitle>Замовлення</SubTitle>
                  <BasketTovars />
                </div>
              </CheckoutItem>
              <CheckoutItem>
                <div>
                  <SubTitle>Доставка </SubTitle>
                  {warehousesCheck && warehouses !== null ? (
                    <DeliveryInform>
                      <div style={{ color: '#fff' }}>
                        Доставка у {warehouses.Description}
                      </div>
                      <button
                        style={{ color: '#fff' }}
                        onClick={() => {
                          setWarehousesCheck(false);
                          setWarehouses(null);
                        }}
                      >
                        <AiFillDelete />
                      </button>
                    </DeliveryInform>
                  ) : (
                    <Delivery submit={WarehousesSubmit} />
                  )}
                </div>
              </CheckoutItem>
              <CheckoutItem>
                <div>
                  <SubTitle>Оплата</SubTitle>
                  <Paylist>
                    <PayItem>
                      <input
                        type="radio"
                        checked={Boolean(pay === 1)}
                        onClick={() => setPay(1)}
                      />
                      <div>
                        <p>Оплата під час отримання товару</p>
                        <p>
                          Послуга післяплати оплачується окремо, за тарифами
                          перевізника
                        </p>
                      </div>
                    </PayItem>
                    <PayItem>
                      <input
                        type="radio"
                        checked={Boolean(pay === 2)}
                        onClick={() => setPay(2)}
                      />
                      <div>
                        <p>Оплата переводом на карту</p>
                      </div>
                    </PayItem>
                  </Paylist>
                </div>
              </CheckoutItem>
            </CheckoutList>
            <Payment cotact={cotact} warehouses={warehouses} pay={pay} />
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Checkout;
