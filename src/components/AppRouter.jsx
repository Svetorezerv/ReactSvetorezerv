import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Negative from '../pages/Negative';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
    return (
        <Routes>
          <Route path='/about' element={<About />} />
          <Route exact path='/posts' element={<Posts />} />
          <Route exact path='/posts/:id' element={<PostIdPage />} />
          <Route path="/*" element={<Negative to="/error" replace />} />
        </Routes>
    );
};

export default AppRouter;