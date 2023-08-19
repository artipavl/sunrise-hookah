import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchAdmins, remove } from '../../redux/adminList/adminsOperations';
import { selectAdmins } from '../../redux/adminList/slice';
import DataTables from '../../components/dataTables/dataTables';
import AdminRegistrationForm from '../../components/adminRegistrationForm/adminRegistrationForm';

type AdminPanelProps = {};

const AdminList: FC<AdminPanelProps> = props => {
  const admins = useAppSelector(selectAdmins);
  const dispatch = useAppDispatch();
  // console.log(admins);
  useEffect(() => {
    dispatch(fetchAdmins());
  }, [dispatch]);

  return (
    <div>
      <DataTables
        rowsTitle={['логін', 'пошта', 'роль', 'видалити']}
        rows={['name', 'email', 'admin', 'delete']}
        columns={admins}
        remove={(id: string) => {
          dispatch(remove(id));
        }}
      />
      <AdminRegistrationForm />
    </div>
  );
};

export default AdminList;
