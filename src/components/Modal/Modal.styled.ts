import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;
  width: 400px;
  height: 200px; 
  text-align: center;
  background-color: #f7f7f7;
  color: white;
  border: 2px solid gray;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.8);
  gap: 10px;
`;

const ContentWrapper = styled.div`
  font-size: 20px;
  color: black;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    color: black;
    width: 100px;
    border-radius: 10px;
    margin-top: 12px;
    cursor: pointer;
`;

const riskIcon = styled.img`
    width: 48px;
    height: 48px;
`;

export default { ModalBackground, ModalWrapper, ContentWrapper,  Button, riskIcon };