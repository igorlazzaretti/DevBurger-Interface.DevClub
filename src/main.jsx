import { Elements } from '@stripe/react-stripe-js'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import AppProvider from './hooks/'

import stripePromise from './config/stripeConfig'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise} >
        <RouterProvider router={router} />
        <GlobalStyles />
        <ToastContainer />
      </Elements>
    </AppProvider>
  </StrictMode>,
)
