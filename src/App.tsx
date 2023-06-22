import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/home/home';
import Heder from './components/header/heder';
import SocialLinks from './components/socialLinks/socialLinks';

function App() {
  return (
    <>
      <Heder />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SocialLinks />
    </>
  );
}

export default App;
