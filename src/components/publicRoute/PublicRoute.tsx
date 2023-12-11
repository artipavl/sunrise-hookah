import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from '../../redux/auth/authSelectors';
import { useAppSelector } from '../../hooks';

type PublicRouteProps = {
	redirectTo: string;
	children: JSX.Element;
};

const PublicRoute: FC<PublicRouteProps> = ({
	// component: Component,
	redirectTo = '/',
	children: Component,
}) => {
	const isLogin = useAppSelector(selectIsLogin);

	return isLogin ? <Navigate to={redirectTo} replace /> : Component;
};

export default PublicRoute;
