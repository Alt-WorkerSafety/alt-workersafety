import styled, {keyframes, css} from 'styled-components';

const blink = keyframes`
  0% {
    background-color: red;
  }
  50% {
    background-color: gray;
  }
  100% {
    background-color: red;
  }
`;

const RedButton = styled.div`
  display: flex;
  align-items: center;
  background-color: #B40404;
  border-radius: 8px;
  width: 110px;
  height: 32px;
  font-size: 16px;
  font-weight: 400;
  margin: 0 auto;
  color: white;
`;

const GreenButton = styled(RedButton)`
  background-color: green;
`;

const GrayButton = styled(RedButton)`
  background-color: gray;
`;

const ConfirmButton = styled(RedButton)<{confirmed: boolean}>`
  background-color: ${(props) => (props.confirmed ? 'green' : 'darkgray')};
  cursor: pointer;
  padding: 8px;
  width: 100px;
  text-align: center;
  justify-content: center;
  ${(props) =>
    props.confirmed
      ? css`
          background-color: green;
        `
      : css`
          background-color: red;
          animation: ${blink} 1s infinite;
        `};
`;

const AddButton = styled(RedButton)`
  width: 220px;
  height: 20px;
  padding: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  background-color: black;
  border-radius: 8px;
  color: white;
  margin-right: 20px;
  cursor: pointer;
  border: 3px solid black;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const AddIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

const RedLight = styled.div`
  background-color: #FE2E2E;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin: 0 8px;
`;

const GreenLight = styled(RedLight)`
  background-color: #58FA58;
`;

const GrayLight = styled(RedLight)`
  background-color: lightgray;
`;

const BtnTitle = styled.div`
  margin: auto;
`;

export default {RedButton, GreenButton, GrayButton, ConfirmButton, AddButton, AddIcon, RedLight, GreenLight, GrayLight, BtnTitle}