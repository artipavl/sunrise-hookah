import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Product from './pages/product/product';
import styled from 'styled-components';
import Admin from './pages/admin/admin';
import AdminPanel from './pages/adminPanel/adminPanel';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchTovarsTypes } from './redux/types/typesOperations';
import { selectTypesIsLoading } from './redux/types/slice';
import PrivatRoute from './components/privatRoute';
import PublicRoute from './components/publicRoute';

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

function App() {
  const AppDispatch = useAppDispatch();

  useEffect(() => {
    AppDispatch(fetchTovarsTypes());
  }, [AppDispatch]);

  const Loading = useAppSelector(selectTypesIsLoading);

  if (!Loading) {
    return <p>loading...</p>;
  }

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tovar/:id" element={<Product />} />
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
          <Route
            path="tovars"
            element={<div style={{ color: '#fff' }}>1</div>}
          />
          <Route
            path="admins"
            element={<div style={{ color: '#fff' }}>2</div>}
          />
          <Route
            path="feedback"
            element={<div style={{ color: '#fff' }}>3</div>}
          />
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
