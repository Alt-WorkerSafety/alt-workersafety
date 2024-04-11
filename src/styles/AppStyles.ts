import styled from 'styled-components';
import ML from '../images/ML_district.png';
import person from '../images/person.png';
import risk_person from '../images/risk_person.png';

interface PointProps {
    x: number;
    y: number;
  }
  
  interface ButtonProps {
    active: boolean;
  }  

const Layout = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const TitleText = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: black;
  padding: 16px;
`;

const FloorPlan = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${ML});
  background-size: contain;
  background-repeat: no-repeat;
  border: 2px solid black;
  margin: 20px;
  border-radius: 10px;
`;

const ListWrapper = styled.div`
  height: 200px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 10px;
  margin: 20px;
`;

const WorkerList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin: 8px 0;
`;

const WorkerInfo = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
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

export default {Layout, Wrapper, TitleText, FloorPlan, ListWrapper, WorkerList, Worker, WorkerInfo, Point, FallingPoint}