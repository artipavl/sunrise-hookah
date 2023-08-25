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
