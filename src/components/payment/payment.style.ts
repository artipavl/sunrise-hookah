import styled from 'styled-components';
import palette from '../../theme.module';

export const PaymentBox = styled.div`
	width: 100%;
	padding-block: 20px;
	padding-inline: 10px;
	color: ${palette.white};
	background-color: ${palette.bgSub};
	border-radius: 10px;
	height: max-content;
`;

export const PaymentLine = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const PaymentBottomLine = styled.div`
	width: 100%;
	border-bottom: 1px solid #fff;
	padding-block: 10px;
`;

export const SubmitButton = styled.button`
	margin-block: 20px;
	width: 100%;
	height: 40px;
	text-align: center;
	border-radius: 10px;
	background-color: ${palette.success};

	:hover,
	:focus {
		opacity: 0.8;
	}

	:disabled {
		opacity: 0.5;
		cursor: default;
	}
`;

export const GarantList = styled.ul`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	gap: 10px;
`;

export const GarantItem = styled.li`
	display: flex;
	align-items: center;

	::before {
		content: '';
		width: 5px;
		height: 5px;
		background-color: ${palette.bgWhite};
		margin-right: 5px;
		border-radius: 50%;
	}
`;

export const OrderModal = styled.div`
	padding: 20px;
	border-radius: 5px;
	background-color: ${palette.bgWhite};
`;
