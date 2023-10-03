import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NoPage from "./pages/NoPage";
import BlogDetail from './pages/Blog-detail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />}/>
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
