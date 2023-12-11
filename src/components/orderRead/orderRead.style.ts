import styled from 'styled-components';
import palette from '../../theme.module';

export const ReadBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	font-family: Circular Std;
	font-size: 20px;
	font-style: normal;
	font-weight: 450;
	line-height: 175%;
	max-height: 70vh;
	max-width: 50vw;
	overflow: hidden;
	overflow-y: auto;
	padding-right: 20px;
`;

export const ReadBoxTitle = styled.h1`
	color: ${palette.accentSec};
	font-family: Circular Std;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 175%;
`;
export const ReadBoxMessage = styled.p`
	max-width: 400px;
`;

export const Titles = styled.span`
	color: ${palette.accentSec};
	font-weight: 700;
`;

export const OrderCart = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	:not(:last-child) {
		margin-bottom: 30px;
	}
`;

export const OrderCartImg = styled.img`
	width: 150px;
`;
