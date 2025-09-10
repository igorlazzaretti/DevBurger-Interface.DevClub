import { Elements } from "@stripe/react-stripe-js"
import { useLocation } from "react-router-dom"
import stripePromise from '../../config/stripeConfig'
import { CheckoutForm, Footer, Header } from '../../components'
import { Container } from "./styles"


export function Checkout() {
  const { state: {clientSecret} } = useLocation()
  if (!clientSecret) {
    return (
      <div>Erro, volte ao Carrinho e tente novamente.</div>
    )
  }
  return (
    <>
    <Header/>
    <Container>
    <Elements stripe={stripePromise } options={ {clientSecret }}>
      <CheckoutForm />
    </Elements>
    </Container>
    <Footer/>
    </>
  )
}