import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 7vh;
  /* background-color: #1f1f1f; */
  background: linear-gradient(-10deg, #1f1f1f, #1f1f1f, #1f1f1ff1, #1f1f1fe1, #1f1f1f, #1f1f1f, #1f1f1f);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
      0% {
          background-position: 0% 30%;
      }
      50% {
          background-position: 60% 20%;
      }
      100% {
          background-position: 0% 50%;
      }
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 10px;
  height: 7vh;
`
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  div {
    margin-left: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
  }
  h3 {
    color: #fff;
  }
`
export const HeaderLink = styled(Link)`
  color: ${props => props.$isActive ? '#9758a6' : '#fff'};
  border-bottom: ${props => props.$isActive ? '2px solid #9758a6' : 'none'};
  text-decoration: none;
  font-size: 14px;
  transition: color 200ms;
  &:hover {
    color: #9758a6;
  }
`
export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  h3 {
    color: #fff;
    margin-left: 12px;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  p {
    color: #fff;
    font-weight: 300;
    span {
      font-weight: 700;
      color: #9758a6
    }
  }
`
export const LinkLogOut = styled.button`
  color: #e48241ff;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
  &:hover {
    color: #bb3719ff;
    cursor: pointer;
  }
`
export const CartHeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  text-decoration: none;
`
export const HeaderCartLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #e48241ff;
  }
`