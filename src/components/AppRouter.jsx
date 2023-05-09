import React, { useContext } from 'react';
import { Routes, Route, } from 'react-router-dom';
import Posts from '../pages/Posts';
import Negative from '../pages/Negative';
import { privateRoutes, publicRoutes } from "../router";
import Login from '../pages/Login';
import { AuthorizationContext } from '../context';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
  const { isAuthorization, isLoading } = useContext(AuthorizationContext);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    isAuthorization
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            element={<route.element />}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Route path='/' element={<Posts />} />
        <Route path="/*" element={<Negative to="/error" replace />} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            element={<route.element />}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Route path="/*" element={<Login />} />
      </Routes>
  );
};

export default AppRouter;