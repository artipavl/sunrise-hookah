import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectTypes } from '../../redux/types/slice';
import { Button, Link, NavUl, UlItem, UpdateTypeBox } from './tovars.style';
import Modal from '../modal/modal';
import { AiOutlineForm, AiOutlinePlusCircle } from 'react-icons/ai';
import UpdateType from '../updateType/updateType';
import { ModalBox } from '../tovarsDataTable/tovarsDataTable.style';

type AdminPanelProps = {};

const Tovars: FC<AdminPanelProps> = props => {
	const [addType, setAddType] = useState<boolean>(false);
	const [updateType, setUpdateType] = useState<boolean>(false);
	const Types = useAppSelector(selectTypes);

	return (
		<div>
			<NavUl>
				<UlItem key={'all'}>
					<Link to={'all'}>Усі</Link>{' '}
				</UlItem>
				{Types.map(type => (
					<UlItem key={type.id}>
						<Link to={type.en}>{type.ukr}</Link>{' '}
					</UlItem>
				))}
				<UlItem key={'all'}>
					<Button onClick={() => setAddType(true)}>
						<AiOutlinePlusCircle />
					</Button>{' '}
				</UlItem>
				<UlItem key={'all'}>
					<Button onClick={() => setUpdateType(true)}>
						<AiOutlineForm />
					</Button>{' '}
				</UlItem>
			</NavUl>
			<Outlet />
			{addType && (
				<Modal openBasket={() => setAddType(false)}>
					<ModalBox>
						<UpdateType close={() => setAddType(false)} />
					</ModalBox>
				</Modal>
			)}
			{updateType && (
				<Modal openBasket={() => setUpdateType(false)}>
					<ModalBox>
						<UpdateTypeBox>
							{Types.map(type => (
								<li>
									<UpdateType type={type} />
								</li>
							))}
						</UpdateTypeBox>
					</ModalBox>
				</Modal>
			)}
		</div>
	);
};

export default Tovars;
