import React, { FC, useEffect } from 'react';
import OrdersDataTable from '../../components/ordersDataTable/ordersDataTable';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOrders } from '../../redux/orders/ordersOperations';
import { selectOrders } from '../../redux/orders/slice';

type OrdersProps = {};

const Orders: FC<OrdersProps> = props => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchOrders());
	}, [dispatch]);
	const orders = useAppSelector(selectOrders);
	return (
		<div>
			<p>Orders</p>
			<OrdersDataTable data={orders} />
		</div>
	);
};

export default Orders;
