import styled from 'styled-components';

export const Box = styled.div`
	display: flex;
	gap: 30px;
`;

export const Lable = styled.label`
	position: relative;
	color: white;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const List = styled.ul`
	position: absolute;
	left: 0;
	top: calc(100% + 10px);
	padding-block: 5px;
	border-radius: 3px;
	width: max-content;
	background-color: #fff;
	color: #000;
`;
export const Item = styled.li`
	padding-inline: 5px;
	cursor: pointer;

	:hover,
	:focus {
		background-color: #fafafa;
	}
`;

export const WarehousesList = styled.ul`
	/* color: #000; */
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 30px;
	color: #fff;
`;

export const WarehousesItem = styled.li`
	display: flex;
	align-items: center;
	cursor: pointer;

	:hover,
	:focus {
		color: red;
	}

	::before {
		content: ' ';
		display: block;
		width: 10px;
		height: 10px;
		background-color: #fff;
		border: 1px solid #aaa;
		border-radius: 50%;
		margin-right: 5px;
	}
`;

export const Input = styled.input`
	position: relative;
	display: inline-block;
	/* width: 100%; */
	background: #ffffff;
	border: 1px solid #ffffff;
	/* border-radius: 90px; */

	padding: 10px 20px;

	::placeholder {
		font-weight: 400;
		font-size: 16px;
		line-height: 20px;
		/* identical to box height */

		color: #484848;
	}
`;
