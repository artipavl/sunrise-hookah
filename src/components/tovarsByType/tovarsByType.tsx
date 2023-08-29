import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
// import {
// 	TovarBox,
// 	TovarInfo,
// 	TovarItem,
// 	TovarItemListPropItem,
// 	TovarItemListProps,
// 	TovarList,
// } from './tovarsByType.style';
import { useAppSelector } from '../../hooks';
import { selectTypes } from '../../redux/types/slice';
import { selectTovars } from '../../redux/tovars/slice';
// import Panel from '../panel/panel';
// import {
// 	AiOutlineDelete,
// 	AiOutlineDollarCircle,
// 	AiOutlineForm,
// 	AiOutlineGold,
// 	AiOutlineRise,
// } from 'react-icons/ai';
import TovarsDataTable from '../tovarsDataTable/tovarsDataTable';

type AdminPanelProps = {};

const TovarsByType: FC<AdminPanelProps> = props => {
	const params = useParams();

	const types = useAppSelector(selectTypes);
	const tovars = useAppSelector(selectTovars);

	const type = types.find(type => type.en === params.id?.toLowerCase());

	const filteredTovars = type
		? tovars.filter(tovar => tovar.type === type.en)
		: tovars;

	return (
		<TovarsDataTable data={filteredTovars} />
		// <TovarBox>
		// 	<Panel />

		// 	{/* {type?.ua} */}

		// 	<TovarList>
		// 		{filteredTovars.map(tovar => (
		// 			<li key={tovar.id}>
		// 				<TovarItem>
		// 					<span>{tovar.nameUKR}</span>
		// 					<TovarInfo>
		// 						<TovarItemListProps>
		// 							<TovarItemListPropItem>
		// 								<AiOutlineDollarCircle /> {tovar.cost}
		// 							</TovarItemListPropItem>
		// 							<TovarItemListPropItem>
		// 								<AiOutlineRise />
		// 								{tovar.popularity}
		// 							</TovarItemListPropItem>
		// 							<TovarItemListPropItem>
		// 								<AiOutlineGold />
		// 								{tovar.quantity}
		// 							</TovarItemListPropItem>
		// 						</TovarItemListProps>
		// 						<TovarItemListProps>
		// 							<TovarItemListPropItem>
		// 								<AiOutlineForm />
		// 							</TovarItemListPropItem>
		// 							<TovarItemListPropItem>
		// 								<AiOutlineDelete />
		// 							</TovarItemListPropItem>
		// 						</TovarItemListProps>
		// 					</TovarInfo>
		// 				</TovarItem>
		// 			</li>
		// 		))}
		// 	</TovarList>
		// </TovarBox>
	);
};

export default TovarsByType;
