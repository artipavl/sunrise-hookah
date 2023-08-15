import React, { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import AdminHeader from '../../components/adminHeader/adminHeader';
import AdminPanelOutlet from '../../components/adminPanelOutlet/adminPanelOutlet';

export const AdminPanelBox = styled.div`
  display: flex;
  background-color: #ffffff;
`;

type AdminPanelProps = {};

const AdminPanel: FC<AdminPanelProps> = props => {
  return (
    <AdminPanelBox>
      <AdminHeader />
      <main
        style={{
          width: '100%',
          padding: '30px 60px',
          marginLeft: '225px',
          minHeight: '100vh',
        }}
      >
        <AdminPanelOutlet>
          <Outlet />
        </AdminPanelOutlet>
      </main>
    </AdminPanelBox>
  );
};

export default AdminPanel;
