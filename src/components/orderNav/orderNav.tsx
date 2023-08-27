import React, { FC } from 'react';
import { Box, Link } from './orderNav.style';

type OrderNavProps = {};

const OrderNav: FC<OrderNavProps> = props => {
	return (
		<Box>
			<li>
				<Link to="all">Усі</Link>
			</li>
			<li>
				<Link to="new">нове</Link>
			</li>
			<li>
				<Link to="paid">оплачене</Link>
			</li>
			<li>
				<Link to="accepted">прийнято</Link>
			</li>
			<li>
				<Link to="done">готове</Link>
			</li>
		</Box>
	);
};

export default OrderNav;
