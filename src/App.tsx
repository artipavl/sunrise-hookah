import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/home/home';
import Heder from './components/header/heder';

function App() {
  return (
    <>
      <Heder />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
