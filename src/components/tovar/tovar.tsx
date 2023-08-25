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

type TovarProps = {
	tovar: TovarType;
};

const Tovar: FC<TovarProps> = ({ tovar }) => {
	return (
		<TovarBox>
			<TovarImageBox>
				<ImgTovar
					src={
						tovar.fotos[0]
							? tovar.fotos[0]
							: 'https://kor.ill.in.ua/m/610x385/2722809.jpg'
					}
					alt={tovar.name.en}
				/>
				<TovarImageBoxUpper id="Upper">Детальніше</TovarImageBoxUpper>
			</TovarImageBox>
			<TovarInformation>
				<NameTovar>{tovar.name.en}</NameTovar>
				<span>{tovar.cost}₴</span>
				<TovarInformationAvailability>
					{tovar.quantity > 0 ? 'В наявності' : 'Відсутній'}
				</TovarInformationAvailability>
			</TovarInformation>
		</TovarBox>
	);
};

export default Tovar;
