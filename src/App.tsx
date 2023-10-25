import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from './hooks';

import { fetchTovarsTypes } from './redux/types/typesOperations';
import { selectTypesIsLoading } from './redux/types/slice';

import Product from './pages/product/product';
import Admin from './pages/admin/admin';
import AdminPanel from './pages/adminPanel/adminPanel';
import Checkout from './pages/checkout/checkout';
import TovarPage from './pages/tovarPage/tovarPage';
import AdminList from './pages/adminList/adminList';
import Orders from './pages/orders/Orders';
import OrderForId from './components/orderForId/orderForId';
import PrivatRoute from './components/privatRoute';
import PublicRoute from './components/publicRoute';
import Tovars from './components/tovars/tovars';
import TovarsByType from './components/tovarsByType/tovarsByType';
import NewTovar from './components/newTovar/newTovar';
import Feedback from './components/feedback/feedback';
import Loader from './reuseСomponents/loader/loader';
import { fetchAllTovars } from './redux/tovars/tovarsOperations';
import { selectTovarsLoading } from './redux/tovars/slice';

const Home = lazy(() => import('./pages/home/home'));

export const Wrapper = styled.div`

`;

function App() {
	const AppDispatch = useAppDispatch();

	useEffect(() => {
		AppDispatch(fetchTovarsTypes());
		AppDispatch(fetchAllTovars());
	}, [AppDispatch]);

	const LoadingTypes = useAppSelector(selectTypesIsLoading);
	const LoadingTovars = useAppSelector(selectTovarsLoading);

	if (!LoadingTypes && !LoadingTovars) {
		return <Loader opacity={1} />;
	}

	return (
		<Wrapper>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<Loader opacity={1} />}>
							<Home />
						</Suspense>
					}
				/>
				<Route
					path="/checkout"
					element={
						<Suspense fallback={<Loader opacity={1} />}>
							<Checkout />
						</Suspense>
					}
				/>
				<Route
					path="/tovarPage/:id"
					element={
						<Suspense fallback={<Loader opacity={1} />}>
							<TovarPage />
						</Suspense>
					}
				/>
				<Route
					path="/tovar/:id"
					element={
						<Suspense fallback={<Loader opacity={1} />}>
							<Product />
						</Suspense>
					}
				/>
				<Route
					path="/admin"
					element={
						<PublicRoute redirectTo="/adminpanel">
							<Admin />
						</PublicRoute>
					}
				/>

				<Route
					path="/adminpanel"
					element={
						<PrivatRoute redirectTo="/">
							<AdminPanel />
						</PrivatRoute>
					}
				>
					<Route index element={<Navigate to="tovars"></Navigate>} />
					<Route path="tovars" element={<Tovars />}>
						{LoadingTypes && (
							<Route index element={<Navigate to={`all`}></Navigate>} />
						)}

						<Route path=":id" element={<TovarsByType />} />
					</Route>
					<Route path="newtovar" element={<NewTovar />} />
					<Route path="admins" element={<AdminList />} />
					<Route path="orders" element={<Orders />}>
						<Route index element={<Navigate to="all"></Navigate>} />
						<Route path=":id" element={<OrderForId />}></Route>
					</Route>
					<Route path="feedback" element={<Feedback />} />
				</Route>
			</Routes>
		</Wrapper>
	);
}

export default App;
