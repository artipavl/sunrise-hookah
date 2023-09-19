import React, { FC, useState } from 'react';
import {
	Column,
	Columns,
	Rows,
	Table,
	Tbody,
	// Tfoot,
	// TfootButton,
	// TfootTh,
	// TfootTr,
	Thead,
	DeleteButton,
	ModalBox,
	ModalDeleteTitle,
	ModalDeleteButtonsBox,
	ModalDeleteButton,
} from './dataTables.style';
import { AiOutlineRest } from 'react-icons/ai';
import Modal from '../modal/modal';
import { Admin } from '../../Types/typesAuth';

type DataTablesProps = {
	rows: string[];
	rowsTitle: string[];
	columns: any[];
	remove: (id: string) => void;
};

const DataTables: FC<DataTablesProps> = ({
	rows,
	columns,
	rowsTitle,
	remove,
}) => {
	const [current, setCurrent] = useState<Admin | null>(null);
	const [deleteOpen, setDeleteOpen] = useState<boolean>();

	return (
		<>
			<Table cellSpacing={0}>
				<Thead>
					<tr>
						{rows.map((row, index) => (
							<Rows key={row} delete={Boolean(row === 'delete')}>
								{rowsTitle[index]}
							</Rows>
						))}
					</tr>
				</Thead>
				<Tbody>
					{columns.map((column, index) => (
						<Columns key={index}>
							{rows.map((row, rowIndex) =>
								row === 'delete' ? (
									<Column
										key={`${index}-${rowIndex}`}
										style={{ textAlign: 'center' }}
									>
										<DeleteButton
											onClick={() => {
												setCurrent(column);
												setDeleteOpen(true);
											}}
										>
											<AiOutlineRest />
										</DeleteButton>
									</Column>
								) : (
									<Column key={`${index}-${rowIndex}`}>{column[row]}</Column>
								)
							)}
						</Columns>
					))}
				</Tbody>
				{/* <Tfoot>
        <TfootTr>
          <TfootTh>
            <TfootButton type="button">Previous</TfootButton>
          </TfootTh>
          <TfootTh colSpan={rows.length - 2}>
            <span>Page 1 of 10</span>
          </TfootTh>
          <TfootTh>
            <TfootButton type="button">Next</TfootButton>
          </TfootTh>
        </TfootTr>
      </Tfoot> */}
			</Table>
			{deleteOpen && (
				<Modal openBasket={() => setDeleteOpen(false)}>
					<ModalBox>
						<ModalDeleteTitle>Дійсно видалити</ModalDeleteTitle>
						<ModalDeleteButtonsBox>
							<ModalDeleteButton
								type="button"
								onClick={() => {
									current && remove(current.id);
									setDeleteOpen(false);
									setCurrent(null);
								}}
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
		</>
	);
};

export default DataTables;
