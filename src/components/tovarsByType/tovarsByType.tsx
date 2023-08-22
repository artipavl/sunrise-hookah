import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
	TovarBox,
	TovarInfo,
	TovarItem,
	TovarItemListPropItem,
	TovarItemListProps,
	TovarList,
} from './tovarsByType.style';
import { useAppSelector } from '../../hooks';
import { selectTypes } from '../../redux/types/slice';
import { selectTovars } from '../../redux/tovars/slice';
import Panel from '../panel/panel';
import { AiOutlineDelete, AiOutlineDollarCircle, AiOutlineForm, AiOutlineGold, AiOutlineRise } from 'react-icons/ai';

type AdminPanelProps = {};

const TovarsByType: FC<AdminPanelProps> = props => {
	const params = useParams();

	const types = useAppSelector(selectTypes);
	const tovars = useAppSelector(selectTovars);

	const type = types.find(type => type.eu === params.id?.toLowerCase());

	const filteredTovars = tovars.filter(tovar => tovar.type === type?.eu);

	return (
		<TovarBox>
			<Panel />

			{/* {type?.ua} */}
			<TovarList>
				{filteredTovars.map(tovar => (
					<li key={tovar.id}>
						<TovarItem>
							<span>{tovar.name.ua}</span>
							<TovarInfo>
								<TovarItemListProps>
									<TovarItemListPropItem>
										<AiOutlineDollarCircle /> {tovar.cost}
									</TovarItemListPropItem>
									<TovarItemListPropItem>
										<AiOutlineRise />
										{tovar.popularity}
									</TovarItemListPropItem>
									<TovarItemListPropItem>
										<AiOutlineGold />
										{tovar.quantity}
									</TovarItemListPropItem>
								</TovarItemListProps>
								<TovarItemListProps>
									<TovarItemListPropItem>
										<AiOutlineForm />
									</TovarItemListPropItem>
									<TovarItemListPropItem>
										<AiOutlineDelete />
									</TovarItemListPropItem>
								</TovarItemListProps>
							</TovarInfo>
						</TovarItem>
					</li>
				))}
			</TovarList>
		</TovarBox>
	);
};

export default TovarsByType;
