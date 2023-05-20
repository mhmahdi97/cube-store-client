import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthContextProvider from './providers/AuthContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
  <React.StrictMode>
    <AuthContextProvider>
        <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
  </div>
)
