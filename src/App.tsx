import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/home/home';
import Heder from './components/header/heder';
import SocialLinks from './components/socialLinks/socialLinks';
import Footer from './components/footer/footer';
import Product from './pages/product/product';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Wrapper>
      <Heder />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flasks" element={<Product title="Колби" />} />
      </Routes>
      <SocialLinks />
      <Footer />
    </Wrapper>
  );
}

export default App;
