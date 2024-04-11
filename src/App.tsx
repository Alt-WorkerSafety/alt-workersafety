import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Button from './components/Button';
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

  const [worker1, setWorker1] = useState<Worker[] | null>(null);
  const [worker2, setWorker2] = useState<Worker[] | null>(null);

  

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
    console.log('worker1 위치: ', worker1[2].district)
    console.log('worker1 낙상여부: ', worker1[3].isFalling)
    console.log('worker1 안전고리여부: ', worker1[4].isSafe)
  }
  if (worker2) {
    console.log('worker2 위치: ', worker2[2].district)
    console.log('worker2 낙상여부: ', worker2[3].isFalling)
    console.log('worker2 안전고리여부: ', worker2[4].isSafe)
  }
  

  const [isModalOpen, setModalOpen] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(true);
  }

  return (
    <>
    <S.Layout>
      <Header />
        <S.Wrapper>
          <S.TitleText>Dashboard</S.TitleText>
          <S.ListWrapper>
            <S.WorkerList>
              <S.WorkerInfo>이름</S.WorkerInfo>
              <S.WorkerInfo>생년월일</S.WorkerInfo>
              <S.WorkerInfo>전화번호</S.WorkerInfo>
              <S.WorkerInfo>안전고리</S.WorkerInfo>
              <S.WorkerInfo>낙상여부</S.WorkerInfo>   
              {workers.map((worker) => {
                return (
                  <>
                    <S.WorkerInfo>{worker.name}</S.WorkerInfo> 
                    <S.WorkerInfo>{worker.birth}</S.WorkerInfo>
                    <S.WorkerInfo>{worker.pn}</S.WorkerInfo>
                  </>
                );
              })}
            </S.WorkerList>
          </S.ListWrapper>
          <S.Layout>
            <S.FloorPlan>
                {(worker1 && worker1[3].isFalling) ? (
                  <>
                    <Modal isOpened={isModalOpen} onClose={handleCloseModal} content={`${worker1[2].district}구역에서 낙상 사고가 감지되었습니다.`}></Modal>
                  </>
                ) : (worker2 && worker2[3].isFalling) ? (
                  <>
                    <Modal isOpened={isModalOpen} onClose={handleCloseModal} content={`${worker2[2].district}구역에서 낙상 사고가 감지되었습니다.`}></Modal>
                  </>
                ): <></> }
              </S.FloorPlan> 
            </S.Layout>
          </S.Wrapper>   
      </S.Layout>
    </>
    
  );
}

export default App;
