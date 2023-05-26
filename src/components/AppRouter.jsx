import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from '../pages/Posts';
import { privateRoutes, publicRoutes } from "../router";
import { Context } from '../App';
import Auth from '../pages/Auth';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    user.isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            element={<route.element />}
            path={route.path}
            key={route.path}
          />
        )}
        <Route path='/' element={<Posts />} />
        <Route path="/*" element={<Posts />} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            element={<route.element />}
            path={route.path}
            key={route.path}
          />
        )}
        <Route path="/" element={<Auth />} />
        <Route path="/*" element={<Auth />} />
      </Routes>
  );
});

export default AppRouter;