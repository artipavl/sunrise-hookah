import styled from 'styled-components';

const colors = {
	mainBg: '#222',

	textGrey: '#dcdcdc',
	subGrey: '#686868',

	black: '#262626',
	subBlack: '#5a5a5a',

	yellow: '#ffd058',
};

type MainFilterProps = {
	h?: boolean; 
};

export const MainFilter = styled.div<MainFilterProps>`
	height: 100%;
	width: 100%;

	position: fixed;

	z-index: 3;

	background-color: ${colors.mainBg};
	color: ${colors.textGrey};


`;
