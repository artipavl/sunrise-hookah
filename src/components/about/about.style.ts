import styled from 'styled-components';

export const AboutTitle = styled.h2`
  text-align: center;
  font-size: 4vw;
  color: #fff;
  text-transform: uppercase;
`;

export const Aboutlist = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const AboutItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  max-width: 280px;

  @media screen and (min-width: 950px) {
    width: calc((100% - 40px) / 3);
  }
`;

export const AboutItemTitle = styled.h3`
  font-size: 18px;
  color: yellow;
  text-transform: uppercase;
`;
export const AboutItemText = styled.p`
  font-size: 16px;
  color: #fff;
  text-align: center;
`;
