import styled from 'styled-components';

export const Table = styled.table`
	width: 100%;
	box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.05),
		0px 4px 8px -2px rgba(16, 24, 40, 0.05);
	border-radius: 8px;
	overflow: hidden;
	table-layout: fixed;
`;

interface RowsProps {
	active: boolean;
}

export const Rows = styled.th<RowsProps>`
	padding-block: 16px;
	color: #8a92a6;
	font-size: 12px;
	font-style: normal;
	font-weight: 450;
	line-height: 175%;
	text-align: start;
	color: ${props => props.active && '#000'};

	padding-left: 25px;

	cursor: pointer;
`;

export const RowsDelete = styled.th`
	width: 90px;
	padding-block: 16px;
	color: #8a92a6;
	font-size: 12px;
	font-style: normal;
	font-weight: 450;
	line-height: 175%;
	text-align: start;
`;

export const RowsBox = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
export const RowsBoxCenter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const RowsText = styled.p`
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	min-width: 0px;
	max-width: 100%;
`;

export const Thead = styled.thead`
	background: #f9fafb;
`;
export const Tbody = styled.tbody`
	background: #fff;
`;

interface ColumnProps {
	active: boolean;
}

export const Columns = styled.tr<ColumnProps>`
	background-color: ${props => props.active && 'rgb(249, 250, 251)'};
`;

export const Column = styled.td`
	text-overflow: ellipsis;
	padding-block: 10px;
	border-block: 1px solid #eaecf0;

	padding-left: 25px;
`;

export const ColumnDelete = styled.td`
	padding-block: 10px;
	border-block: 1px solid #eaecf0;
	padding-left: 20px;
`;

export const ColumnName = styled.p`
	color: #101828;
	font-family: Circular Std;
	font-size: 15px;
	font-style: normal;
	font-weight: 450;
	line-height: 125%;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	min-width: 0px;
	max-width: 100%;
`;

export const ColumnEmail = styled.p`
	color: #667085;
	font-family: Circular Std;
	font-size: 14px;
	font-style: normal;
	font-weight: 450;
	line-height: 175%;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	min-width: 0px;
	max-width: 100%;
`;
export const ColumnText = styled.p`
	display: block;
	color: #232d42;
	font-family: Circular Std;
	font-size: 16px;
	font-style: normal;
	font-weight: 450;
	line-height: 175%;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	min-width: 0px;
	max-width: 100%;
`;

export const Tfoot = styled.tfoot`
	width: 100%;
	padding-block: 12px;
	background: #fff;
`;
export const TfootTr = styled.tr`
	width: 100%;
`;

export const TfootTh = styled.th`
	position: relative;
	padding-block: 20px;
`;

export const TfootButton = styled.button`
	position: absolute;
	top: 10px;
	height: 40px;
	padding: 8px 14px;
	border-radius: 8px;
	border: 1px solid #d0d5dd;
	background: #fff;

	box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
	:hover,
	:focus {
		background-color: #eaecf0;
	}

	:disabled {
		background-color: #eaecf0;
		cursor: default;
	}

	:first-child {
		left: 25px;
	}
	:last-child {
		right: 25px;
	}
`;

export const DeleteButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	margin: auto;

	:first-child {
		margin-right: 5px;
	}

	:hover,
	:focus {
		background-color: #f9fafb;
	}
`;

export const ModalBox = styled.div`
	max-width: 90%;
	max-height: 90%;
	border-radius: 8px;
	background: #fff;
	padding: 32px;
	box-shadow: 0px 10px 30px 0px rgba(17, 38, 146, 0.05);
	overflow: auto;
`;

export const ModalDeleteTitle = styled.h1`
	color: #000;
	font-family: Product Sans;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 91.5%;
	margin-bottom: 20px;
`;

export const ModalDeleteButtonsBox = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const ModalDeleteButton = styled.button`
	padding: 8px 14px;
	border-radius: 8px;
	border: 1px solid #d0d5dd;
	background: #fff;

	box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

	:hover,
	:focus {
		background-color: #eaecf0;
	}
`;
