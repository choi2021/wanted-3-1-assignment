import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Search from 'pages/search/Search';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import Theme from './styles/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Search />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
