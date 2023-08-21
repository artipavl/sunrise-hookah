import React, { FC } from 'react';
import OrdersDataTable from '../../components/ordersDataTable/ordersDataTable';
import { Order } from '../../Types/order';

type OrdersProps = {};

const Orders: FC<OrdersProps> = props => {
  const Data: Order[] = [];
  return (
    <div>
      <p>Orders</p>
      <OrdersDataTable data={Data} />
    </div>
  );
};

export default Orders;
