import styled from 'styled-components';

const RedButton = styled.div`
  display: flex;
  align-items: center;
  background-color: #B40404;
  border-radius: 8px;
  width: 92px;
  height: 32px;
  font-size: 16px;
  font-weight: normal;
  margin: 0 auto;
  color: white;
`;

const GreenButton = styled(RedButton)`
  background-color: green;
`;

const RedLight = styled.div`
  background-color: #FE2E2E;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin: 0 16px 0 16px;
`;

const GreenLight = styled(RedLight)`
  background-color: #58FA58;
`;

export default {RedButton, GreenButton, RedLight, GreenLight}