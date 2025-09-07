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
        element: (
            <>
            <Header />
            <Menu />
            </>
        )
    },
    {
        path: '/carrinho',
        element: (
            <>
            <Header />
            <Cart />
            </>
        )
    },
    {
        path: '/checkout',
        element: (
            <>
            <Header />
            <Checkout />
            </>
        )
    },
    {
        path: '/complete',
        element: (
            <>
            <Header />
            <CompletePayment />
            </>
        )
    }
]);