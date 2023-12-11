import React, { FC, useState } from 'react';
import { Section } from '../../reuseСomponents/section.style';
import { Container } from '../../reuseСomponents/container.style';
import {
	Box,
	CenterBox,
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
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectBasket } from '../../redux/basket/basketSelectors';
import { selectLanguage } from '../../redux/language/languageSelectors';
import Footer from '../../components/footer/footer';
import palette from '../../theme.module';

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

	const tovars = useAppSelector(selectBasket);
	const language = useAppSelector(selectLanguage);

	if (tovars.length === 0) {
		console.log(tovars);
		return <Navigate to="/" />;
	}

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
			<Section style={{ paddingTop: '120px' }}>
				<Container>
					<Title>{language === 'uk' ? 'Оформлення' : 'Forming an order'}</Title>
					<Box>
						<CheckoutList>
							<CheckoutItem>
								<div style={{ width: '100%' }}>
									<SubTitle>
										{language === 'uk'
											? 'Ваші контактні дані'
											: 'Your contact details'}
									</SubTitle>
									{cotactCheck && cotact !== null ? (
										<DeliveryInform>
											<ContactCheckoutInfo values={cotact} />
											<button
												style={{ color: palette.white }}
												onClick={() => {
													setCotact(null);
													setCotactCheck(false);
												}}
											>
												<AiFillDelete />
											</button>
										</DeliveryInform>
									) : (
										<CenterBox>
											<ContactCheckoutForm submit={cotactCheckSubmit} />
										</CenterBox>
									)}
								</div>
							</CheckoutItem>
							<CheckoutItem>
								<div style={{ width: '100%' }}>
									<SubTitle>
										{language === 'uk' ? 'Замовлення' : 'Order'}
									</SubTitle>
									<BasketTovars />
								</div>
							</CheckoutItem>
							<CheckoutItem>
								<div style={{ width: '100%' }}>
									<SubTitle>
										{language === 'uk' ? 'Доставка' : 'Delivery'}
									</SubTitle>
									{warehousesCheck && warehouses !== null ? (
										<DeliveryInform>
											<div style={{ color: palette.white }}>
												{language === 'uk' ? 'Доставка у ' : 'Delivery to '}
												{warehouses.Description}
											</div>
											<button
												style={{ color: palette.white }}
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
								<div style={{ width: '100%' }}>
									<SubTitle>
										{language === 'uk' ? 'Оплата' : 'Payment'}
									</SubTitle>
									<Paylist>
										<PayItem>
											<input
												type="radio"
												checked={Boolean(pay === 1)}
												onChange={() => setPay(1)}
											/>
											<div>
												<p>
													{language === 'uk'
														? 'Оплата під час отримання товару'
														: 'Payment upon receipt of goods'}
												</p>
												<p>
													{language === 'uk'
														? 'Послуга післяплати оплачується окремо, за тарифами перевізника'
														: "The postpaid service is paid separately, according to the carrier's tariffs"}
												</p>
											</div>
										</PayItem>
										<PayItem>
											<input
												type="radio"
												checked={Boolean(pay === 2)}
												onChange={() => setPay(2)}
											/>
											<div>
												<p>
													{language === 'uk'
														? 'Оплата переводом на карту'
														: 'Payment by transfer to the card'}
												</p>
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
			<Footer />
		</>
	);
};

export default Checkout;
