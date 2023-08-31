import React, { FC, useState, useMemo, useEffect } from 'react';
import {
	Column,
	ColumnDelete,
	ColumnText,
	Columns,
	DeleteButton,
	ModalBox,
	ModalDeleteButton,
	ModalDeleteButtonsBox,
	ModalDeleteTitle,
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
} from './tovarsDataTable.style';
import {
	AiFillCaretDown,
	AiFillCaretUp,
	AiOutlineContainer,
	AiOutlineRest,
} from 'react-icons/ai';
import Modal from '../modal/modal';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Tovar from '../../Types/tovar';
import sortArrByKey from '../../helpers/sortArrByKey';
import { selectTypes } from '../../redux/types/slice';
import {
	removeTovarById,
	updateTovar,
} from '../../redux/tovars/tovarsOperations';
import { MyForm } from '../newTovar/newTovar';

type TovarsDataTableProps = {
	data: Tovar[];
};

const TovarsDataTable: FC<TovarsDataTableProps> = ({ data }) => {
	const [p, setP] = useState(1);
	const [total, setTotal] = useState(1);
	const [items] = useState(5);
	const [key, setKey] = useState<keyof Tovar>('cost');
	const [filter, setFilter] = useState(false);

	const [current, setCurrent] = useState<Tovar | null>(null);
	const [deleteOpen, setDeleteOpen] = useState<boolean>();
	const [readOpen, setReadOpen] = useState<boolean>();

	const types = useAppSelector(selectTypes);

	useEffect(() => {
		setTotal(data.length === 0 ? 1 : data.length);
	}, [data]);

	const dispatch = useAppDispatch();

	const sortData = useMemo(() => {
		return sortArrByKey(data, key, filter);
	}, [data, filter, key]);

	return (
		<>
			<Table cellSpacing={0}>
				<Thead>
					<tr>
						<Rows active={false}>
							<RowsBox>
								<RowsText>Назва</RowsText>{' '}
							</RowsBox>
						</Rows>
						<Rows active={false}>
							<RowsBox>
								<RowsText>Тип</RowsText>{' '}
							</RowsBox>
						</Rows>
						<Rows active={false}>
							<RowsBox>
								<RowsText>Зображення</RowsText>{' '}
							</RowsBox>
						</Rows>
						<Rows
							active={key === 'popularity'}
							onClick={() => {
								if (key === 'popularity') {
									setFilter(filter => !filter);
								} else {
									setKey('popularity');
									setFilter(true);
								}
							}}
						>
							<RowsBox>
								<RowsText>Популярність</RowsText>{' '}
								{key === 'popularity' && filter ? (
									<AiFillCaretUp />
								) : (
									<AiFillCaretDown />
								)}
							</RowsBox>
						</Rows>
						<Rows
							active={key === 'cost'}
							onClick={() => {
								if (key === 'cost') {
									setFilter(filter => !filter);
								} else {
									setKey('cost');
									setFilter(true);
								}
							}}
						>
							<RowsBox>
								<RowsText>Вартість</RowsText>{' '}
								{key === 'cost' && filter ? (
									<AiFillCaretUp />
								) : (
									<AiFillCaretDown />
								)}
							</RowsBox>
						</Rows>
						<RowsDelete>
							<RowsBoxCenter></RowsBoxCenter>
						</RowsDelete>
					</tr>
				</Thead>
				<Tbody>
					{sortData.slice((p - 1) * items, items * p).map((column, index) => {
						return (
							<Columns
								key={index}
								active={column.id === current?.id}
								onClick={() => setCurrent(column)}
							>
								<Column>
									<ColumnText>{column.nameUKR}</ColumnText>
								</Column>
								<Column>
									<ColumnText>
										{types.find(type => type.en === column.type)?.ukr}
									</ColumnText>
								</Column>
								<Column>
									<img src={column.fotos[0]} alt={column.nameUKR} />
								</Column>
								<Column>
									<ColumnText>{column.popularity}</ColumnText>
								</Column>
								<Column>
									<ColumnText>{column.cost} грн.</ColumnText>
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
						);
					})}
				</Tbody>
				<Tfoot>
					<TfootTr>
						<TfootTh colSpan={6}>
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
									dispatch(removeTovarById(current.id)).then(() =>
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
			{readOpen && current && (
				<Modal openBasket={() => setReadOpen(false)}>
					<ModalBox>
						<div>
							<MyForm
								submit={(form: any, id: string) =>
									dispatch(updateTovar({ form, id })).then(() =>
										setReadOpen(false)
									)
								}
								message="add tovarchik"
								tovar={current}
							/>
						</div>
					</ModalBox>
				</Modal>
			)}
		</>
	);
};

export default TovarsDataTable;
