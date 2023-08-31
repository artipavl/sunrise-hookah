import React, { FC } from 'react';
import {
	ImgTovar,
	NameTovar,
	TovarBox,
	TovarImageBox,
	TovarImageBoxUpper,
	TovarInformation,
	TovarInformationAvailability,
} from './tovar.style';
import TovarType from '../../Types/tovar';
import { Link } from 'react-router-dom';

type TovarProps = {
	tovar: TovarType;
};

const TovarCard: FC<TovarProps> = ({ tovar }) => {
	return (
		<Link to={`/tovarPage/${tovar.id}`}>
			<TovarBox>
				<TovarImageBox>
					<ImgTovar
						src={
							tovar.fotos[0]
								? tovar.fotos[0]
								: 'https://kor.ill.in.ua/m/610x385/2722809.jpg'
						}
						alt={tovar.nameEN}
					/>
					<TovarImageBoxUpper id="Upper">Детальніше</TovarImageBoxUpper>
				</TovarImageBox>
				<TovarInformation>
					<NameTovar>{tovar.nameEN}</NameTovar>
					<span>{tovar.cost}₴</span>
					<TovarInformationAvailability>
						{tovar.quantity > 0 ? 'В наявності' : 'Відсутній'}
					</TovarInformationAvailability>
				</TovarInformation>
			</TovarBox>
		</Link>
	);
};

export default TovarCard;
