import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUser } from '../../redux/auth/authSelectors';
import { Header } from './adminHeader.style';
import { logOut } from '../../redux/auth/authOperations';

type AdminHeaderProps = {};

const AdminHeader: FC<AdminHeaderProps> = props => {
  const Admin = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <Header>
      <span>{Admin.name}</span>
      <button
        onClick={() => {
          console.log('asdd');
          dispatch(logOut());
        }}
      >
        вихід
      </button>
    </Header>
  );
};

export default AdminHeader;
