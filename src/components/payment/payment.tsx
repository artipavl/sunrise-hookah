import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectBasket } from '../../redux/basket/basketSelectors';
import {
	GarantItem,
	GarantList,
	OrderModal,
	PaymentBottomLine,
	PaymentBox,
	PaymentLine,
	SubmitButton,
} from './payment.style';
import { Warehous } from '../../Types/novaposhta';
import axios from 'axios';
import { AddOrder } from '../../Types/order';
import { useNavigate } from 'react-router-dom';
import { removeBasket } from '../../redux/basket/basketSlice';
import { selectLanguage } from '../../redux/language/languageSelectors';
import Modal from '../modal/modal';
import Loader from '../../reuseСomponents/loader/loader';

interface FormValues {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	message: string;
}

type PaymentProps = {
	cotact: FormValues | null;
	warehouses: Warehous | null;
	pay: number;
};

const Payment: FC<PaymentProps> = ({ cotact, warehouses, pay }) => {
	const [isOrder, setIsOrder] = useState<boolean | null>(null);
	const tovars = useAppSelector(selectBasket);

	const dispatch = useAppDispatch();
	const language = useAppSelector(selectLanguage);

	const navigate = useNavigate();
	return (
		<PaymentBox>
			<h2>{language === 'uk' ? 'Разом' : 'Total'}</h2>
			<PaymentBottomLine>
				<PaymentLine>
					<p>
						{tovars.reduce((a, b) => a + b.baskeQuantity, 0)}{' '}
						{language === 'uk' ? 'товар на суму' : 'goods for the amount'}
					</p>
					<p>
						{tovars.reduce((a, b) => a + b.cost * b.baskeQuantity, 0)}{' '}
						<span>₴</span>
					</p>
				</PaymentLine>
				<PaymentLine>
					<p>{language === 'uk' ? 'Вартість доставки' : 'Shipping cost'}</p>
					<p>
						{language === 'uk'
							? 'за тарифами перевізника'
							: "according to the carrier's tariffs"}
					</p>
				</PaymentLine>
			</PaymentBottomLine>
			<PaymentBottomLine>
				<PaymentLine>
					<p>{language === 'uk' ? 'До сплати' : 'To be paid'}</p>
					<p>
						{tovars.reduce((a, b) => a + b.cost * b.baskeQuantity, 0)}{' '}
						<span>₴</span>
					</p>
				</PaymentLine>
			</PaymentBottomLine>
			<div>
				<SubmitButton
					disabled={!cotact || !warehouses || !tovars.length}
					onClick={async () => {
						try {
							setIsOrder(true);
							const orders = tovars.map(({ id, baskeQuantity }) => {
								return {
									id,
									baskeQuantity,
								};
							});
							await axios.post('order', {
								customer: cotact,
								orders,
								delivery: warehouses,
								payment: pay,
							} as AddOrder);
							setIsOrder(false);
						} catch (error) {
							console.log(error);
							alert('Невідома помилка спробуйте пізніше');
							setIsOrder(null);
						}
					}}
				>
					{language === 'uk' ? 'Замовлення підтверджую' : 'I confirm the order'}
				</SubmitButton>
			</div>
			<div>
				<p>
					{language === 'uk'
						? 'Підтверджуючи замовлення, я приймаю умови:'
						: 'By confirming the order, I accept the following conditions:'}
				</p>
				<GarantList>
					<GarantItem>
						{language === 'uk'
							? 'положення про обробку і захист персональних даних'
							: 'provisions on the processing and protection of personal data'}
					</GarantItem>
					<GarantItem>
						{language === 'uk' ? 'угоди користувача' : 'user agreement'}{' '}
					</GarantItem>
				</GarantList>
			</div>
			{isOrder && <Loader />}
			{isOrder === false && (
				<Modal
					openBasket={() => {
						dispatch(removeBasket());
						navigate('/');
					}}
				>
					<OrderModal>
						{language === 'uk'
							? 'Дякую замовлення зареєстроване та знаходиться в обробці '
							: 'Thank you, the order has been registered and is being processed'}
					</OrderModal>
				</Modal>
			)}
		</PaymentBox>
	);
};

export default Payment;
