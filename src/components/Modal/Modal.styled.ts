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

const ModalWrapper1 = styled.div`
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

const ModalWrapper2 = styled(ModalWrapper1)`
  width: 400px;
  height: 500px; 
  padding: 20px;
`;

const ContentWrapper = styled.div`
  font-size: 20px;
  color: black;
  align-items: center;
  width: 100%;
  font-weight: bold;
`;

const ContentBox = styled(ContentWrapper)`
  font-size: 18px;
  padding: 12px;
  font-weight: bold;
`;

const Content = styled(ContentWrapper)`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
`;

const InputBox = styled.input`
  width: 200px;
  height: 25px;
  border: 1px solid gray;
	border-radius: 5px;
  outline: none;
  padding: 3px;
  &::placeholder{
		color: #black;
	}
	&:hover{
		border: 1px solid black;
	}
	&:focus{
		color: #363636;
		border: 1px solid blue;
	}
`;

const Button = styled.button`
    padding: 8px 16px;
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

export default { ModalBackground, ModalWrapper1, ModalWrapper2, ContentWrapper, ContentBox, Content, InputBox, Button, riskIcon };