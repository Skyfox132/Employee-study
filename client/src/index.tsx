import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Paths } from './paths';
import { Login } from "./pages/login"
import { Register } from "./pages/register/register"
import './index.css';
import { ConfigProvider, theme } from 'antd';
const router = createBrowserRouter([
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
])




const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{
          algorithm: theme.darkAlgorithm
        }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

