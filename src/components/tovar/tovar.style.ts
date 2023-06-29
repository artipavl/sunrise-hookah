import styled from 'styled-components';

export const TovarBox = styled.div`
  width: 100%;
  height: 100%;

  :hover,
  :focus {
    & #Upper {
      bottom: 0;
    }
  }
`;

export const TovarImageBox = styled.div`
  width: 100%;
  height: 75%;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TovarImageBoxUpper = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;
  left: 0;
  bottom: -30%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  color: #000;

  transition: bottom 225ms linear;
`;

export const TovarInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25%;
  justify-content: space-between;
  padding-block: 3%;
  color: #fff;
`;
export const TovarInformationAvailability = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  color: #000;
  background-color: #fff;
`;
