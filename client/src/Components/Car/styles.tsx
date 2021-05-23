import styled from 'styled-components'

export const CarContainer = styled.div `
  width: 330px;
  height: 220px;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .4);
  cursor: pointer;
  background: #BFC9CA;
`;

//background: ${ props => (props.color ? '#FFFFFF' : '#1C2833')}

export const MainCarContainer = styled.div `
  height: 75%;
  align-items:center;
  justify-content:center;
`;

export const Gear = styled.img `
  width: 75px;
  opacity: 0.8;
`;

export const CarImage = styled.img `
  width: 85%;
  height: 140px;
  bottom: ${ props => (props.color ? '70px' : '0') };
  padding: 10px 5px 5px 5px;
  display:block;
  margin:auto;
  position: relative;
  opacity: ${ props => (props.color ? 0.4 : 1) };
  cursor: pointer;
`;

export const CarName = styled.p `
  height: 15%;
  margin: auto  0 auto 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const CarData = styled.div `
  width: 330px;
  height: 20%;
  display: flex; 
  box-sizing: border-box;
  background: #2E4053;
`;

export const DescriptionContainer = styled.div `
  width: 80%;
  transition: ease-in-out 250ms;
  padding-right: 10px;
  box-sizing: border-box;
`;

export const CarDescription = styled.p `
  margin: auto  0 auto 20px;
  font-size: 16px;
  color: #FFFFFF;
`;

export const CarDate = styled.p `
  margin: auto  0 auto 20px;
  font-size: 12px;
  color: #FFFFFF;
`;

export const KMContainer = styled.div `
  width: 20%;
  display: flex; 
  background: #000000;
  align-items:center;
  justify-content:center;
`;

export const CarKM = styled.p `
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
`;