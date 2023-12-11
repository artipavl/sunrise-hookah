import styled from 'styled-components';
import palette from '../../theme.module';

export const Box = styled.div`
	display: flex;
	width: 100%;

	@media screen and (min-width: 1440px) {
		padding: 0;
		margin: auto;
	}
`;

export const Slider = styled.div`
	position: relative;

	width: calc(80vw);
	margin: auto;

	overflow: hidden;

	@media screen and (min-width: 768px) {
		width: 580px;
		margin: auto;
	}
	@media screen and (min-width: 960px) {
		width: 880px;
	}
	@media screen and (min-width: 1440px) {
		width: 100%;
	}
`;

export const SliderButtonLeft = styled.button`
	position: absolute;
	width: 50px;
	height: 50px;
	top: calc(50% - 50px);
	left: 0;
	color: ${palette.accent};

	@media screen and (max-width: 767px) {
		display: none;
	}

	&:disabled {
		opacity: 0.3;
		cursor: default;
	}
`;

export const SliderButtonRight = styled.button`
	position: absolute;
	width: 50px;
	height: 50px;
	top: calc(50% - 50px);
	right: 0;
	color: ${palette.white};

	@media screen and (max-width: 767px) {
		display: none;
	}

	&:disabled {
		opacity: 0.3;
		cursor: default;
	}
`;

type SliderListProps = {
	left: number;
	transition: boolean;
};

export const SliderList = styled.ul<SliderListProps>`
	position: relative;
	left: ${props => props.left}px;
	display: flex;
	width: 100%;
	height: 100%;
	align-items: stretch;
	gap: 20px;
	transition: ${props => props.transition && 'all 1s linear 0s'};
`;

export const SliderItem = styled.li`
	min-width: calc(80vw);
	max-width: calc(80vw);
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 768px) {
		min-width: 280px;
		max-width: 280px;
	}

	@media screen and (min-width: 1440px) {
		min-width: 335px;
		max-width: 335px;
	}
`;
