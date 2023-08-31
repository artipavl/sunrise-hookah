import React, { FC, useState, useMemo } from 'react';
import {
	Column,
	ColumnDelete,
	ColumnEmail,
	ColumnName,
	ColumnText,
	Columns,
	DeleteButton,
	ModalBox,
	ModalDeleteButton,
	ModalDeleteButtonsBox,
	ModalDeleteTitle,
	ReadBox,
	ReadBoxMessage,
	ReadBoxTitle,
	Rows,
	RowsBox,
	RowsBoxCenter,
	RowsDelete,
	RowsText,
	Table,
	Tbody,
	Tfoot,
	TfootButton,
	TfootTh,
	TfootTr,
	Thead,
} from './feedbackDataTable.style';
import Feedback from '../../Types/feedback';
import {
	AiFillCaretDown,
	AiFillCaretUp,
	AiOutlineContainer,
	AiOutlineRest,
} from 'react-icons/ai';
import { delFeedback } from '../../redux/feedback/feedbackOperations';
import { useAppDispatch } from '../../hooks';
import Modal from '../modal/modal';

type FeedbackDataTableProps = {
	data: any[];
};

const FeedbackDataTable: FC<FeedbackDataTableProps> = ({ data }) => {
	const [p, setP] = useState(1);
	const [total] = useState(() => (data.length === 0 ? 1 : data.length));
	const [items] = useState(5);
	const [key, setKey] = useState<keyof Feedback>('date');
	const [filter, setFilter] = useState(true);

	const [current, setCurrent] = useState<Feedback | null>(null);
	const [deleteOpen, setDeleteOpen] = useState<boolean>();
	const [readOpen, setReadOpen] = useState<boolean>();

	const dispatch = useAppDispatch();

	const rows = ['Абонент', 'Телефон', 'Повідомлення', 'Час', 'delete'];
	const rowsType: (keyof Feedback)[] = [
		'firstName',
		'phone',
		'message',
		'date',
	];

	const sortData = useMemo(() => {
		const D = [...data];
		if (filter) {
			return D.sort((a, b) => a[key] - b[key]);
		}
		return D.sort((a, b) => b[key] - a[key]);
	}, [data, filter, key]);

	return (
		<>
			<Table cellSpacing={0}>
				<Thead>
					<tr>
						{rows.map((row, index) => {
							if (row === 'delete') {
								return (
									<RowsDelete key={row}>
										<RowsBoxCenter>
											{/* <AiOutlineRest />
                    <AiOutlineContainer /> */}
										</RowsBoxCenter>
									</RowsDelete>
								);
							}
							return (
								<Rows
									key={row}
									active={key === rowsType[index]}
									onClick={() => {
										if (key === rowsType[index]) {
											setFilter(filter => !filter);
										} else {
											setKey(rowsType[index]);
											setFilter(true);
										}
									}}
								>
									<RowsBox>
										<RowsText>{row}</RowsText>{' '}
										{key === rowsType[index] && filter ? (
											<AiFillCaretUp />
										) : (
											<AiFillCaretDown />
										)}
									</RowsBox>
								</Rows>
							);
						})}
					</tr>
				</Thead>
				<Tbody>
					{sortData.slice((p - 1) * items, items * p).map((column, index) => (
						<Columns key={index}>
							<Column>
								<ColumnName>
									{column.firstName + ' ' + column.lastName}
								</ColumnName>
								<ColumnEmail>{column.email}</ColumnEmail>
							</Column>
							<Column>
								<ColumnText>{column.phone}</ColumnText>
							</Column>
							<Column>
								<ColumnText>{column.message}</ColumnText>
							</Column>
							<Column>
								<ColumnText>{`${new Date(column.date).toLocaleString('en-GB', {
									timeZone: 'UTC',
								})}`}</ColumnText>
							</Column>
							<ColumnDelete>
								<DeleteButton
									onClick={() => {
										setCurrent(column);
										setDeleteOpen(true);
									}}
								>
									<AiOutlineRest />
								</DeleteButton>
								<DeleteButton
									onClick={() => {
										setCurrent(column);
										setReadOpen(true);
									}}
								>
									<AiOutlineContainer />
								</DeleteButton>
							</ColumnDelete>
						</Columns>
					))}
				</Tbody>
				<Tfoot>
					<TfootTr>
						<TfootTh colSpan={5}>
							<TfootButton
								type="button"
								disabled={p === 1}
								onClick={() => setP(p => p - 1)}
							>
								Previous
							</TfootButton>

							<span>
								Сторінка {p} / {Math.ceil(total / items)}
							</span>

							<TfootButton
								type="button"
								disabled={p === Math.ceil(total / items)}
								onClick={() => setP(p => p + 1)}
							>
								Next
							</TfootButton>
						</TfootTh>
					</TfootTr>
				</Tfoot>
			</Table>
			{deleteOpen && (
				<Modal openBasket={() => setDeleteOpen(false)}>
					<ModalBox>
						<ModalDeleteTitle>Дійсно видалити</ModalDeleteTitle>
						<ModalDeleteButtonsBox>
							<ModalDeleteButton
								type="button"
								onClick={() =>
									current &&
									dispatch(delFeedback(current.id)).then(() =>
										setDeleteOpen(false)
									)
								}
							>
								Так
							</ModalDeleteButton>
							<ModalDeleteButton
								type="button"
								onClick={() => setDeleteOpen(false)}
							>
								Ні
							</ModalDeleteButton>
						</ModalDeleteButtonsBox>
					</ModalBox>
				</Modal>
			)}
			{readOpen && (
				<Modal openBasket={() => setReadOpen(false)}>
					<ModalBox>
						{current ? (
							<ReadBox>
								<ReadBoxTitle>Лист</ReadBoxTitle>
								<p>Абонент: {current.firstName + ' ' + current.lastName}</p>
								<p>Пошта: {current.email}</p>
								<p>Телефон: {current.phone}</p>
								<p>Час: {current.date}</p>
								<div>
									<p>Повідомлення:</p>
									<ReadBoxMessage>{current.message}</ReadBoxMessage>
								</div>

								<DeleteButton
									onClick={() => {
										setDeleteOpen(true);
									}}
								>
									<AiOutlineRest />
								</DeleteButton>
							</ReadBox>
						) : (
							'Loading...'
						)}
					</ModalBox>
				</Modal>
			)}
		</>
	);
};

export default FeedbackDataTable;
