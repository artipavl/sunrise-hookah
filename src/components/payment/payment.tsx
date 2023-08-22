import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { selectBasket } from '../../redux/basket/basketSelectors';
import { GarantItem, GarantList, PaymentBottomLine, PaymentBox, PaymentLine, SubmitButton } from './payment.style';
import { Warehous } from '../../Types/novaposhta';
import axios from 'axios';

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
	const tovars = useAppSelector(selectBasket);
	return (
		<PaymentBox>
			<h2>Разом</h2>
			<PaymentBottomLine>
				<PaymentLine>
					<p>{tovars.reduce((a, b) => a + b.baskeQuantity, 0)} товар на суму</p>
					<p>
						{tovars.reduce((a, b) => a + b.cost * b.baskeQuantity, 0)} <span>₴</span>
					</p>
				</PaymentLine>
				<PaymentLine>
					<p>Вартість доставки</p>
					<p>за тарифами перевізника</p>
				</PaymentLine>
			</PaymentBottomLine>
			<PaymentBottomLine>
				<PaymentLine>
					<p>До сплати</p>
					<p>
						{tovars.reduce((a, b) => a + b.cost * b.baskeQuantity, 0)} <span>₴</span>
					</p>
				</PaymentLine>
			</PaymentBottomLine>
			<div>
				<SubmitButton
					disabled={!cotact || !warehouses || !tovars.length}
					onClick={async () => {
						try {
							const orders = tovars.map(({ id, baskeQuantity }) => {
								return {
									id,
									baskeQuantity,
								};
							});
							await axios.post('order', { customer: cotact, orders, delivery: warehouses, payment: pay });
						} catch (error) {
							console.log(error);
							alert('Невідома помилка спробуйте пізніше');
						}
					}}
				>
					Замовлення підтверджую
				</SubmitButton>
			</div>
			<div>
				<p>Підтверджуючи замовлення, я приймаю умови:</p>
				<GarantList>
					<GarantItem>положення про обробку і захист персональних даних</GarantItem>
					<GarantItem>угоди користувача </GarantItem>
				</GarantList>
			</div>
		</PaymentBox>
	);
};

export default Payment;
