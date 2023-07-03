import styled from 'styled-components';

type ContainerProps = {
  flex?: 'center';
};

export const Container = styled.div<ContainerProps>`
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1440px;

  ${props =>
    props.flex === 'center' &&
    `  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`}

  min-height: calc(100vh - 80px);
  /* max-height: calc(100vh - 80px); */

  @media screen and (min-width: 1440px) {
    margin: auto;
    min-height: calc(100vh - 120px);
    /* max-height: calc(100vh - 120px); */
  }
`;
