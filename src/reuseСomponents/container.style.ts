import styled from 'styled-components';

type ContainerProps = {
  flex?: 'center';
};

export const Container = styled.div<ContainerProps>`
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1440px;
  height: 100%;

  ${props =>
    props.flex === 'center' &&
    `  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`}

  @media screen and (min-width: 1440px) {
    margin: auto;
    width: 1440px;
  }
`;
