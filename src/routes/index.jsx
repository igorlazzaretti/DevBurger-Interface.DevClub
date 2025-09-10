import { createBrowserRouter } from "react-router-dom";

import { Login, Register, Home, Menu, Cart, Checkout, CompletePayment } from '../containers'
import { Header } from '../components'


export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
            <Header />
            <Home />
            </>
        )
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />
    },
    {
        path: '/cardapio',
        element: <Menu />
    },
    {
        path: '/carrinho',
        element: <Cart />
    },
    {
        path: '/checkout',
        element: <Checkout />
    },
    {
        path: '/complete',
        element: <CompletePayment />
    }
]);