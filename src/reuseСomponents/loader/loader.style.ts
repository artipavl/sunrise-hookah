import styled from 'styled-components';

interface LoaderBoxProps {
	opacity: number;
}

export const LoaderBox = styled.div<LoaderBoxProps>`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 99999;

	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background-color: #000;
	opacity: ${props => props.opacity};
`;

export const LogiImg = styled.img`
	width: 320px;
	height: 320px;
`;
