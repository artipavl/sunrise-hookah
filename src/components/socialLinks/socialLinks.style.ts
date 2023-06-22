import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SocialLinksList = styled.ul`
  display: none;
  position: fixed;
  right: 0;
  top: 50%;
  background-color: #000;
  opacity: 0.7;
  @media screen and (min-width: 720px) {
    display: inline-block;
  }
`;

export const SocialLinkslink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

