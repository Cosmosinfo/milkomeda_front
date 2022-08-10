/*eslint-disable */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './views/MainPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* exact는 path 속성에 넣은 경로값이 정확히 URL의 경로값과 일치할 때만 렌더링 */}
        <Route path="/" exact={true} element={<MainPage />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
