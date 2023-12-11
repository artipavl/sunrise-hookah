import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../theme.module';

export const Box = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	/* min-height: calc(100vh - 20px);
  max-height: calc(100vh - 20px); */

	@media screen and (min-width: 1440px) {
		padding: 0;
		margin: auto;
		/* min-height: calc(100vh - 40px);
    max-height: calc(100vh - 40px); */
	}
	
`;

export const Slider = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 50%;
	min-height: 30%;
	/* min-height: 100%; */
	overflow: hidden;
	@media screen and (max-width: 719px) {
		max-width: 100%;
		min-height: 100%;

		margin: auto;
	}
`;

export const SliderButtonLeft = styled.button`
	position: absolute;
	width: 10%;
	height: 100%;
	top: 0;
	left: 0;
	color: ${palette.textMain};

	&:disabled {
		opacity: 0.3;
		cursor: default;
	}
`;

export const SliderButtonRight = styled.button`
	position: absolute;
	width: 10%;
	height: 100%;
	top: 0;
	right: 0;
	color: ${palette.textMain};

	&:disabled {
		opacity: 0.3;
		cursor: default;
	}
 
`;

type SliderListProps = {
	left: number;
};

export const SliderList = styled.ul<SliderListProps>`
	position: relative;
	left: ${props => props.left}px;
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	gap: 20px 0px;
	transition: all 660ms linear 0s;

	& li {
		background-color: aqua;
	}
`;

export const SliderItem = styled.li`
	min-width: 100%;
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
 
`;

export const SliderItemImg = styled.img`
	width: 100%;
	height: 100%;
 
`;

export const Promotion = styled.div`
	display: none;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 50%;
 

	@media screen and (min-width: 720px) {
		display: flex;
	}
`;

export const PromotionTitle = styled.h2`
	color: ${palette.textMain};
	line-height: 1.1em;
	text-align: center;
	font-size: 7vw;
	text-transform: uppercase;
 
`;

export const PromotionLink = styled(Link)`
	box-sizing: border-box;
	padding: 5px;
	border-radius: 5px;
	background-color: ${palette.accent};
	width: 50%;
	margin-top: 20px;

	color: ${palette.textSub};
	line-height: 1.1em;
	text-align: center;
	font-size: 3vw;
	text-transform: uppercase;

	border: 3px solid ${palette.accent};

	&:hover,
	:focus {
		border: 3px solid ${palette.textMain};
		/* box-shadow: inset 1px 1px 1px 0px ${palette.textMain},
			4px 4px 1px 4px ${palette.textMain}; */
	}

	&:active {
		/* box-shadow: -4px -4px 1px 4px ${palette.textMain},
			1px 1px 1px 0px ${palette.textMain}; */
	}
`;
