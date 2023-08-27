import styled from 'styled-components';
import { Section } from '../../reuseСomponents/section.style';

const colors = {
	mainBg: '#222',

	textGrey: '#dcdcdc',
	subGrey: '#686868',

	black: '#262626',
	subBlack: '#5a5a5a',

	yellow: '#ffd058',
};

export const Title = styled.h1`
	color: ${colors.textGrey};

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
	display: block;
	position: relative;

	padding-top: 0;
`;

export const FiltersBox = styled.div`
	width: 100%;

	margin-bottom: 20px;
`;

export const SortCustomBtn = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-start;
	gap: 10px;

	width: 100%;
	position: relative;
`;

export const SortingBtn = styled.button`
	color: ${colors.textGrey};
	background-color: ${colors.mainBg};
	z-index: 3;

	/* position: absolute; */
	top: 0;

	width: 200px;
	height: 70px;
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

	background-color: ${colors.mainBg};
	color: ${colors.textGrey};
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
	height: 70px;

	padding: 10px 20px;

	font-size: 18px;

	background-color: ${colors.black};
	color: ${colors.textGrey};

	position: absolute;
	top: ${props => `${(props.index + 1) * 70}px`};

	z-index: 4;
`;

export const InputRadio = styled.input`
	display: none;
`;
