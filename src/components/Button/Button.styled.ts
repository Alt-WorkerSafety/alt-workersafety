import styled from 'styled-components';

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

export default {RedButton, GreenButton, GrayButton, RedLight, GreenLight, GrayLight, BtnTitle}