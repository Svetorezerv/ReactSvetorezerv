// @ts-nocheck
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Posts from '../pages/Posts';
import { publicRoutes } from "../router";
// import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  // const { user } = useContext(Context);

  return (
    // user.isAuth
    //   ?
    //   <Routes>
    //     {privateRoutes.map(route =>
    //       <Route
    //         element={<route.element />}
    //         path={route.path}
    //         key={route.path}
    //       />
    //     )}
    //     <Route path='/' element={<Posts />} />
    //     <Route path="/*" element={<Posts />} />
    //   </Routes>
    //   :
    <Routes>
      {publicRoutes.map(route =>
        <Route
          element={<route.element />}
          path={route.path}
          key={route.path}
        />
      )}
      <Route index element={<Navigate to="/posts" />} />
      <Route path="/" element={<Posts />} />
      <Route path="*" element={<Posts />} />
    </Routes>
  );
});

export default AppRouter;