import styled from 'styled-components';
import ML from '../images/ML_district.png';
import redpin from '../images/redpin.png';
import risk_person from '../images/risk_person.png';

interface PointProps {
    x: number;
    y: number;
  }

const RowWrapper = styled.div`
  display: flex;
`;

const ColumnWrapper = styled.div`
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

const SubTitleText = styled(TitleText)`
  font-size: 32px;
  padding: 0 16px;
`;

const FloorPlanWrapper = styled.div`
  width: 70%;
  height: 100%;
  margin: 0px 10px 0px 20px;
  border: 2px solid black;
`;

const FloorPlan = styled.div`
  position: relative;
  height: 360px;
  background-image: url(${ML});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
  
`;

const ListWrapper = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 20px;
`;

const WorkerList = styled.div`
  display: table;
`;

const WorkerInfo = styled.div`
  display: table-cell;
  padding: 10px;
  border: 1px solid black;
`;

const WorkerInfoTitle = styled.div`
  display: table-row;
  background-color: black;
  font-weight: bold;
  color: white;
`;

const WorkerInfoWrapper = styled(WorkerInfoTitle)`
  background-color: white;
  font-weight: normal;
  color: black;
`

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: bold;
  width: 30%;
  margin: 0px 20px 0px 10px;
  border: 2px solid black;
  padding: 20px;
`;

const Point = styled.div<PointProps>`
  position: absolute;
  width: 56px;
  height: 56px;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  background-image: url(${redpin});
  background-size: contain;
  background-repeat: no-repeat;
`

const FallingPoint = styled(Point)`
  background-image: url(${risk_person});
`

export default {RowWrapper, ColumnWrapper, TitleText, SubTitleText, FloorPlanWrapper, FloorPlan, ListWrapper, WorkerList, WorkerInfo, WorkerInfoTitle, WorkerInfoWrapper, StatusWrapper, Point, FallingPoint}