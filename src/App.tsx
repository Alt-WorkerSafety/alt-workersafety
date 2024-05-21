import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Button from './components/Button';
import Box from './components/Box';
//import { getWorkerDetails } from './api/getWorkerDetails';
import { getWorkers } from './api/getWorkers';
import S from './styles/AppStyles';

function App() {
  interface Workers {
    id: number;
    name: string;
    birth: string;
    pn: string;
    district: string | null;
    isFalling: boolean | null;
    isSafe: boolean | null;
  }

  const [workers, setWorkers] = useState<Workers[][]>([]);

  useEffect(() => {
      fetchWorkers();

      const interval = setInterval(fetchWorkers, 3000);  // 3초마다 업데이트

      return () => clearInterval(interval);
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

  // 작업자 1, 2 분리할 경우 (현재 사용 X)
  // interface Worker {
  //   name: string;
  //   birth: string;
  //   pn: string;
  //   district: string;
  //   isFalling: boolean;
  //   isSafe: boolean;
  // }

  
  // const [worker1, setWorker1] = useState<Worker[] | null>(null);
  // const [worker2, setWorker2] = useState<Worker[] | null>(null);

  // useEffect(() => {
  //     fetchWorkersDetails();

  //     const interval = setInterval(fetchWorkersDetails, 3000);  // 3초마다 업데이트

  //     return () => clearInterval(interval);
  // }, []);

  // const fetchWorkersDetails = () => {
  //   Promise.all([
  //       getWorkerDetails(1),
  //       getWorkerDetails(2)
  //   ]).then((responses) => {
  //     const statusCodes = responses.map(response => response.status);

  //     if (statusCodes.every(code => code >= 200 && code < 300)) {
  //       const workersData = responses.map(response => response.data);
  //       setWorker1(workersData[0]);
  //       setWorker2(workersData[1]);
  //     } else {
  //       throw new Error('WorkerDetail: Network response was not ok!');
  //     }  
  //     });
  // };

  // 임시
  console.log('Workers : ', workers);
  if (Array.isArray(workers[0])) {
      console.log('worker1 raspi: ', workers[0][1].birth);
      console.log('worker1 raspi: ', workers[0][1].name);
  } else {
      console.log('No workers available.');
  }
  

  const [isModalOpen, setModalOpen] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(true);
  }
 
  const district: {[key: string]: { x: number, y: number }} = {
    'A': { x: 302, y: 152 },
    'B': { x: 342, y: 152 },
    'C': { x: 382, y: 152 },
    'D': { x: 422, y: 152 },
    'E': { x: 462, y: 152 },
    'F': { x: 502, y: 152 },
    'G': { x: 542, y: 152 },
    'H': { x: 582, y: 152 },
    'I': { x: 622, y: 152 },
    'J': { x: 662, y: 152 },
  };
  
  //const { x1, y1 } = district[workers[0]? workers[0][2].district: 'J'];

  return (
    <>
    <S.RowWrapper>
      <Header />
        <S.ColumnWrapper>
          <S.TitleText>Dashboard</S.TitleText>
          <S.ListWrapper>
            <S.WorkerList>
              <S.WorkerInfoTitle>
                <S.WorkerInfo>조끼번호</S.WorkerInfo>
                <S.WorkerInfo>이름</S.WorkerInfo>
                <S.WorkerInfo>생년월일</S.WorkerInfo>
                <S.WorkerInfo>전화번호</S.WorkerInfo>
                <S.WorkerInfo>안전고리</S.WorkerInfo>
                <S.WorkerInfo>낙상여부</S.WorkerInfo>
              </S.WorkerInfoTitle>
               
              {workers.length > 0 ? (
                workers.map((worker, index) => {
                  return (
                    <>
                    <S.WorkerInfoWrapper>
                    <React.Fragment key={index + 1}>
                        <S.WorkerInfo>{index + 1}</S.WorkerInfo> 
                        <S.WorkerInfo>{worker[1].name || ''}</S.WorkerInfo> 
                        <S.WorkerInfo>{worker[1].birth || ''}</S.WorkerInfo>
                        <S.WorkerInfo>{worker[1].pn || ''}</S.WorkerInfo>
                        <S.WorkerInfo>
                          <Button type="ring" value={worker[4].isSafe || null} ></Button>
                        </S.WorkerInfo>
                        <S.WorkerInfo>
                          <Button type="fall" value={worker[3].isFalling || null}></Button>
                        </S.WorkerInfo>
                      </React.Fragment>
                    </S.WorkerInfoWrapper>
                    </>
                  );
                })
              ): (
                Array.from({ length: 2 }).map((_, index) => (
                  <S.WorkerInfoWrapper>
                  <React.Fragment key={index}>
                    <S.WorkerInfo>{index + 1}</S.WorkerInfo>
                    <S.WorkerInfo></S.WorkerInfo>
                    <S.WorkerInfo></S.WorkerInfo>
                    <S.WorkerInfo></S.WorkerInfo>
                    <S.WorkerInfo>
                      <Button type="ring" value={null}></Button>
                    </S.WorkerInfo>
                    <S.WorkerInfo>
                      <Button type="fall" value={null}></Button>
                    </S.WorkerInfo>
                  </React.Fragment>
                  </S.WorkerInfoWrapper>
                ))
              )
            }
            </S.WorkerList>
          </S.ListWrapper>
          <S.RowWrapper>
            <S.FloorPlanWrapper>
            <S.FloorPlan>
                {/* <S.Point x={302} y={152}/> */}
                {/* <S.Point x={x} y={y} /> */}
                {/* {(workers && workers[3].isFalling) ? (
                  <>
                    <Modal isOpened={isModalOpen} onClose={handleCloseModal} content={`${worker1[2].district}구역에서 낙상 사고가 감지되었습니다.`}></Modal>
                    
                  </>
                ) : (workers && workers[3].isFalling) ? (
                  <>
                    <Modal isOpened={isModalOpen} onClose={handleCloseModal} content={`${worker2[2].district}구역에서 낙상 사고가 감지되었습니다.`}></Modal>
                  </>
                ): <></> } */}
              </S.FloorPlan>
              </S.FloorPlanWrapper>
              <S.StatusWrapper>
                  Device
                  <S.RowWrapper>
                    <Box index={1} status={true} />
                    <Box index={2} status={false} />
                  </S.RowWrapper>
              </S.StatusWrapper> 
            </S.RowWrapper>
          </S.ColumnWrapper>   
      </S.RowWrapper>
    </>
    
  );
}

export default App;
