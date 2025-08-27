import { HeaderCartLink, HeaderLink, Navigation, Options, Profile, LinkLogOut, CartHeaderSection, Content, Container } from "./styles";
import { ShoppingCartSimpleIcon, UserIcon } from "@phosphor-icons/react";
import Logo from '../../assets/logo.svg'
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

export function Header() {
  const navigate = useNavigate(); // Hook para navegação programática
  const { pathname } = useResolvedPath(); // Mostra o caminho atual
  const { logout, userInfo } = useUser();
  function logoutUser() {
    logout(); // Chama a função de logout do hook useUser
    navigate('/login'); // Redireciona para a página inicial após logout
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <img src={Logo} alt="Logo DevBurguer" style={{ height: 47}} />
            <HeaderLink
              to="/"
              $isActive={pathname === '/'} >Home</HeaderLink>
            <h3>|</h3>
            <HeaderLink
              to="/cardapio"
              $isActive={pathname === '/cardapio'}
            >Cardápio</HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserIcon size={22} weight="bold" color="#fff"/>
            <div>
              <p>Olá, <span>{userInfo?.name || 'Desconhecido'}</span></p>
              <LinkLogOut   onClick={logoutUser}>Sair</LinkLogOut>
            </div>
          </Profile>
          <CartHeaderSection>
            <ShoppingCartSimpleIcon size={24} weight="bold" color="#fff"/>
            <HeaderCartLink to='/carrinho'> Carrinho </HeaderCartLink>
          </CartHeaderSection>
        </Options>
      </Content>
    </Container>
  )
}