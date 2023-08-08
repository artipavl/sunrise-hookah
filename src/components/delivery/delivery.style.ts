import styled from 'styled-components';

export const Input = styled.input``;

export const Lable = styled.label`
  position: relative;
`;

export const List = styled.ul`
  position: absolute;
  padding-block: 5px;
  border-radius: 3px;
  width: max-content;
  background-color: #fff;
`;
export const Item = styled.li`
  padding-inline: 5px;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #fafafa;
  }
`;

export const WarehousesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  color: #fff;
`;

export const WarehousesItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover,
  :focus {
    color: red;
  }

  ::before {
    content: ' ';
    display: block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
