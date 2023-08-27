import React, { FC, useMemo } from 'react';
import OrdersDataTable from '../ordersDataTable/ordersDataTable';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectOrders } from '../../redux/orders/slice';
import { Order } from '../../Types/order';

type OrderForIdProps = {};

const OrderForId: FC<OrderForIdProps> = props => {
	const { id } = useParams();
	const orders = useAppSelector(selectOrders);
	const ordersFilt = useMemo(() => {
		if (id === 'all') {
			return orders;
		}
		if ((id as Order['status']) !== undefined) {
			return orders.filter(order => order.status === id);
		}
		return [];
	}, [id, orders]);
	return <OrdersDataTable data={ordersFilt} />;
};

export default OrderForId;
