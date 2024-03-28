import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import { getWorkerDetails } from './api/getWorkerDetails';
import { getWorkers } from './api/getWorkers';
import S from './styles/AppStyles';

function App() {
  interface Workers {
    name: string;
    birth: string;
    pn: string;
  }

  const [workers, setWorkers] = useState<Workers[]>([]);

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = () => {
    getWorkers()
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          setWorkers(response.data);
        } else {
          throw new Error('Workers: Network response was not ok!');
        }
      });
  }

  interface Worker {
    name: string;
    birth: string;
    pn: string;
    district: string;
    isFalling: boolean;
    isSafe: boolean;
  }

  const [worker1, setWorker1] = useState<Worker | null>(null);
  const [worker2, setWorker2] = useState<Worker | null>(null);

  

  useEffect(() => {
      fetchWorkersDetails();

      const interval = setInterval(fetchWorkersDetails, 3000);  // 3초마다 업데이트

      return () => clearInterval(interval);
  }, []);

  const fetchWorkersDetails = () => {
    Promise.all([
        getWorkerDetails(1),
        getWorkerDetails(2)
    ]).then((responses) => {
      const statusCodes = responses.map(response => response.status);

      if (statusCodes.every(code => code >= 200 && code < 300)) {
        const workersData = responses.map(response => response.data);
        setWorker1(workersData[0]);
        setWorker2(workersData[1]);
      } else {
        throw new Error('WorkerDetail: Network response was not ok!');
      }  
      });
  };

  // 임시
  if (worker1) {
    console.log('worker1 위치: ', worker1.district)
    console.log('worker1 낙상여부: ', worker1.isFalling)
    console.log('worker1 안전고리여부: ', worker1.isSafe)
  }
  

  const [isModalOpen, setModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<number>(2);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
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
            {true ? ( // 수정 필요
              <>
                <Modal isOpened={isModalOpen} onClose={handleCloseModal} content={`구역에서 낙상 사고가 발생하였습니다.`}></Modal>
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
              <S.WorkerInfo>전화번호호</S.WorkerInfo>
            </S.Worker>
            {workers.map((worker) => { // 나중에 수정 필요
              return (
                <S.Worker>
                  <S.WorkerInfo>{worker.name}</S.WorkerInfo> 
                  <S.WorkerInfo>{worker.birth}</S.WorkerInfo>
                  <S.WorkerInfo>{worker.pn}</S.WorkerInfo>  
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
