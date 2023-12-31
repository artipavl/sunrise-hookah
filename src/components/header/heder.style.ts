import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import Logo from '../logo/logo';

export const HeaderLogo = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	@media screen and (min-width: 1440px) {
		position: unset;
	}
`;

export const HeaderSection = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99999;
	/* margin-bottom: -60px; */

	width: 100%;
	background-color: #000000;
	padding-top: 10px;
	padding-bottom: 10px;
	@media screen and (min-width: 1440px) {
		padding: 0;
		/* margin-bottom: -80px; */
	}
`;
export const HeaderBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	max-width: 1440px;
	margin: auto;
	padding-left: 15px;
	padding-right: 15px;
`;

export const MenuBatton = styled.button`
	width: 40px;
	height: 40px;
	z-index: 2;

	@media screen and (min-width: 1440px) {
		display: none;
	}
`;

export const ShoppingCart = styled.button`
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;

	@media screen and (min-width: 1440px) {
		width: 80px;
		height: 80px;
	}
`;

export const CartSvgBox = styled.div`
	position: relative;
`;

export const Quantity = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: red;

	font-size: 10px;
	right: 5px;
	top: 5px;
	transform: translate(+50%, -50%);
`;

type NavProps = {
	open: boolean;
};

export const Nav = styled.nav<NavProps>`
	transition: top 750ms ease;
	@media screen and (max-width: 1439px) {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		/* top: 100%; */
		top: ${props => (props.open ? '60px' : '-100vh')};
		/* left: ${props => (props.open ? '0' : '-120%')}; */
		left: 0;
		min-height: 100vh;
		width: 100%;
		background-color: #000000;
		z-index: 1;
	}
`;

export const NavList = styled.ul`
	display: flex;
	gap: 10px;

	@media screen and (max-width: 1439px) {
		font-size: 36px;
		flex-direction: column;
		width: min-content;
		/* margin-left: auto; */

		min-height: 100vh;
		padding-top: 80px;
		/* padding-left: 30px; */
	}
`;

export const NavListItem = styled.li`
	color: #fff;
`;

export const NavLinkItem = styled(NavLink)`
	padding-top: 10px;
	padding-bottom: 10px;
	color: #fff;
	text-transform: uppercase;
	:hover,
	:focus {
		color: red;
	}

	@media screen and (min-width: 1440px) {
		padding: 30px;
	}
`;

export const DropMenu = styled.div`
	position: relative;

	@media screen and (min-width: 1440px) {
		:hover,
		:focus {
			& > ul {
				opacity: 1;
				bottom: -250px;
			}
			& svg {
				transform: rotate(180deg);
			}
		}
	}
`;

export const DropMenuButton = styled.div<NavProps>`
	display: flex;
	gap: 10px;
	align-items: center;
	color: #fff;
	padding-top: 10px;
	padding-bottom: 10px;

	:hover,
	:focus {
		color: red;
	}

	@media screen and (max-width: 1439px) {
		${props =>
			props.open &&
			`& > svg {
    transform: rotate(180deg);
  }`}
	}

	@media screen and (min-width: 1440px) {
		padding: 30px;
	}
`;

export const DropMenuList = styled.ul<NavProps>`
	display: none;
	gap: 10px;
	flex-direction: column;
	padding-top: 10px;
	z-index: 1;

	${props => props.open && ' display: flex;'}

	@media screen and (min-width: 1440px) {
		display: flex;
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: #000;
		width: 100%;
		opacity: 0;
		gap: 0;
	}
`;

export const LanguageList = styled.ul`
	display: flex;
	align-items: center;
	gap: 10px;
	z-index: 2;
`;

interface LanguageButtonProps {
	active?: boolean;
}

export const LanguageButton = styled.button<LanguageButtonProps>`
	color: ${props => (props.active ? 'red' : '#fff')};

	:hover,
	:focus {
		color: red;
	}
`;

export const FlexBox = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
