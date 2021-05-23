import styled from 'styled-components'

export const MainContainer = styled.div `
  width: 100vw !important;
  max-width: 1550px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -20px 60px rgba(0, 0, 0, 1); 
  background: #FFFFFF;
  box-sizing: border-box;

  @media (min-width: 920px) {
    justify-content: space-between;
  }
`;

export const Header = styled.div `
  height: 8%;
  width: 100%;
  display: flex;
  justify-content: left;
  padding-left: 30px;
  background: #000000;
  box-shadow: 0 -20px 60px rgba(0, 0, 0, 1);  
`;

export const TextHeader = styled.h1` 
  color: #FFFFFF;
  padding: 0;
  font-size: 24px;
  font-family:  'Lato', sans-serif;
`;

export const CarsContainer = styled.div `
  height: 92%;
  width: 100%;
  padding: 20px 0;
  overflow-x: hidden;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;