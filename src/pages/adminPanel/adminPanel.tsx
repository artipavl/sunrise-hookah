import React, { FC } from 'react';
import AdminHeader from '../../components/adminHeader/adminHeader';
import { Outlet } from 'react-router-dom';
import AdminPanelRouter from '../../components/adminPanelRouter/adminPanelRouter';

type AdminPanelProps = {};

const AdminPanel: FC<AdminPanelProps> = props => {
  return (
    <>
      <AdminHeader />
      <main>main</main>
      <AdminPanelRouter>
        <Outlet></Outlet>
      </AdminPanelRouter>
    </>
  );
};

export default AdminPanel;
