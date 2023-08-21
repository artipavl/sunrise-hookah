import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUser } from '../../redux/auth/authSelectors';
import { Header, NavList, Link, Nav } from './adminHeader.style';
import { logOut } from '../../redux/auth/authOperations';
// import Logo from '../logo/logo';

type AdminHeaderProps = {};

const AdminHeader: FC<AdminHeaderProps> = props => {
  const Admin = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <Header>
      {/* <Logo /> */}
      <div>
        <span style={{ marginRight: '20px' }}>{Admin.name}</span>
        <button
          onClick={() => {
            console.log('asdd');
            dispatch(logOut());
          }}
        >
          вихід
        </button>
      </div>

      <Nav>
        <NavList>
          <li>
            <Link to={'tovars'}>Товари за категоріями</Link>
          </li>
          <li>
            <Link to={'newtovar'}>Додати товар</Link>
          </li>
          <li>
            <Link to={'admins'}>Адміністратори</Link>
          </li>
          <li>
            <Link to={'feedback'}>Зворотній зв'язок</Link>
          </li>
          <li>
            <Link to={'orders'}>Замовлення</Link>
          </li>
        </NavList>
      </Nav>
    </Header>
  );
};

export default AdminHeader;
