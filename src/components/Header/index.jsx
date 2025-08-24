import { HeaderCartLink, HeaderLink, Navigation, Options, Profile, LinkLogOut, CartHeaderSection, Content, Container } from "./styles";
import { ShoppingCartSimpleIcon, UserIcon } from "@phosphor-icons/react";
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <img src={Logo} alt="Logo DevBurguer" style={{ height: 40 }} />
            <HeaderLink>Home</HeaderLink>
            <h3>|</h3>
            <HeaderLink>Cardápio</HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserIcon size={22} weight="bold" color="#fff"/>
            <div>
              <p>Olá, <span>Igor</span></p>
              <LinkLogOut   onClick={() => navigate('/')}>Sair</LinkLogOut>
            </div>
          </Profile>
          <CartHeaderSection>
            <ShoppingCartSimpleIcon size={24} weight="bold" color="#fff"/>
            <HeaderCartLink   onClick={() => navigate('/')}> Carrinho </HeaderCartLink>
          </CartHeaderSection>
        </Options>
      </Content>
    </Container>
  )
}