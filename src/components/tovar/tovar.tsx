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
import { selectLanguage } from '../../redux/language/languageSelectors';
import { useAppSelector } from '../../hooks';

type TovarProps = {
	tovar: TovarType;
};

const TovarCard: FC<TovarProps> = ({ tovar }) => {
	const language = useAppSelector(selectLanguage);

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
					<TovarImageBoxUpper id="Upper">
						{language === 'uk' ? 'Детальніше' : 'See more'}
					</TovarImageBoxUpper>
				</TovarImageBox>
				<TovarInformation>
					<NameTovar>
						{language === 'uk' ? tovar.nameUKR : tovar.nameEN}
					</NameTovar>
					<span>{tovar.cost}₴</span>
					<TovarInformationAvailability>
						{tovar.quantity > 0
							? language === 'uk'
								? 'В наявності'
								: 'In stock'
							: language === 'uk'
							? 'Відсутній'
							: 'Currently unavailable.'}
					</TovarInformationAvailability>
				</TovarInformation>
			</TovarBox>
		</Link>
	);
};

export default TovarCard;
