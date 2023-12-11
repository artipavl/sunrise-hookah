import styled from 'styled-components';
import { Section } from '../../reuseСomponents/section.style';
import palette from '../../theme.module';

// const palette = {
// 	mainBg: '#222',

// 	textGrey: '#dcdcdc',
// 	subGrey: '#686868',

// 	black: '#262626',
// 	subBlack: '#5a5a5a',

// 	yellow: '#ffd058',
// };

export const Title = styled.h1`
	color: ${palette.textSub};

	line-height: normal;
	text-align: center;
	font-size: 45px;
	margin-bottom: 30px;
	text-transform: uppercase;
`;

export const TovarList = styled.ul`
	width: 100%;
	display: grid;

	gap: 20px;
	flex-wrap: wrap;

	grid-template-columns: 1fr;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (min-width: 1440px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export const TovarItem = styled.li`
	min-width: 100%;
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 768px) {
		min-width: calc((100% - 20px) / 2);
		max-width: calc((100% - 20px) / 2);
	}

	@media screen and (min-width: 1440px) {
		min-width: calc((100% - 60px) / 4);
		max-width: calc((100% - 60px) / 4);
	}
`;

export const SectionTovars = styled(Section)`
	display: flex;
	flex-direction: column;
	position: relative;

	padding-top: 120px;
	/* padding-bottom: 0; */
`;

export const FiltersBox = styled.div`
	display: flex;
	flex-direction: column-reverse;
	gap: 20px;
	width: 100%;

	margin-bottom: 20px;
	padding-inline: 30px;
	@media screen and (min-width: 764px) {
		flex-direction: row-reverse;
		justify-content: space-around;
	}
`;

export const SortCustomBtn = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-start;
	gap: 10px;

	/* width: 100%; */
	position: relative;

	font-size: 18px;
`;

export const SortingBtn = styled.button`
	color: ${palette.textSub};
	background-color: ${palette.bgMain};
	z-index: 3;

	/* position: absolute; */
	top: 0;

	width: 200px;
	height: 50px;
`;

type SortListProps = {
	h?: boolean;
};

export const SortList = styled.ul<SortListProps>`
	display: ${props => (props.h ? 'flex' : 'none')};
	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: auto;

	position: absolute;
	z-index: 3;

	background-color: ${palette.bgMain};
	color: ${palette.textSub};
`;

export const SortItem = styled.li`
	width: auto;
`;

export const ButtonSort = styled.button`
	width: 200px;
	padding: 5px 10px;
`;

type ItemOptTypes = {
	index: number;
	h: boolean;
};

export const ItemOpt = styled.label<ItemOptTypes>`
	display: ${props => (props.h ? 'flex' : 'none')};
	justify-content: flex-start;
	align-items: center;

	width: 200px;
	height: 50px;

	padding: 10px 20px;

	font-size: 16px;

	background-color: ${palette.bgMain};
	color: ${palette.textSub};

	position: absolute;
	top: ${props => `${(props.index + 1) * 50}px`};
	cursor: pointer;

	z-index: 3;
`;

export const InputRadio = styled.input`
	display: none;
`;

// custom slider

export const CustomSliderBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	max-width: 100%;
	gap: 10px;
	height: 50px;

	background-color: ${palette.bgMain};

	padding: 10px;
	border-radius: 10px;

	& input[type='number']::-webkit-outer-spin-button,
	& input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	@media screen and (min-width: 764px) {
		width: 600px;
	}
`;

export const NumbersLine = styled.div`
	display: flex;
	background-color: ${palette.bgMain};
	height: 20px;
	align-items: center;
	justify-content: space-between;
`;

export const SliderBar = styled.div`
	position: relative;

	height: 3px;
	border-radius: 5px;

	width: 100%;

	background-color: ${palette.bgSub};
`;

type ProgressBarTypes = {
	positionLeft: number;
	positionRight: number;
};
export const ProgressBar = styled.div<ProgressBarTypes>`
	position: absolute;
	height: 100%;
	background-color: ${palette.accent};
	width: ${props =>
		`${100 - props.positionLeft - (100 - props.positionRight)}%`};
	left: ${props => `${props.positionLeft}%`};
`;

export const NumbersSlider = styled.label`
	display: flex;
	/* gap: 10px; */
	/* height: 100%; */
	align-items: center;
`;

export const FieldInput = styled.input`
	height: 20px;
	width: 50px;

	text-align: center;
	font-size: 14px;

	appearance: none;

	border: none;

	background-color: ${palette.bgMain};
	color: ${palette.textSub};
`;

export const TextSpan = styled.span`
	font-size: 16px;
`;

export const RangeBox = styled.div`
	position: relative;

	& input {
		position: absolute;
		height: 3px;
		width: 100%;
		appearance: none;
		background: none;
		pointer-events: none;
	}

	& input[type='range']::-webkit-slider-thumb {
		height: 15px;
		width: 10px;
		border-radius: 10px;
		pointer-events: auto;
		appearance: none;
		background-color: ${palette.accent};
	}
`;

type RangeInputTypes = {
	position?: number;
};

export const RangeInputMin = styled.input<RangeInputTypes>`
	&::-webkit-slider-thumb {
		transform: translateX(0%);
	}
`;

export const RangeInputMax = styled.input<RangeInputTypes>`
	&::-webkit-slider-thumb {
		transform: translateX(10%);
	}
`;

export const EmptyTovarList = styled.div`
	color: ${palette.textSub};
	background-color: ${palette.bgMain};
	height: 200px;
	width: 100%;
	font-size: 30px;
	text-align: center;

	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 768px) {
		grid-column-start: 1;
		grid-column-end: 4;
	}
`;
