import styled from 'styled-components';

type SectionProps = {
  bgc?: string;
};

export const Section = styled.section<SectionProps>`
  scroll-snap-align: start;
  width: 100%;

  background-color: ${props => props.bgc};

  padding-top: 60px;
  padding-bottom: 20px;

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;
