import styled from 'styled-components';

export const Box = styled.div`
	display: flex;
	gap: 30px;
`;
export const Label = styled.label`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Input = styled.input`
	line-height: 22px;
	padding: 5px 15px;

	border-radius: 25px;
	border: 2px solid #d1d1d1;
	background: #fff;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000;
	padding: 10px;

	:hover,
	:focus {
		color: red;
	}

	:disabled {
		opacity: 0.1;
		color: #000;
		cursor: default;
	}
`;
