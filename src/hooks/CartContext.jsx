import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext({});

export const CartProvider = ({childern}) => {
  // Armazena os produtos dentro do Carrinho
  const [cartProducts, setCartProducts] = useState([])
  // Adiciona um novo item ao Carrinho
  const putProductInCart = (product) => {

  }
  // Limpa o Carrinho
  const clearCart = () => {

  }
  // Deleta um produto do Carrinho
  const deleteProduct = (product) => {

  }
  // Adiciona o número de um mesmo produto
  const increaseProduct = (productId) => {

  }
  // Decresce a quantidade de um produto do carrinho
  const decreaseProduct = (productId) => {

  }
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increaseProduct,
        decreaseProduct }} >
      {children}
    </CartContext.Provider>
  )
}
export const useCart = () => {
  // Contexto do Carrinho
  const context = useContext(CartContext)
  // Teste se vazio
  if (!context) {
    throw new Error('useCart must be used with a Context')
  }
  return context
}