import styled from 'styled-components';

export const Title = styled.h1`
  color: #fff;

  line-height: normal;
  text-align: center;
  font-size: 45px;
  margin-bottom: 30px;
`;

export const TovarList = styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const TovarItem = styled.li`
  min-width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    min-width: calc((100% - 20px) / 2);
    max-width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    min-width: calc((100% - 60px) / 4);
    max-width: calc((100% - 60px) / 4);
  }
`;
