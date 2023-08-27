import React, { FC } from 'react';
import {
	OrderCart,
	OrderCartImg,
	ReadBox,
	ReadBoxMessage,
	ReadBoxTitle,
	Titles,
} from './orderRead.style';
import { Order } from '../../Types/order';
import { useAppSelector } from '../../hooks';
import { selectTovars } from '../../redux/tovars/slice';

type OrderReadProps = {
	order: Order;
};

const OrderRead: FC<OrderReadProps> = ({ order }) => {
	const tovars = useAppSelector(selectTovars);

	return (
		<ReadBox>
			<ReadBoxTitle>Замовлення</ReadBoxTitle>
			<p>
				<Titles>Абонент:</Titles>{' '}
				{order.customer.firstName + ' ' + order.customer.lastName}
			</p>
			<p>
				<Titles>Пошта:</Titles> {order.customer.email}
			</p>
			<p>
				<Titles>Телефон:</Titles> {order.customer.phone}
			</p>
			<div>
				<p>
					<Titles>Повідомлення:</Titles>
				</p>
				<ReadBoxMessage>{order.customer.message}</ReadBoxMessage>
			</div>
			<p>
				<Titles>Час:</Titles>{' '}
				{new Date(order.date).toLocaleString('en-GB', {
					timeZone: 'UTC',
				})}
			</p>
			<p>
				<Titles>Оплата:</Titles>{' '}
				{order.payment === 1 ? 'при отримані' : 'передплата'}
			</p>
			<Titles>
				<Titles>Доставка</Titles> у {order.delivery.Description}
			</Titles>
			<p>
				<Titles>Замовлення</Titles>
			</p>
			<ul>
				{order.orders.map((order, index) => {
					const tovar = tovars.find(tovar => tovar.id === order.id);
					if (tovar) {
						return (
							<OrderCart key={order.id}>
								<div>
									<Titles>{tovar.nameUKR}</Titles>
									<OrderCartImg src={tovar.fotos[0]} alt={tovar.nameEN} />
								</div>
								<div>
									<p>
										<Titles>кількість:</Titles> {order.baskeQuantity}
									</p>
									<p>
										<Titles>ціна за один:</Titles> {tovar.cost}
									</p>
								</div>
							</OrderCart>
						);
					}
					return null;
				})}
			</ul>
			<p>
				<Titles>Загалом:</Titles> {order.cost}
			</p>
		</ReadBox>
	);
};

export default OrderRead;
