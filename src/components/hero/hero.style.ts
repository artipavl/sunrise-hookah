import styled from 'styled-components';
import Bg from '../../images/sunrise-hookah-hero.jpg';
import { Link } from 'react-router-dom';

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
  background-image: ${`url(${Bg})`};
  background-size: cover;
  background-repeat: 'no-repeat';
  background-position: center;
  scroll-snap-align: start;
`;

export const HeroTitle = styled.h1`
  color: #fff;
  line-height: 1.1em;
  font-size: 10vw;
  text-transform: uppercase;
`;

export const HeroPromotion = styled.div`
  @media screen and (min-width: 720px) {
    display: none;
  }
`;

export const HeroPromotionTitle = styled.h2`
  color: #fff;
  line-height: 1.1em;
  text-align: center;
  font-size: 7vw;
  text-transform: uppercase;
`;
export const HeroPromotionLink = styled(Link)`
  padding: 5px;
  border-radius: 5px;
  background-color: yellow;
  width: 50%;
  margin: auto;
  margin-top: 20px;

  color: #000;
  line-height: 1.1em;
  text-align: center;
  font-size: 3vw;
  text-transform: uppercase;
`;

export const HeroArrow = styled(Link)`
  position: absolute;

  bottom: 10px;

  display: none;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  @media screen and (min-width: 720px) {
    display: flex;
  }
`;
