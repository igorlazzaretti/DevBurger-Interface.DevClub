import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 72px;
  background-color: #1f1f1f;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 10px;
  height: 72px;
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
export const HeaderLink = styled.p`
  color: #fff;
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
  color: #bb3719ff;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
`
export const CartHeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #fff;
`
export const HeaderCartLink = styled.p`
  &:hover {
    color: #e48241ff;
`