import styled from 'styled-components';
import BannerHamburguer from '../../assets/banner-menu.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('${Background}');
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
  gap: 20px;
`;
export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 415px;
  background: url('${BannerHamburguer}') no-repeat;
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;
  position: relative;

  h1 {
    font-size: 80px;
    font-family: 'Road Rage', sans-serif;
    color: #fff;
    line-height: 65px;
    position: absolute;
    right: 17%;
    top: 20%;
    text-align: center;
  }
  span {
    display: block;
    font-family: 'Poppins', cursive;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }
`;
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 50px 0;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #9758A6;
  font-size: 52px;
  font-family: Road Rage, sans-serif;
  height: 52px;
  font-weight: 900;
  border-radius: 5px;
  padding: 0px 20px;
  line-height: 20px;
  border: none;
  // O botão tem uma borda inferior que muda de cor quando a categoria está ativa
  border-bottom: ${(props) => props.$isActiveCategory && `5px solid   #61A120`};
  background: ${(props) => props.theme.purpleBackgroundlinear};
  background: ${(props) =>
    props.$isActiveCategory
      ? 'linear-gradient(180deg, rgb(116, 68, 128), rgb(79, 38, 88))'
      : `${(props) => props.theme.purpleBackgroundlinear}`};
  transition: 0.2s ease-in-out;
  &:hover {
    scale: calc(1.03);
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0px;
`;

export const ReturnButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.orange};
  font-size: 24px;
  height: 52px;
  font-weight: 900;
  border-radius: 20px;
  padding: 10px 20px;
  line-height: 20px;
  border: none;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background: ${(props) => props.theme.purpleBackgroundlinear};
  transition: 0.5s ease-in-out;
  &:hover {
    scale: calc(1.07);
    border-bottom: 5px solid ${(props) => props.theme.orange};
    background: linear-gradient(180deg, #61a120, rgb(71, 118, 24));
  }
`;
