import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1440px;

  min-height: calc(100vh - 20px);
  max-height: calc(100vh - 20px);

  @media screen and (min-width: 1440px) {
    /* padding: 0; */
    margin: auto;
    min-height: calc(100vh - 40px);
    max-height: calc(100vh - 40px);
  }
`;
