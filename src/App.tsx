import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import * as turf from '@turf/turf';
import { getWorkerDetails } from './api/getWorkerDetails';
import { getWorkers } from './api/getWorkers';
import S from './styles/AppStyles';

function App() {
  const [workers, setWorkers] = useState([]);
  
  useEffect(() => {
    getWorkers()
      .then(response => {
        setWorkers(response.data);
      });
  }, []);

  const [worker1, setWorker1] = useState(null);
    const [worker2, setWorker2] = useState(null);

    useEffect(() => {
        const fetchWorkers = () => {
            Promise.all([
                getWorkerDetails(0),
                getWorkerDetails(1)
            ]).then((responses) => {
                setWorker1(responses[0].data);
                setWorker2(responses[1].data);
            });
        };

        fetchWorkers();

        const interval = setInterval(fetchWorkers, 3000);  // 3초마다 업데이트

        return () => clearInterval(interval);
    }, []);

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
      <S.Wrapper>
        {activeTab === 2 ? (
          <S.FloorPlan2F>
            <S.Point x={xRatio(205)} y={yRatio(185)} />
            {true ? ( // 수정 필요
              <>
                <Modal isOpened={isModalOpen} onClose={handleCloseModal} content={`${section}구역에서 낙상 사고가 발생하였습니다.`}></Modal>
              </>
            ) : <></>}
            <S.TabWrapper>
              <S.TabButton active={true} onClick={() => handleTabClick(2)}>
                2F
              </S.TabButton>
              <S.TabButton active={false} onClick={() => handleTabClick(4)}>
                4F
              </S.TabButton>
            </S.TabWrapper>
          </S.FloorPlan2F>
        ) : activeTab === 4 ? (
          <S.FloorPlan4F>
            {/* <Point x={pointRatio(1385)} y={pointRatio(685)} />
            <Point x={pointRatio(1090)} y={pointRatio(495)} /> */}
            <S.TabWrapper>
              <S.TabButton active={false} onClick={() => handleTabClick(2)}>
                2F
              </S.TabButton>
              <S.TabButton active={true} onClick={() => handleTabClick(4)}>
                4F
              </S.TabButton>
            </S.TabWrapper>
          </S.FloorPlan4F>
        ): <></>}
        
        <S.ListWrapper>
          전체 현황
          <S.Monitoring>
            <S.Content>작업중인 인원<S.CurrentNumber>{workers.length}/2</S.CurrentNumber></S.Content>
            <S.Content>안전고리 체결<S.CurrentNumber>2/2</S.CurrentNumber></S.Content>
            <S.Content>낙상사고<S.CurrentNumber>0/2</S.CurrentNumber></S.Content>
          </S.Monitoring>
          작업자 현황
          <S.WorkerList>
            <S.Worker>
              <S.WorkerInfo>이름</S.WorkerInfo>
              <S.WorkerInfo>생년월일</S.WorkerInfo>
              <S.WorkerInfo>직종</S.WorkerInfo>
            </S.Worker>
            {/* 임시 */}
            <S.Worker>
              <S.WorkerInfo>{'코코넛로쉐'}</S.WorkerInfo> 
              <S.WorkerInfo>{'2023.02.07'}</S.WorkerInfo>
              <S.WorkerInfo>{'비계공'}</S.WorkerInfo>  
            </S.Worker>
            {workers.map((worker) => { // 나중에 수정 필요
              return (
                <S.Worker>
                  <S.WorkerInfo>{'worker.name'}</S.WorkerInfo> 
                  <S.WorkerInfo>{'worker.birth'}</S.WorkerInfo>
                  <S.WorkerInfo>{'worker.type'}</S.WorkerInfo>  
                </S.Worker>
              );
            })}
          </S.WorkerList>
        </S.ListWrapper>    
      </S.Wrapper>
      
    </>
  );
}

export default App;
