import styled from 'styled-components';
import palette from '../../theme.module';

export const TovarBox = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 30px;
	padding: 20px 25px;

	background-color: ${palette.bgWhite};
	border-radius: 8px;
	box-shadow: 0px 10px 13px 0px rgba(17, 38, 146, 0.05);
`;

export const TovarList = styled.ul`
	display: flex;
	flex-direction: column;

	margin-top: 20px;

	gap: 10px;
`;

export const TovarInfo = styled.div`
	display: flex;
	gap: 30px;
`;

export const TovarItem = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 15px 20px;
	background-color: ${palette.bgWhite};
	border-radius: 8px;
	box-shadow: 0px 10px 13px 0px rgba(17, 38, 146, 0.05);
`;

export const TovarItemListProps = styled.ul`
	display: flex;
	gap: 10px;
	color: ${palette.success};
`;

export const TovarItemListPropItem = styled.li`
	display: flex;
	align-items: center;
	gap: 5px;
`;
