import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home.jsx';
import QRCode from './components/QRCode.jsx';
import SignUp from './components/SignUp.jsx';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/qrcode/:qrCodeId',
        element: <QRCode />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>,
)
