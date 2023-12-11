import React, { FC } from 'react';
import {
	HeroArrow,
	HeroPromotion,
	HeroPromotionLink,
	HeroPromotionTitle,
	HeroSection,
	HeroTitle,
} from './hero.style';

import { TfiAngleDown } from 'react-icons/tfi';
import useScrolltoId from '../../helpers/useScrolltoId';
import { useAppSelector } from '../../hooks';
import { selectLanguage } from '../../redux/language/languageSelectors';

type HeroProps = {};

const Hero: FC<HeroProps> = props => {
	const ScrolltoId = useScrolltoId();
	const language = useAppSelector(selectLanguage);
	return (
		<HeroSection id="hero">
			<HeroTitle>Sunrise Hookah</HeroTitle>
			<HeroPromotion>
				<HeroPromotionTitle>
					{language === 'uk' ? 'ДАВАЙ ТЯНИ!' : "LET'S BREATHE!"}
				</HeroPromotionTitle>
				<HeroPromotionLink to="/tovar/hookahs">
					{language === 'uk' ? 'В МАГАЗИН' : 'SHOP'}
				</HeroPromotionLink>
			</HeroPromotion>
			<HeroArrow onClick={() => ScrolltoId('tovarGallery', '/')}>
				<TfiAngleDown size={'30px'} color="#fff" />
			</HeroArrow>
		</HeroSection>
	);
};

export default Hero;
