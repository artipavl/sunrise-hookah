import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Footerbox = styled.footer`
	position: relative;
	/* position: fixed;
  bottom: 0;
  left: 0; */
	scroll-snap-align: start;
	width: 100%;
	/* z-index: 2; */
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 30px;
	padding-bottom: 30px;
	padding-inline: 20px;
	color: #fff;
	margin-top: auto;
`;

export const AdminLink = styled(Link)`
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	color: #fff;
`;
