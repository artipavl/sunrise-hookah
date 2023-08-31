import React, { FC, useState } from 'react';
import { Type } from '../../redux/types/slice';
import { Box, Button, Input, Label } from './updateType.style';
import { AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';
import { useAppDispatch } from '../../hooks';
import {
	addType,
	putchTypeById,
	removeTypeById,
} from '../../redux/types/typesOperations';
import Modal from '../modal/modal';
import {
	ModalBox,
	ModalDeleteButton,
	ModalDeleteButtonsBox,
	ModalDeleteTitle,
} from '../tovarsDataTable/tovarsDataTable.style';

type UpdateTypeProps = {
	type?: Type;
	close?: () => void;
};

const UpdateType: FC<UpdateTypeProps> = ({ type, close }) => {
	const [ukr, setUkr] = useState<string>(() => (type ? type.ukr : ''));
	const [en, setEn] = useState<string>(() => (type ? type.en : ''));
	const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	return (
		<Box>
			<Label>
				Назва
				<Input
					type="text"
					name="ukr"
					value={ukr}
					min={3}
					onChange={e => setUkr(e.currentTarget.value)}
				/>
			</Label>
			<Label>
				Name
				<Input
					type="text"
					name="en"
					value={en}
					min={3}
					onChange={e => setEn(e.currentTarget.value)}
				/>
			</Label>

			<Button
				onClick={() =>
					!type
						? dispatch(addType({ ukr, en })).then(() => close && close())
						: dispatch(putchTypeById({ id: type.id, ukr, en }))
				}
				type="button"
				disabled={
					ukr.length < 3 ||
					en.length < 3 ||
					(type && ukr === type.ukr) ||
					(type && en === type.en)
				}
			>
				<AiOutlineSave size={30} />
			</Button>
			{type && (
				<Button type="button" onClick={() => setDeleteOpen(true)}>
					<AiOutlineDelete size={30} />
				</Button>
			)}
			{deleteOpen && (
				<Modal openBasket={() => setDeleteOpen(false)}>
					<ModalBox>
						<ModalDeleteTitle>Дійсно видалити</ModalDeleteTitle>
						<ModalDeleteButtonsBox>
							<ModalDeleteButton
								type="button"
								onClick={() =>
									type &&
									dispatch(removeTypeById(type.id)).then(() =>
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
		</Box>
	);
};

export default UpdateType;
