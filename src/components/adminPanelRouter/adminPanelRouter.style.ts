import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  margin-inline: 20px;
  background-color: #4b4b4b;
  border: 1px #181818 solid;
`;
export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px #181818 solid;
`;

export const NavLink = styled(Link)`
  padding: 10px;
  min-width: 100px;
  text-align: center;
`;
