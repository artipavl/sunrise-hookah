import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Box = styled.div`
	display: flex;
	width: 100%;
	box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.05),
		0px 4px 8px -2px rgba(16, 24, 40, 0.05);
	border-radius: 8px;
	table-layout: fixed;
`;

export const Link = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #000;
	padding: 20px;
	text-transform: uppercase;

	&.active,
	:hover,
	:focus {
		color: red;
	}
`;
