import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBox = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const MenuBatton = styled.button`
  width: 40px;
  height: 40px;
`;

export const ShoppingCart = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

type NavProps = {
  open: boolean;
};

export const Nav = styled.nav<NavProps>`
  position: absolute;
  top: 0;
  left: ${props => (props.open ? 0 : '-100%')};
  min-height: 100vh;
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-left: 30%;
  background-color: #000000;
  min-height: 100vh;
  padding-top: 80px;
  padding-left: 30px;
`;

export const NavListItem = styled.li`
  color: #fff;
`;

export const NavLinkItem = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  :hover,
  :focus {
    color: red;
  }
`;

export const DropMenu = styled.div``;

export const DropMenuButton = styled.div<NavProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;

  ${props =>
    props.open &&
    `& > svg {
    transform: rotate(180deg);
  }`}
`;

export const DropMenuList = styled.ul<NavProps>`
  display: none;
  gap: 10px;
  flex-direction: column;
  padding-top: 10px;

  ${props => props.open && ' display: flex;'}
`;
