import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MainSite from './pages/MainSite/MainSite';
import AlmaProject from './pages/AlmaProject/AlmaProject'
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import ErrorPage from "./components/ErrorPage/error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSite />,
  },
  {
    path: "Alma",
    element: <AlmaProject />,
  },
  {
    path: "FCR",
    element: <AlmaProject />,
  },
  {
    path: "*",
    element: <MainSite />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
