import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/home/home';
import Product from './pages/product/product';
import styled from 'styled-components';
import Admin from './pages/admin/admin';
import AdminPanel from './pages/adminPanel/adminPanel';

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flasks" element={<Product title="Колби" />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
