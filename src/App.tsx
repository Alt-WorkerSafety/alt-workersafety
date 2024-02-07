import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ML_2F from './images/ML_2F.jpg';
import ML_2F_Grid from './images/ML_2F_Grid.jpg';
import ML_4F from './images/ML_4F.png';
import person from './images/person.png';
import risk_person from './images/risk_person.png';
import Modal from './components/Modal';
import Button from './components/Button';
import * as turf from '@turf/turf';

interface PointProps {
  x: number;
  y: number;
}

interface TabProps {
  active: boolean;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FloorPlan2F = styled.div`
  position: sticky;
  width: 100%;
  /* height: 732.75px; */
  background-image: url(${ML_2F});
  background-size: contain;
  background-repeat: no-repeat;
`;

const FloorPlan4F = styled(FloorPlan2F)`
  background-image: url(${ML_4F});
`

const ListWrapper = styled.div`
  width: 30%;
  padding: 30px 18px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WorkerList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #535353;
  color: white;
  padding: 16px 12px;
  margin-top: 20px;
  height: 500px;
  box-shadow: 5px 3px #333333;
`;

const Worker = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
`;

const WorkerInfo = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: normal;
`;

const Point = styled.div<PointProps>`
  position: absolute;
  width: 56px;
  height: 56px;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  background-image: url(${person});
  background-size: contain;
  background-repeat: no-repeat;
`
const FallingPoint = styled(Point)`
  background-image: url(${risk_person});
`

const Monitoring = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 50px 0;
  padding: 10px 0;
  border-radius: 10px;
  background-color: #535353;
  color: white;
  box-shadow: 5px 3px #333333;
  
`
const Content = styled.div`
  width: 100%;
  align-items: center;
  padding: 10px 0;
  text-align: center;
  font-size: 18px;
`

const CurrentNumber = styled.div`
  color: #a0c9ff;
  font-size: 24px;
`

const TabWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  margin-left: auto;
  margin-top: 18px;
  width: 320px;
`;

const TabButton = styled.button<TabProps>`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? '#747474' : '#ccc')};
  color: ${(props) => (props.active ? '#fff' : '#747474')};
  border: none;
  outline: none;
  cursor: pointer;
  width: 80%;
`;

function App() {
  const [worker, setWorker] = useState(0);
  const [safetyBelt, setSafetyBelt] = useState(0);
  const [falling, setFalling] = useState(1);
  
  const [isModalOpen, setModalOpen] = useState(true);
  const [section, setSection] = useState("A");

  const [activeTab, setActiveTab] = useState<number>(2);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  }

  const xRatio = (x: number) : number => {
    return x - 28; // x - Point 넓이
  }

  const yRatio = (x: number) : number => {
    return x - 56; // x - Point 넓이
  }
  
let point = turf.point([xRatio(247), yRatio(84)]);

let polygonA = turf.polygon([[[246, 62], [572, 396], [572, 686], [572, 728], [460, 727], [460, 686], [49, 260], [128, 177], [87, 131], [117, 97], [130, 109], [185, 59], [214, 89], [246, 62]]]);
let polygonB = turf.polygon([[[573, 396], [1024, 396], [1024, 686], [573, 686], [573, 396]]]);
let polygonC = turf.polygon([[[1025, 396], [1392, 396], [1392, 686], [1155, 686], [1155, 763], [1025, 763], [1025, 686], [1025, 396]]]);

if (turf.booleanPointInPolygon(point, polygonA)) {
    console.log('The point is in region A');
} else if (turf.booleanPointInPolygon(point, polygonB)) {
    console.log('The point is in region B');
} else if (turf.booleanPointInPolygon(point, polygonC)) {
    console.log('The point is in region C');
} else {
    console.log('The point is outside the regions');
}

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <Header />
      <Wrapper>
        {activeTab === 2 ? (
          <FloorPlan2F>
            <Point x={xRatio(205)} y={yRatio(185)} />
            {falling ? (
              <>
                {/* <FallingPoint x={xRatio(661)} y={yRatio(764)} /> */}
                <Modal isOpened={isModalOpen} onClose={handleCloseModal} content={`${section}구역에서 낙상 사고가 발생하였습니다.`}></Modal>
              </>
            ) : <></>}
            <TabWrapper>
              <TabButton active={true} onClick={() => handleTabClick(2)}>
                2F
              </TabButton>
              <TabButton active={false} onClick={() => handleTabClick(4)}>
                4F
              </TabButton>
            </TabWrapper>
          </FloorPlan2F>
        ) : activeTab === 4 ? (
          <FloorPlan4F>
            {/* <Point x={pointRatio(1385)} y={pointRatio(685)} />
            <Point x={pointRatio(1090)} y={pointRatio(495)} /> */}
            <TabWrapper>
              <TabButton active={false} onClick={() => handleTabClick(2)}>
                2F
              </TabButton>
              <TabButton active={true} onClick={() => handleTabClick(4)}>
                4F
              </TabButton>
            </TabWrapper>
          </FloorPlan4F>
        ): <></>}
        
        <ListWrapper>
          전체 현황
          <Monitoring>
            <Content>작업중인 인원<CurrentNumber>{worker}/2</CurrentNumber></Content>
            <Content>안전고리 체결<CurrentNumber>{safetyBelt}/2</CurrentNumber></Content>
            <Content>낙상사고<CurrentNumber>{falling}/2</CurrentNumber></Content>
          </Monitoring>
          작업자 현황
          <WorkerList>
            <Worker>
              <WorkerInfo>이름</WorkerInfo>
              <WorkerInfo>생년월일</WorkerInfo>
              <WorkerInfo>직종</WorkerInfo>
              <WorkerInfo>안전고리</WorkerInfo>
              <WorkerInfo>낙상감지</WorkerInfo>
            </Worker>
            <Worker>
              <WorkerInfo>작업자 1</WorkerInfo>
              <WorkerInfo>1999.03.04</WorkerInfo>
              <WorkerInfo>비계공</WorkerInfo>
              <Button safebelt={true}>착용</Button>
              <Button falling={false}>낙상</Button>
            </Worker>
            <Worker>
              <WorkerInfo>작업자 2</WorkerInfo>
              <WorkerInfo>2002.08.08</WorkerInfo>
              <WorkerInfo>비계공</WorkerInfo>
              <Button safebelt={false}>착용</Button>
              <Button falling={false}>낙상</Button>
            </Worker>
          </WorkerList>
        </ListWrapper>
        
      </Wrapper>
      
    </>
  );
}

export default App;
