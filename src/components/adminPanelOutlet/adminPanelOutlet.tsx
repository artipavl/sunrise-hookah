import React, { FC } from 'react';
import { Box } from './adminPanelOutlet.style';

type AdminPanelRouterProps = {
	// children: JSX.Element;
	children: React.ReactNode;
};

const AdminPanelOutlet: FC<AdminPanelRouterProps> = ({
	children: Children,
}) => {
	return <Box>{Children}</Box>;
};

export default AdminPanelOutlet;
