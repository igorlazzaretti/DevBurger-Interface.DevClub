import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext({});

export const CartProvider = ({children}) => {
  // Armazena os produtos dentro do Carrinho
  const [cartProducts, setCartProducts] = useState([])
  // Adiciona um novo item ao Carrinho
  const putProductInCart = (product) => {
    // Verificando se o produto já esta no carrinho
      // se produto ainda não foi adicionado retorna -1
    const cartIndex = cartProducts.findIndex( (prd) => prd.id === product.id)
    let newProductsInCart = []
    if (cartIndex >= 0) { // se é a primeira veze que adicionamos o produto ao carrinho
      newProductsInCart = cartProducts
      newProductsInCart[cartIndex].quantity = newProductsInCart[cartIndex].quantity + 1

      setCartProducts(newProductsInCart)
    } else {
      product.quantity = 1
      newProductsInCart = [...cartProducts, product]
      setCartProducts(newProductsInCart)
    }
  }
  //Use Efect para ver o Carrinho no console.log
  useEffect( () => {
    console.log(cartProducts)

  }, [cartProducts])


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