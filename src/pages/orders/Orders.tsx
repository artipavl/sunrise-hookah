import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchOrders } from '../../redux/orders/ordersOperations';
import { Outlet } from 'react-router-dom';
import OrderNav from '../../components/orderNav/orderNav';

type OrdersProps = {};

const Orders: FC<OrdersProps> = props => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchOrders());
	}, [dispatch]);
	return (
		<div>
			<h1>Orders</h1>
			<div style={{ marginTop: '40px' }}>
				<OrderNav />
			</div>
			<div style={{ marginTop: '40px' }}>
				<Outlet />
			</div>
		</div>
	);
};

export default Orders;
