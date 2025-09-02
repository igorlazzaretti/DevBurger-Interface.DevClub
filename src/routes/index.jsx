import { createBrowserRouter } from "react-router-dom";

import { Login, Register, Home, Menu, Cart } from '../containers'
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
    }
]);