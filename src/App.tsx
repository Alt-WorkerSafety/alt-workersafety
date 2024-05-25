import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Button from './components/Button';
import Box from './components/Box';
import Point from './components/Point';
//import { getWorkerDetails } from './api/getWorkerDetails';
import { getWorkers } from './api/getWorkers';
import { deleteWorker } from './api/deleteWorkers';
import S from './styles/AppStyles';
import deleteicon from './images/delete-icon.png';

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
  

  const handleDelete = (workerId: number) => {
    deleteWorker(workerId)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          // 성공적으로 삭제되었다면, 클라이언트 상태도 업데이트
          setWorkers(prevWorkers => prevWorkers.filter(worker => workers[workerId][0].id !== workerId));
        } else {
          throw new Error('Delete: Network response was not ok!');
        }
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  };  

  const [isModalOpen, setModalOpen] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }
 
  const district1: {[key: string]: { x1: number, y1: number }} = {
    'A': { x1: 302, y1: 152 },
    'B': { x1: 342, y1: 152 },
    'C': { x1: 382, y1: 152 },
    'D': { x1: 422, y1: 152 },
    'E': { x1: 462, y1: 152 },
    'F': { x1: 502, y1: 152 },
    'G': { x1: 542, y1: 152 },
    'H': { x1: 582, y1: 152 },
    'I': { x1: 622, y1: 152 },
    'J': { x1: 662, y1: 152 },
    'None' : {x1: 999, y1: 999},
  };
  
  const district2: {[key: string]: { x2: number, y2: number }} = {
    'A': { x2: 302, y2: 192 },
    'B': { x2: 342, y2: 192 },
    'C': { x2: 382, y2: 192 },
    'D': { x2: 422, y2: 192 },
    'E': { x2: 462, y2: 192 },
    'F': { x2: 502, y2: 192 },
    'G': { x2: 542, y2: 192 },
    'H': { x2: 582, y2: 192 },
    'I': { x2: 622, y2: 192 },
    'J': { x2: 662, y2: 192 },
    'None' : {x2: 999, y2: 999},
  };        

  let x1 = -999, y1 = 0, x2 = -999, y2 = 0;


  if (Array.isArray(workers[0])) {
    const districtKey = workers[0][2] && workers[0][2].district ? workers[0][2].district : 'None';
    if (district1[districtKey]) { // districtKey가 district 객체의 유효한 키인지 추가로 확인
        ({ x1, y1 } = district1[districtKey]);
   }
  }
  if (Array.isArray(workers[1])) {
    const districtKey = workers[1][2] && workers[1][2].district ? workers[1][2].district : 'None';
    if (district1[districtKey]) { // districtKey가 district 객체의 유효한 키인지 추가로 확인
        ({ x2, y2 } = district2[districtKey]);
    }
  }
  return (
    <>
    <S.RowWrapper>
      <Header />
        <S.ColumnWrapper>
          <S.TitleText>Dashboard</S.TitleText>
          <S.SubTitleText>작업자 정보</S.SubTitleText>
          <Button type='add' value={true} onclick={handleOpenModal}></Button>
          <S.ListWrapper>
            <S.WorkerList>
              <S.WorkerInfoTitle>
                <S.WorkerInfo>조끼번호</S.WorkerInfo>
                <S.WorkerInfo>이름</S.WorkerInfo>
                <S.WorkerInfo>생년월일</S.WorkerInfo>
                <S.WorkerInfo>전화번호</S.WorkerInfo>
                <S.WorkerInfo>안전고리</S.WorkerInfo>
                <S.WorkerInfo>낙상여부</S.WorkerInfo>
                <S.WorkerInfo>
                  <S.DeleteIcon active={false} src={deleteicon} />
                </S.WorkerInfo>
              </S.WorkerInfoTitle>
               
              {workers.length > 0 ? (
                workers.map((worker, index) => {
                  return (
                    <>
                    <S.WorkerInfoWrapper>
                    <React.Fragment key={index + 1}>
                        <S.WorkerInfo>{index + 1}</S.WorkerInfo> 
                        <S.WorkerInfo>{worker[1].name}</S.WorkerInfo> 
                        <S.WorkerInfo>{worker[1].birth}</S.WorkerInfo>
                        <S.WorkerInfo>{worker[1].pn}</S.WorkerInfo>
                        <S.WorkerInfo>
                          <Button type="ring" value={worker[4].isSafe} ></Button>
                        </S.WorkerInfo>
                        <S.WorkerInfo>
                          <Button type="fall" value={worker[3].isFalling}></Button>
                        </S.WorkerInfo>
                        <S.WorkerInfo>
                          <S.DeleteIcon active={true} src={deleteicon} onClick={() => handleDelete(index)} />
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
                    <S.WorkerInfo>
                          <S.DeleteIcon active={false} src={deleteicon} onClick={() => handleDelete(index)} />
                        </S.WorkerInfo>
                  </React.Fragment>
                  </S.WorkerInfoWrapper>
                ))
              )
            }
            </S.WorkerList>
          </S.ListWrapper>
          <S.RowWrapper>
          <S.ColumnWrapper>
          <S.SubTitleText>구역 정보</S.SubTitleText>
            <S.FloorPlanWrapper>
            <S.FloorPlan>
                {/* 작업자 구역 표시 */}
                {workers[0] ? <Point x={x1} y={y1} index={1} content={workers[0][1] ? workers[0][1].name : ''} /> : <></>}
                {workers[1] ? <Point x={x1} y={y1} index={2} content={workers[1][1] ? workers[1][1].name : ''} /> : <></>}
                
                {/* 작업자 추가 및 수정창 */}
                <Modal type='add' isOpened={isModalOpen} onClose={handleCloseModal} content={`작업자 정보 수정`}></Modal>
                {/* 낙상 사고 발생 시 알림창 */}
                {(workers[0] && workers[0][3].isFalling) ? (
                  <>
                    <Modal type='alarm' isOpened={isModalOpen} onClose={handleCloseModal} content={`${workers[0][2].district}구역에서 낙상 사고가 감지되었습니다.`}></Modal>
                    
                  </>
                ) : (workers[1] && workers[1][3].isFalling) ? (
                  <>
                    <Modal type='alarm' isOpened={isModalOpen} onClose={handleCloseModal} content={`${workers[1][2].district}구역에서 낙상 사고가 감지되었습니다.`}></Modal>
                  </>
                ): <></> }
              </S.FloorPlan>
              </S.FloorPlanWrapper>
              </S.ColumnWrapper>
              <S.ColumnWrapper>
                <S.SubTitleText>작업자 정보</S.SubTitleText>
                <S.StatusWrapper>
                    Device
                    <S.RowWrapper>
                      <Box index={1} status={workers[0] ? true: false} />
                      <Box index={2} status={workers[1] ? true: false} />
                    </S.RowWrapper>
                </S.StatusWrapper>
              </S.ColumnWrapper> 
            </S.RowWrapper>
          </S.ColumnWrapper>   
      </S.RowWrapper>
    </>
    
  );
}

export default App;
