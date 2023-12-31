import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.05),
    0px 4px 8px -2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  overflow: hidden;
`;
interface RowsProps {
  delete: boolean;
}
export const Rows = styled.th<RowsProps>`
  padding-block: 16px;
  color: #8a92a6;
  font-size: 12px;
  font-style: normal;
  font-weight: 450;
  line-height: 175%;
  text-transform: capitalize;
  text-align: ${props => (props.delete ? 'centr' : 'start')};

  width: calc(100% - 25px);
  padding-left: 25px;

  :last-child {
    width: calc(100% - 25px);
    padding-right: 25px;
  }
`;

export const Thead = styled.thead`
  background: #f9fafb;
`;
export const Tbody = styled.tbody`
  background: #fff;
`;

export const Columns = styled.tr``;

export const Column = styled.td`
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
  padding: 12px;
`;

export const TfootTh = styled.th`
  padding-block: 12px;
  :first-child {
    width: calc(100% - 25px);
    padding-left: 25px;
    text-align: start;
  }
  :last-child {
    width: calc(100% - 25px);
    padding-right: 25px;
    text-align: end;
  }
`;

export const TfootButton = styled.button`
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #d0d5dd);
  background: var(--white, #fff);
  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;
export const DeleteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: auto;

  :first-child {
    margin-right: 5px;
  }

  :hover,
  :focus {
    background-color: #f9fafb;
  }
`;

export const ModalBox = styled.div`
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  background: #fff;
  padding: 32px;
  box-shadow: 0px 10px 30px 0px rgba(17, 38, 146, 0.05);
`;

export const ModalDeleteTitle = styled.h1`
  color: #000;
  font-family: Product Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 91.5%;
  margin-bottom: 20px;
`;

export const ModalDeleteButtonsBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ModalDeleteButton = styled.button`
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  background: #fff;

  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  :hover,
  :focus {
    background-color: #eaecf0;
  }
`;
