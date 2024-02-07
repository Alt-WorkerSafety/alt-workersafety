import styled from 'styled-components';
import ML_2F from '../images/ML_2F.jpg';
import ML_2F_Grid from '../images/ML_2F_Grid.jpg';
import ML_4F from '../images/ML_4F.png';
import person from '../images/person.png';
import risk_person from '../images/risk_person.png';

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

export default {Wrapper, FloorPlan2F, FloorPlan4F, ListWrapper, WorkerList, Worker, WorkerInfo, Point, FallingPoint, Monitoring, Content, CurrentNumber, TabWrapper, TabButton}