import styled from 'styled-components';
import palette from '../../theme.module';

export const Footerbox = styled.footer`
	position: relative;

	scroll-snap-align: start;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 30px;
	padding-bottom: 30px;
	padding-inline: 20px;
	color: ${palette.white};
	margin-top: auto;
`;
