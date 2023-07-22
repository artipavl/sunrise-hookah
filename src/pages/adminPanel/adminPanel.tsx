import React, { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import AdminHeader from '../../components/adminHeader/adminHeader';
import AdminPanelOutlet from '../../components/adminPanelOutlet/adminPanelOutlet';

export const AdminPanelBox = styled.div`
  display: flex;
`;

type AdminPanelProps = {};

const AdminPanel: FC<AdminPanelProps> = props => {
  return (
    <AdminPanelBox>
      <AdminHeader />
      <main>
        <AdminPanelOutlet>
          <Outlet />
        </AdminPanelOutlet>
      </main>
    </AdminPanelBox>
  );
};

export default AdminPanel;
