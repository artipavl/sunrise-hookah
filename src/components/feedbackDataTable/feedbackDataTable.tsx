import React, { FC, useState, useMemo } from 'react';
import {
  Column,
  Columns,
  DeleteButton,
  Rows,
  RowsBox,
  RowsBoxCenter,
  Table,
  Tbody,
  Tfoot,
  TfootButton,
  TfootTh,
  TfootTr,
  Thead,
} from './feedbackDataTable.style';
import Feedback from '../../Types/feedback';
import { AiFillCaretDown, AiFillCaretUp, AiOutlineRest } from 'react-icons/ai';
import { delFeedback } from '../../redux/feedback/feedbackOperations';
import { useAppDispatch } from '../../hooks';

type FeedbackDataTableProps = {
  data: any[];
};

const FeedbackDataTable: FC<FeedbackDataTableProps> = ({ data }) => {
  const [p, setP] = useState(1);
  const [total] = useState(() => data.length);
  const [items] = useState(5);
  const [key, setKey] = useState<keyof Feedback>('date');
  const [filter, setFilter] = useState(true);

  const rows = ['Абонент', 'Телефон', 'Повідомлення', 'Час', 'delete'];
  const rowsType: (keyof Feedback)[] = [
    'firstName',
    'phone',
    'message',
    'date',
  ];
  const dispatch = useAppDispatch();
  const sortData = useMemo(() => {
    const D = [...data];
    if (filter) {
      return D.sort((a, b) => a[key] - b[key]);
    }
    return D.sort((a, b) => b[key] - a[key]);
  }, [data, filter, key]);

  return (
    <Table cellSpacing={0}>
      <Thead>
        <tr>
          {rows.map((row, index) => {
            if (row === 'delete') {
              return (
                <Rows active={false} key={row}>
                  <RowsBoxCenter>
                    <AiOutlineRest />
                  </RowsBoxCenter>
                </Rows>
              );
            }
            return (
              <Rows
                key={row}
                active={key === rowsType[index]}
                onClick={() => {
                  if (key === rowsType[index]) {
                    setFilter(filter => !filter);
                  } else {
                    setKey(rowsType[index]);
                    setFilter(true);
                  }
                }}
              >
                <RowsBox>
                  {row}{' '}
                  {key === rowsType[index] && filter ? (
                    <AiFillCaretUp />
                  ) : (
                    <AiFillCaretDown />
                  )}
                </RowsBox>
              </Rows>
            );
          })}
        </tr>
      </Thead>
      <Tbody>
        {sortData.slice((p - 1) * items, items * p).map((column, index) => (
          <Columns key={index}>
            <Column>
              <p>{column.firstName + ' ' + column.lastName}</p>
              <p>{column.email}</p>
            </Column>
            <Column>{column.phone}</Column>
            <Column>{column.message}</Column>
            <Column>{`${new Date(column.date).toLocaleString('en-GB', {
              timeZone: 'UTC',
            })}`}</Column>
            <Column>
              <DeleteButton onClick={() => dispatch(delFeedback(column.id))}>
                <AiOutlineRest />
              </DeleteButton>
            </Column>
          </Columns>
        ))}
      </Tbody>
      <Tfoot>
        <TfootTr>
          <TfootTh colSpan={5}>
            <TfootButton
              type="button"
              disabled={p === 1}
              onClick={() => setP(p => p - 1)}
            >
              Previous
            </TfootButton>

            <span>
              Page {p} of {Math.ceil(total / items)}
            </span>

            <TfootButton
              type="button"
              disabled={p === Math.ceil(total / items)}
              onClick={() => setP(p => p + 1)}
            >
              Next
            </TfootButton>
          </TfootTh>
        </TfootTr>
      </Tfoot>
    </Table>
  );
};

export default FeedbackDataTable;
