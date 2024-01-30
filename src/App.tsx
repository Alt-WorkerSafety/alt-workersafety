import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ML_2F from './images/ML_2F.png';
import Modal from './components/Modal';

interface PointProps {
  x: number;
  y: number;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  //align-items: center;
  flex-direction: column;
`;

const FloorPlan = styled.div`
  position: relative;
  width: 1737px;
  height: 977px;
  background-image: url(${ML_2F});
  background-size: cover;
`;

const Point = styled.div<PointProps>`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #6404ff;
  border-radius: 50%;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
`

const Monitoring = styled.div`
  width: 100%;
  height: 70px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
`
const Tab = styled.div`
  width: 100%;
  align-items: center;
  padding: 10px 0;
  text-align: center;
  font-size: 18px;
`

const CurrentNumber = styled.div`
  color: #00007a;
  font-size: 24px;
`

function App() {
  const [worker, setWorker] = useState(0);
  const [safetyBelt, setSafetyBelt] = useState(0);
  const [falling, setFalling] = useState(1);
  
  const [isModalOpen, setModalOpen] = useState(true);
  const [section, setSection] = useState("A");

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const pointRatio = (x: number) : number => {
    return x - 13.5;
  }

  return (
    <>
      <Header />
      <Monitoring>
        <Tab>작업중인 인원<CurrentNumber>{worker}/3</CurrentNumber></Tab>
        <Tab>안전고리 체결<CurrentNumber>{safetyBelt}/3</CurrentNumber></Tab>
        <Tab>낙상사고<CurrentNumber>{falling}/3</CurrentNumber></Tab>
      </Monitoring>
      <Wrapper>
        <FloorPlan>
          <Point x={pointRatio(840)} y={pointRatio(810)} />
          <Point x={pointRatio(1385)} y={pointRatio(685)} />
          <Point x={pointRatio(1090)} y={pointRatio(495)} />
        </FloorPlan>
        {falling ? (
          <Modal isOpened={isModalOpen} onClose={handleCloseModal} content={`${section}구역에서 낙상 사고가 발생하였습니다.`}></Modal>
        ) : <></>}
      </Wrapper>
    </>
  );
}

export default App;
