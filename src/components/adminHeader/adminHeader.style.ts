import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../theme.module';

export const Header = styled.header`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	width: 255px;
	height: 100vh;
	padding-top: 40px;
	background-color: ${palette.bgSub};

	color: ${palette.white};
`;
export const Nav = styled.nav`
	width: 100%;
`;
export const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Link = styled(NavLink)`
	width: 100%;
	padding: 20px 32px;

	color: ${palette.textMain};
	font-family: Circular Std;
	font-size: 16px;
	font-style: normal;
	font-weight: 450;
	line-height: normal;
	letter-spacing: 0.2px;

	&.active {
		color: ${palette.textSub};
		background-color: ${palette.bgSub};
	}
`;
