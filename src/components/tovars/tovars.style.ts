import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavUl = styled.ul`
    display: flex;
    gap: 31px;
    width: fit-content;

    padding-inline: 15px;

    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 10px 30px 0px rgba(17, 38, 146, 0.05);

`;

export const UlItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  :not(:last-child):after { 
    content: ' ';
    display: inline-block;
    position: absolute;
    right: -15px;
    top: 15%;
    width: 1px;
    height: 70%;
    background-color: #e9ecef;
  }

`;

export const Link = styled(NavLink)`
  padding: 21px 25px;
  text-transform: uppercase;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;

  color: #232D42;

  :hover, :focus, &.active {
    color: red;
  }
`;