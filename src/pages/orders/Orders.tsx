import React, { FC, useEffect } from 'react';
import OrdersDataTable from '../../components/ordersDataTable/ordersDataTable';
import { useAppDispatch } from '../../hooks';
import { fetchOrders } from '../../redux/orders/ordersOperations';

type OrdersProps = {};

const Orders: FC<OrdersProps> = props => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchOrders());
	}, [dispatch]);
	return (
		<div>
			<p>Orders</p>
			<OrdersDataTable />
		</div>
	);
};

export default Orders;
