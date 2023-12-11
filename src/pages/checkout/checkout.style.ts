import styled from 'styled-components';
import palette from '../../theme.module';

export const Title = styled.h1`
	text-transform: uppercase;
	color: ${palette.white};
	margin-bottom: 30px;
`;

export const SubTitle = styled.h2`
	text-transform: uppercase;
	color: ${palette.white};
	margin-bottom: 30px;
	font-weight: 400;
	width: 100%;
`;

export const Box = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media screen and (min-width: 1000px) {
		flex-direction: row;
	}
`;

export const CheckoutList = styled.ol`
	counter-reset: a;
	width: 100%;
`;
export const CheckoutItem = styled.li`
	:not(:last-child) {
		margin-bottom: 30px;
	}
	display: flex;

	::before {
		content: counter(a);
		counter-increment: a;
		display: flex;
		justify-content: center;
		align-items: center;
		/* margin-top: 5px; */
		margin-right: 10px;
		min-width: 30px;
		max-width: 30px;
		height: 30px;
		background-color: #ffffff50;

		border-radius: 50%;
	}
`;

export const DeliveryInform = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	align-items: center;
`;

export const Paylist = styled.div`
	color: ${palette.white};
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
export const PayItem = styled.label`
	display: flex;
	gap: 20px;
`;

export const CenterBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;
