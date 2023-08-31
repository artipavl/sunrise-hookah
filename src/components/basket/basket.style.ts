import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BasketSection = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 99999999;

	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: end;
	background-color: rgb(0 0 0 / 58%);
`;

export const BasketBox = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 320px;
	max-width: 700px;
	height: 100vh;
	background-color: #fff;
`;

export const BasketHeader = styled.div`
	width: 100%;
	height: 10%;
	background-color: yellow;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline-end: 20px;
`;

export const BasketCloseButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 10%;
`;

export const BasketList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 15px;
	max-height: 70%;
	overflow-y: scroll;
	padding-inline: 20px;
	padding-top: 20px;

	::-webkit-scrollbar {
		width: 0;
	}
`;

export const BasketItam = styled.li`
	position: relative;
	display: flex;
	gap: 20px;
	:hover,
	:focus {
		&& #delete {
			display: flex;
			opacity: 1;
		}
	}
`;

export const BasketItamImage = styled.img`
	width: auto;
	height: 80px;
`;

export const BasketItamInput = styled.input`
	width: 45px;
`;

export const BasketItamInformation = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const BasketItamDelete = styled.button`
	opacity: 0;
	display: none;
	position: absolute;
	right: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BasketSum = styled.div`
	display: flex;
	gap: 10px;
	margin-top: auto;
	padding-inline: 20px;
	padding-bottom: 20px;
`;

export const Buy = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 10%;
	/* margin-top: auto; */
	background-color: yellow;
	color: #000;

	:hover,
	:focus {
		color: #fff;
		background-color: #000;
	}
`;
