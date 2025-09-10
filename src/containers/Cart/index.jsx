import Logo from '../../assets/logo.svg';
import { Footer, CartItems, CartResume, Header } from '../../components';
import { Banner, Container, Title,Content } from './styles';
import { useNavigate } from 'react-router-dom';

export function Cart() {
  const navigate = useNavigate();

  return (
    <>
    <Header/>
      <Container>
        <Banner>
          <img src={Logo} alt="Logo do DevBurguer"
            style={{ width: "180px" }}/>
        </Banner>
        <Title>Checkout - Pedido</Title>
        <Content>
          <CartItems/>
          <CartResume/>
        </Content>
      </Container>
    <Footer/>
  </>
  )
}