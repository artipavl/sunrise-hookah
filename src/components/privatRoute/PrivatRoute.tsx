import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import {
	selectIsLoggedIn,
	selectIsLogin,
} from '../../redux/auth/authSelectors';
import { useAppSelector } from '../../hooks';

type PrivatRouteProps = {
	redirectTo: string;
	children: JSX.Element;
};

const PrivatRoute: FC<PrivatRouteProps> = ({
	redirectTo = '/',
	children: Component,
}) => {
	const isLogin = useAppSelector(selectIsLogin);
	const isLoading = useAppSelector(selectIsLoggedIn);
	const shouldRedirect = !isLogin && !isLoading;
	return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivatRoute;
