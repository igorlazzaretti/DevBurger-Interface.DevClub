import styled from "styled-components";
import textureBanner from '../../assets/texture.svg';
import background from '../../assets/background.svg'
export const Container = styled.div`
  width: 100%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url(${background});
  background-size: cover;
  min-height: 50vh;
`
export const Banner = styled.div`
  background: url(${textureBanner});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 0px 0px 0px;
  height: 200px;
`
export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-top: 20px;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  color: #61A120;
  &::after {
    content: '';
    width: 56px;
    position: absolute;
    bottom: 0;
    height: 4px;
    background-color: #9758A6;
    left: calc(50% + -20px);
  }
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  gap: 20px;
  width: 100vw;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;

`