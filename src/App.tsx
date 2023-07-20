import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/home/home';
import Product from './pages/product/product';
import styled from 'styled-components';
import Admin from './pages/admin/admin';
import AdminPanel from './pages/adminPanel/adminPanel';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchTovarsTypes } from './redux/types/typesOperations';
import { selectTypesIsLoading } from './redux/types/slice';

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
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
