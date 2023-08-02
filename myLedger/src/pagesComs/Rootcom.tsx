import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Addition from './Addition';
import MemoPage from './MemoPage';
import Search from './Search';

const RootCom = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Routes는 경로를 설정하는 부분. 실제로 redirect하는 부분은 Link 또는 navigate로 */}
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/MemoPage" element={<MemoPage />} />
          <Route path="/Addition" element={<Addition />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RootCom;
