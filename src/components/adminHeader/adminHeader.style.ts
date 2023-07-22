import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 255px;
  height: 100vh;
  padding-top: 40px;
  background-color: #363740;

  color: #fff;
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

  color: #a4a6b3;
  font-family: Circular Std;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  letter-spacing: 0.2px;

  &.active {
    color: #dde2ff;
    background-color: #9fa2b4;
  }
`;
