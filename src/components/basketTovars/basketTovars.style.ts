import styled from 'styled-components';

export const BasketList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #fff;
  width: 100%;
`;

export const BasketItamBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const BasketItam = styled.li`
  
`;

export const BasketItamImage = styled.img`
  width: auto;
  height: 80px;
  margin-top: 5px;
`;

export const BasketItamInput = styled.input`
  width: 45px;
  margin: auto;
  margin-right: 20px;
`;

export const BasketItamInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 10px;
`;

export const BasketItamDelete = styled.button`
  /* opacity: 0;
  display: none;
  position: absolute;
  right: 0;
  top: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
