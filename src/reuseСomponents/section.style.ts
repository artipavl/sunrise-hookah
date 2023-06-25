import styled from 'styled-components';

type SectionProps = {
  bgc?: string;
};

export const Section = styled.section<SectionProps>`
  width: 100%;

  background-color: ${props => props.bgc};

  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
