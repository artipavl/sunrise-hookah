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
} from './ordersDataTable.style';
import { AiFillCaretDown, AiFillCaretUp, AiOutlineContainer, AiOutlineRest } from 'react-icons/ai';
import Modal from '../modal/modal';
import { Order } from '../../Types/order';

type OrdersDataTableProps = {
	data: Order[];
};

const OrdersDataTable: FC<OrdersDataTableProps> = ({ data }) => {
	const [p, setP] = useState(1);
	const [total] = useState(data.length);
	const [items] = useState(5);
	const [key, setKey] = useState<keyof Order>('date');
	const [filter, setFilter] = useState(true);

	const [current, setCurrent] = useState<Order | null>(null);
	const [deleteOpen, setDeleteOpen] = useState<boolean>();
	const [readOpen, setReadOpen] = useState<boolean>();

	// const dispatch = useAppDispatch();

	function sortByKey<T extends Order, K extends keyof T>(arr: T[], key: K, filter: boolean): T[] {
		return arr.slice().sort((a, b) => {
			if (filter) {
				if (a[key] < b[key]) {
					return -1;
				}
				if (a[key] > b[key]) {
					return 1;
				}
			} else {
				if (a[key] < b[key]) {
					return 1;
				}
				if (a[key] > b[key]) {
					return -1;
				}
			}

			return 0;
		});
	}

	const sortData = useMemo(() => {
		const D = [...data];
		return sortByKey(D, key, filter);
	}, [data, filter, key]);

	return (
		<>
			<Table cellSpacing={0}>
				<Thead>
					<tr>
						<Rows active={true}>
							<RowsBox>
								<RowsText>Абонент</RowsText>{' '}
							</RowsBox>
						</Rows>
						<Rows active={true}>
							<RowsBox>
								<RowsText>Телефон</RowsText>{' '}
							</RowsBox>
						</Rows>
						<Rows active={true}>
							<RowsBox>
								<RowsText>Повідомлення</RowsText>{' '}
							</RowsBox>
						</Rows>
						<Rows
							active={key === 'status'}
							onClick={() => {
								if (key === 'status') {
									setFilter(filter => !filter);
								} else {
									setKey('status');
									setFilter(true);
								}
							}}
						>
							<RowsBox>
								<RowsText>Статус</RowsText> {key === 'status' && filter ? <AiFillCaretUp /> : <AiFillCaretDown />}
							</RowsBox>
						</Rows>
						<Rows
							active={key === 'date'}
							onClick={() => {
								if (key === 'date') {
									setFilter(filter => !filter);
								} else {
									setKey('date');
									setFilter(true);
								}
							}}
						>
							<RowsBox>
								<RowsText>Дата</RowsText> {key === 'date' && filter ? <AiFillCaretUp /> : <AiFillCaretDown />}
							</RowsBox>
						</Rows>
						{/* <Rows
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
            </Rows> */}
						<RowsDelete>
							<RowsBoxCenter>
								{/* <AiOutlineRest />
                    <AiOutlineContainer /> */}
							</RowsBoxCenter>
						</RowsDelete>
					</tr>
				</Thead>
				<Tbody>
					{sortData.slice((p - 1) * items, items * p).map((column, index) => (
						<Columns key={index}>
							<Column>
								<ColumnName>{column.customer.firstName + ' ' + column.customer.lastName}</ColumnName>
								<ColumnEmail>{column.customer.email}</ColumnEmail>
							</Column>
							<Column>
								<ColumnText>{column.customer.phone}</ColumnText>
							</Column>
							<Column>
								<ColumnText>{column.customer.message}</ColumnText>
							</Column>
							<Column>
								<ColumnText>{column.status}</ColumnText>
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
							<TfootButton type="button" disabled={p === 1} onClick={() => setP(p => p - 1)}>
								Previous
							</TfootButton>

							<span>
								Сторінка {p} / {Math.ceil(total / items)}
							</span>

							<TfootButton type="button" disabled={p === Math.ceil(total / items)} onClick={() => setP(p => p + 1)}>
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
								// onClick={() => current && dispatch(delFeedback(current.id))}
							>
								Так
							</ModalDeleteButton>
							<ModalDeleteButton type="button" onClick={() => setDeleteOpen(false)}>
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
								<p>Абонент: {current.customer.firstName + ' ' + current.customer.lastName}</p>
								<p>Пошта: {current.customer.email}</p>
								<p>Телефон: {current.customer.phone}</p>
								<div>
									<p>Повідомлення:</p>
									<ReadBoxMessage>{current.customer.message}</ReadBoxMessage>
								</div>
								<p>Час: {current.date}</p>
								<p>Доставка у {current.delivery.Description}</p>
                
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

export default OrdersDataTable;
