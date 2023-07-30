import React, { FC } from 'react';
import {
  Column,
  Columns,
  Rows,
  Table,
  Tbody,
  Tfoot,
  TfootButton,
  TfootTh,
  TfootTr,
  Thead,
} from './dataTables.style';

type DataTablesProps = {
  rows: string[];
  columns: any[];
};

const DataTables: FC<DataTablesProps> = ({ rows, columns }) => {
  return (
    <Table cellSpacing={0}>
      <Thead>
        <tr>
          {rows.map(row => (
            <Rows key={row}>{row}</Rows>
          ))}
        </tr>
      </Thead>
      <Tbody>
        {columns.map((column, index) => (
          <Columns key={index}>
            {rows.map((row, rowIndex) => (
              <Column key={`${index}-${rowIndex}`}>{column[row]}</Column>
            ))}
          </Columns>
        ))}
      </Tbody>
      <Tfoot>
        <TfootTr>
          <TfootTh>
            <TfootButton type="button">Previous</TfootButton>
          </TfootTh>
          <TfootTh colSpan={rows.length - 2}>
            <span>Page 1 of 10</span>
          </TfootTh>
          <TfootTh>
            <TfootButton type="button">Next</TfootButton>
          </TfootTh>
        </TfootTr>
      </Tfoot>
    </Table>
  );
};

export default DataTables;
