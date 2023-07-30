import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.05),
    0px 4px 8px -2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  overflow: hidden;
`;

interface RowsProps {
  active: boolean;
}

export const Rows = styled.th<RowsProps>`
  min-width: 0;
  padding-block: 16px;
  color: #8a92a6;
  font-size: 12px;
  font-style: normal;
  font-weight: 450;
  line-height: 175%;
  text-align: start;
  color: ${props => props.active && '#000'};

  width: calc(100% - 25px);
  padding-left: 25px;

  :last-child {
    width: calc(100% - 25px);
    padding-right: 25px;
  }

  :not(:last-child) {
    cursor: pointer;
  }
`;

export const RowsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const RowsBoxCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Thead = styled.thead`
  background: #f9fafb;
`;
export const Tbody = styled.tbody`
  background: #fff;
`;

export const Columns = styled.tr``;

export const Column = styled.td`
  min-width: 0;
  max-width: 200px;
  hyphens: auto;
  padding-block: 10px;
  border-block: 1px solid #eaecf0;

  width: calc(100% - 25px);
  padding-left: 25px;

  :last-child {
    width: calc(100% - 25px);
    padding-right: 25px;
  }
`;

export const Tfoot = styled.tfoot`
  width: 100%;
  padding-block: 12px;
  background: #fff;
`;
export const TfootTr = styled.tr`
  width: 100%;
`;

export const TfootTh = styled.th`
  position: relative;
  padding-block: 20px;

  /* :first-child {
    width: calc(100% - 25px);
    padding-left: 25px;
    text-align: start;
  }
  :last-child {
    width: calc(100% - 25px);
    padding-right: 25px;
    text-align: end;
  } */
`;

export const TfootButton = styled.button`
  position: absolute;
  top: 5px;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #d0d5dd);
  background: var(--white, #fff);
  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  :disabled {
    background-color: #eaecf0;
    cursor: default;
  }

  :first-child {
    left: 25px;
  }
  :last-child {
    right: 25px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;

  :hover,
  :focus {
    background-color: #f9fafb;
  }
`;
