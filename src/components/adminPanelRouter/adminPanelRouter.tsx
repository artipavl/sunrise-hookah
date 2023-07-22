import React, { FC } from 'react';
import { Nav, NavLink, NavList } from './adminPanelRouter.style';

type AdminPanelRouterProps = {
  // children: JSX.Element;
  children: React.ReactNode;
};

const AdminPanelRouter: FC<AdminPanelRouterProps> = ({
  children: Children,
}) => {
  return (
    <Nav>
      <NavList>
        <NavLink to={''}>1</NavLink>
        <NavLink to={'2'}>2</NavLink>
        <NavLink to={'3'}>3</NavLink>
      </NavList>

      {Children}
    </Nav>
  );
};

export default AdminPanelRouter;
