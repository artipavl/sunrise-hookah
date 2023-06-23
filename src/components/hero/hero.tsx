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

type HeroProps = {};

const Hero: FC<HeroProps> = props => {
  return (
    <HeroSection id="hero">
      <HeroTitle>Sunrise Hookah</HeroTitle>
      <HeroPromotion>
        <HeroPromotionTitle>ДАВАЙ ТЯНИ!</HeroPromotionTitle>
        <HeroPromotionLink to="/">В МАГАЗИН</HeroPromotionLink>
      </HeroPromotion>
      <HeroArrow to="/">
        <TfiAngleDown size={'30px'} color="#fff" />
      </HeroArrow>
    </HeroSection>
  );
};

export default Hero;
